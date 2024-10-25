/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Export all modules
module.exports = {
    ...require('./HighlightMediaMetadata'),
    ...require('./HighlightMetadata'),
    ...require('./MediaConfigureOptions'),
    ...require('./PostFeedResult'),
    ...require('./PostMetadata'),
    ...require('./PostModels'),
    ...require('./PostStoryResult'),
    ...require('./StoriesMetadata'),
    ...require('./UserGraphQlV2'),
    ...require('./UserMetadata'),
    ...require('./PaginatedPosts'),
    ...require('./LoginData'),
    ...require('./searchFollow'),
};

// Define types
/**
 * @typedef {string} username - Instagram username
 * @typedef {string} userId - Instagram user pk
 * @typedef {string} seachTerm - Term to search for a user, can be their name or username
 * @typedef {string} password - Instagram password
 * @typedef {string} IgCookie - Instagram Cookie
 * @typedef {string} url - Instagram post url (can be post, reel, tv)
 */

// Define enums
const MediaType = Object.freeze({
    IMAGE: 1,
    VIDEO: 2,
    CAROUSEL: 8,
});

const ProductType = Object.freeze({
    CAROUSEL: 'carousel_container',
    REEL: 'clips',
    TV: 'igtv',
    SINGLE: 'feed',
});

const Typename = Object.freeze({
    GraphImage: 'GraphImage',
    GraphSidecar: 'GraphSidecar',
    GraphVideo: 'GraphVideo',
});

const IGPostType = Object.freeze({
    carousel_container: 'p',
    clips: 'reel',
    igtv: 'tv',
    feed: 'p',
});

// Define MimeType
/**
 * @typedef {'image/jpeg' | 'image/png' | 'video/mp4' | 'video/gif'} MimeType
 */

// Define additional types
/**
 * @typedef {string} csrfToken - CSRF Token
 * @typedef {'p' | 'reel' | 'tv'} postType - Instagram post type
 */

// Define interfaces
/**
 * @typedef {Object} formattedShortcode
 * @property {postType | string} type - Post type or string
 * @property {string} shortcode - Shortcode
 * @property {string} url - URL
 * @property {number | string} media_id - Media ID
 */

/**
 * @typedef {Object} IChangedProfilePicture
 * @property {boolean} changed_profile - Whether the profile was changed
 * @property {number} id - User ID
 * @property {boolean} has_profile_pic - Whether the user has a profile picture
 * @property {string} profile_pic_url - Profile picture URL
 * @property {string} profile_pic_url_hd - High-definition profile picture URL
 * @property {string} status - Status
 */

// Export constants and types
module.exports.MediaType = MediaType;
module.exports.ProductType = ProductType;
module.exports.Typename = Typename;
module.exports.IGPostType = IGPostType;
