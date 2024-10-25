/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

 /*
 * Represents the music of the video
 * @class
 */
class Music {
    /**
     * @constructor
     * @param {number} id - TikTok music ID
     * @param {string} title - TikTok music title
     * @param {string} playURL - Direct link to this music
     * @param {string} coverLarge - TikTok music original cover
     * @param {string} coverThumb - TikTok music thumbnail cover
     * @param {string} author - TikTok music author
     * @param {number} duration - TikTok music duration
     * @param {boolean} [original] - Whether the music is original or user-made
     * @param {string} [album] - The Album name if it is part of an album
     */
    constructor(id, title, playURL, coverLarge, coverThumb, author, duration, original, album) {
        this.id = id;
        this.title = title;
        this.playURL = playURL;
        this.coverLarge = coverLarge;
        this.coverThumb = coverThumb;
        this.author = author;
        this.duration = duration;
        this.original = original; // Optional property
        this.album = album;       // Optional property
    }
}

// Exporting the Music class
module.exports = Music;
