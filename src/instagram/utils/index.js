const { Readable } = require('stream');
const { formattedShortcode, IGPostType, postType, ProductType } = require('../types/index');
const bigInt = require('big-integer');
const { createHmac } = require('crypto');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
const numbers = '0123456789';
const ig_alphabet = upper + lower + numbers + '-_';
const bigint_alphabet = numbers + lower;

/**
 * Convert Instagram shortcode into media_id
 * @param {string} shortcode 
 * @returns {string}
 */
const shortcodeToMediaID = (shortcode) => {
    const o = shortcode.replace(/\S/g, (m) => {
        const c = ig_alphabet.indexOf(m);
        const b = bigint_alphabet.charAt(c);
        return (b != "") ? b : `<${c}>`;
    });
    return bigInt(o, 64).toString(10);
}

/**
 * Convert media_id to Instagram shortcode
 * @param {string} media_id 
 * @returns {string}
 */
const shortcodeFromMediaID = (media_id) => {
    const o = bigInt(media_id).toString(64);
    return o.replace(/<(\d+)>|(\w)/g, (_m, m1, m2) => {
        return ig_alphabet.charAt((m1) ? parseInt(m1) : bigint_alphabet.indexOf(m2));
    });
}

/** Instagram post regex */
const IGPostRegex = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel(?:s|)|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/gim;

/**
 * Format Instagram long URL to get shortcode
 * @param {string} url - An Instagram post URL
 * @returns {formattedShortcode}
 */
const shortcodeFormatter = (url) => {
    const splitted = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel(?:s|)|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/gim.exec(url) || '';
    return {
        type: splitted[1],
        shortcode: splitted[2],
        url: 'https://www.instagram.com/' + splitted[1] + '/' + splitted[2],
        media_id: shortcodeToMediaID(splitted[2])
    };
};

/**
 * Check if URL is an Instagram post URL
 * @param {string} url - Instagram post URL
 * @returns {boolean}
 */
const isIgPostUrl = (url) => {
    return IGPostRegex.test(url);
}

/**
 * Get Instagram post type
 * @param {string} type - Product type
 * @returns {postType}
 */
const getPostType = (type) => {
    return type === ProductType.CAROUSEL
        ? IGPostType.carousel_container
        : type === ProductType.REEL
            ? IGPostType.clips
            : type === ProductType.SINGLE
                ? IGPostType.feed
                : type === ProductType.TV
                    ? IGPostType.igtv
                    : IGPostType.feed;
}

/** Get random number in range */
const randInt = (min, max, q = 0.001) => {
    return Math.floor((Math.random() * (min - max)) / q) * q;
}

/**
 * Convert buffer to readable stream
 * @param {Buffer} buffer 
 * @returns {Readable}
 */
const bufferToStream = (buffer) => {
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    readable.push(buffer);
    readable.push(null);
    return readable;
}

/**
 * Format cookie
 * @param {string[] | undefined} setCookie 
 * @returns {string}
 */
const formatCookie = (setCookie) => {
    return setCookie?.map(x => x.match(/(.*?=.*?);/)?.[1])?.join('; ');
}

/**
 * Parse cookie
 * @param {string} str 
 * @returns {Object}
 */
const parseCookie = (str) => {
    return str.split(';')
        .map(v => v.trim().split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0])] = decodeURIComponent(v[1]);
            delete acc[''];
            return acc;
        }, {});
}

module.exports = {
    shortcodeToMediaID,
    shortcodeFromMediaID,
    IGPostRegex,
    shortcodeFormatter,
    isIgPostUrl,
    getPostType,
    randInt,
    bufferToStream,
    formatCookie,
    parseCookie
};

