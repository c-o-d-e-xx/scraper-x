/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

// Import the interface
const IMusic = require("../Interfaces/IMusic").IMusic;

class Music {
  /**
   * tiktok music id
   * @type {number}
   */
  id;

  /**
   * tiktok music title
   * @type {string}
   */
  title;

  /**
   * direct link to the music
   * @type {string}
   */
  playURL;

  /**
   * tiktok music original cover
   * @type {string}
   */
  coverLarge;

  /**
   * tiktok music thumbnail cover
   * @type {string}
   */
  coverThumb;

  /**
   * tiktok music author
   * @type {string}
   */
  author;

  /**
   * tiktok music duration
   * @type {number}
   */
  duration;

  /**
   * Whether the music is original or user made
   * @type {boolean|undefined}
   */
  original;

  /**
   * The Album name if it is part of an album
   * @type {string|undefined}
   */
  album;

  /**
   * Constructor for the Music class
   * @param {number} id tiktok music id
   * @param {string} title tiktok music title
   * @param {string} playURL direct link to the music
   * @param {string} coverLarge tiktok music original cover
   * @param {string} coverThumb tiktok music thumbnail cover
   * @param {string} author tiktok music author
   * @param {number} duration tiktok music duration
   * @param {boolean|undefined} original Whether the music is original or user made
   * @param {string|undefined} album The Album name if it is part of an album
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
module.exports =
  { Music };
