/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

 /*
 * Represents a user on TikTok
 * @class
 */
class User {
    /**
     * @constructor
     * @param {string} id - The ID of the user
     * @param {string} uniqueId - The TikTok unique ID of the user
     * @param {string} nickname - The optional nickname of the user
     * @param {string} avatar - The avatar link of the user
     * @param {string} signature - The bio description of the user
     * @param {string} createdAt - The date of the creation of the user
     * @param {boolean} verified - Whether the user is verified by TikTok
     * @param {string} secretUID - The secret UID of the user
     * @param {string} bioLink - The link in the bio if it contains any
     * @param {boolean} privateAccount - Whether the account privacy is set to private
     * @param {number} followers - The number of followers for this user
     * @param {number} following - The number of accounts this user follows
     * @param {number} hearts - The total number of likes this user has received
     * @param {number} videos - The number of videos this user has posted
     */
    constructor(id, uniqueId, nickname, avatar, signature, createdAt, verified, secretUID, bioLink, privateAccount, followers, following, hearts, videos) {
        this.id = id;                          // User ID
        this.uniqueId = uniqueId;              // TikTok unique ID
        this.nickname = nickname;                // Optional nickname
        this.avatar = avatar;                    // Avatar link
        this.signature = signature;              // Bio description
        this.createdAt = createdAt;              // Creation date
        this.verified = verified;                // Verified status
        this.secretUID = secretUID;              // Secret UID
        this.bioLink = bioLink;                  // Bio link
        this.privateAccount = privateAccount;    // Privacy status
        this.followers = followers;              // Number of followers
        this.following = following;              // Number of accounts followed
        this.hearts = hearts;                    // Total likes received
        this.videos = videos;                    // Number of posted videos
    }
}

// Exporting the User class
module.exports = User;
