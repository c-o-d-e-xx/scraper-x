/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

/**
 * Represents TikTok music with detailed metadata.
 * @class
 */
class Music {
  /**
   * TikTok music ID
   * @type {number}
   */
  id;

  /**
   * TikTok music title
   * @type {string}
   */
  title;

  /**
   * Direct link to the music
   * @type {string}
   */
  playURL;

  /**
   * TikTok music original cover
   * @type {string}
   */
  coverLarge;

  /**
   * TikTok music thumbnail cover
   * @type {string}
   */
  coverThumb;

  /**
   * TikTok music author
   * @type {string}
   */
  author;

  /**
   * TikTok music duration
   * @type {number}
   */
  duration;

  /**
   * Whether the music is original or user-made
   * @type {boolean|undefined}
   */
  original;

  /**
   * The album name if it is part of an album
   * @type {string|undefined}
   */
  album;

  /**
   * Constructor for the Music class
   * @param {number} id TikTok music ID
   * @param {string} title TikTok music title
   * @param {string} playURL Direct link to this music
   * @param {string} coverLarge TikTok music original cover
   * @param {string} coverThumb TikTok music thumbnail cover
   * @param {string} author TikTok music author
   * @param {number} duration TikTok music duration
   * @param {boolean|undefined} original Whether the music is original or user-made
   * @param {string|undefined} album The album name if it is part of an album
   */
  constructor(id, title, playURL, coverLarge, coverThumb, author, duration, original, album) {
    this.id = id;
    this.title = title;
    this.playURL = playURL;
    this.coverLarge = coverLarge;
    this.coverThumb = coverThumb;
    this.author = author;
    this.duration = duration;
    this.original = original;
    this.album = album;
  }
}

// Export the Music class
module.exports = Music;
