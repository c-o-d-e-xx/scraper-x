/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


const axios = require('axios');
const { formatCookie } = require('../utils');
const { config } = require('../config');
const { csrfToken, IgCookie, LoginData } = require('../types');
const { randomUUID } = require('crypto');

/**
 * Get CSRF Token from Instagram login page
 * @returns {Promise<csrfToken>}
 */
const getCsrfToken = async () => {
    try {
        const { headers } = await axios({
            method: 'GET',
            url: 'https://www.instagram.com/accounts/login/'
        });
        let csrfToken = headers["set-cookie"]?.find(x => x.match(/csrftoken=(.*?);/)?.[1])?.match(/csrftoken=(.*?);/)?.[1] || '';
        return csrfToken;
    } catch (error) {
        throw error;
    }
};

/**
 * Get session ID using login method
 * @deprecated Recommended to use getCookie() function
 * @param {string} username Instagram username
 * @param {string} password Instagram password
 * @returns {Promise<IgCookie>}
 */
const getSessionId = async (username, password) => {
    if (typeof username !== 'string' || typeof password !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof username !== 'string' ? typeof username : typeof password}`);
    }
    try {
        const csrfToken = await getCsrfToken();
        const genHeaders = {
            'X-CSRFToken': csrfToken,
            'user-agent': config.desktop,
            'cache-Control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            referer: 'https://www.instagram.com/accounts/login/?source=auth_switcher',
            'authority': 'www.instagram.com',
            'origin': 'https://www.instagram.com',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'x-ig-app-id': '936619743392459',
            'x-ig-www-claim': 'hmac.AR3W0DThY2Mu5Fag4sW5u3RhaR3qhFD_5wvYbOJOD9qaPjIf',
            'x-instagram-ajax': '1',
            'x-requested-with': 'XMLHttpRequest',
            'Cookie': 'csrftoken=' + csrfToken + ';'
        };

        const { headers, data } = await axios({
            method: 'POST',
            url: 'https://www.instagram.com/accounts/login/ajax/',
            data: `username=${username}&enc_password=#PWD_INSTAGRAM_BROWSER:0:${Date.now()}:${password}&queryParams=%7B%22source%22%3A%22auth_switcher%22%7D&optIntoOneTap=false`,
            headers: genHeaders
        });

        const { userId: userID, authenticated } = data;
        if (authenticated) {
            let Cookie = formatCookie(headers['set-cookie']) || '';
            return Cookie;
        } else {
            throw new Error('Username or password is incorrect. Please check and try again');
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.toJSON();
        } else {
            throw error;
        }
    }
};

/**
 * Get Cookie
 * @param {string} username 
 * @param {string} password 
 * @param {boolean} [withLoginData=false] If true, returns login data along with cookie
 * @returns {Promise<IgCookie | LoginData>}
 */
const getCookie = async (username, password, withLoginData = false) => {
    try {
        let login_headers = {
            "User-Agent": "Instagram 100.1.0.29.135 Android",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Language": "en-US,en;q=0.9",
            Cookie: "",
        };

        const { headers: getHeaders } = await axios.get('https://i.instagram.com/api/v1/si/fetch_headers/?challenge_type=signup');
        login_headers.Cookie = formatCookie(getHeaders["set-cookie"]) || '';

        const res = await axios.post(
            'https://i.instagram.com/api/v1/accounts/login/',
            `username=${username}&password=${encodeURIComponent(password)}&device_id=${randomUUID()}&login_attempt_count=0`, {
                headers: login_headers
            }
        );

        const cookie = formatCookie(res.headers['set-cookie']) || '';
        const result = res.data;

        if (withLoginData) {
            result['cookie'] = cookie;
            return result;
        } else {
            return cookie;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = { getCsrfToken, getSessionId, getCookie };
