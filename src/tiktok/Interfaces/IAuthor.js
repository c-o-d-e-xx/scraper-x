/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

/*
 * Represents the author of the TikTok video
 * @class
 */
class Author {
    /**
     * @constructor
     * @param {string} uniqueId - Unique ID of the Author
     * @param {number} id - ID of the Author
     * @param {string} avatar - Author Avatar Link
     * @param {string} [signature] - Bio of the Author
     * @param {string} [userCreated] - Registration Date of the User
     * @param {boolean} [verified] - Whether the Author is verified
     */
    constructor(uniqueId, id, avatar, signature, userCreated, verified) {
        this.uniqueId = uniqueId;
        this.id = id;
        this.avatar = avatar;
        this.signature = signature;
        this.user_created = userCreated; // Changed to user_created for JS naming convention
        this.verified = verified;
    }
}

// Exporting the Author class
module.exports = Author;
