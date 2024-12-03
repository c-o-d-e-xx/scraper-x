/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


/**
 * Represents the result of the scraping process
 * @class
 */
class TikTokResult {
    /**
     * @constructor
     * @param {IAuthor} author - The author of the video
     * @param {IVideo} video - The video details
     * @param {IMusic} audio - The audio details
     * @param {number} shareCount - The number of shares
     * @param {number} likesCount - The number of likes
     * @param {number} commentCount - The number of comments
     * @param {number} playCount - The number of plays
     * @param {string} createdAt - The creation date of the video
     * @param {string} tiktokLink - The link to the TikTok video
     * @param {string} thumbnail - The thumbnail of the video
     */
    constructor(author, video, audio, shareCount, likesCount, commentCount, playCount, createdAt, tiktokLink, thumbnail) {
        this.author = author;          // IAuthor
        this.video = video;            // IVideo
        this.audio = audio;            // IMusic
        this.shareCount = shareCount;  // Number of shares
        this.likesCount = likesCount;  // Number of likes
        this.commentCount = commentCount; // Number of comments
        this.playCount = playCount;    // Number of plays
        this.createdAt = createdAt;    // Creation date
        this.tiktokLink = tiktokLink;  // TikTok video link
        this.thumbnail = thumbnail;    // Video thumbnail
    }
}

// Exporting the TikTokResult class
module.exports = TikTokResult;
