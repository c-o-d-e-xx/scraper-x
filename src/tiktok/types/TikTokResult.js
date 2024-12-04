/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

/**
 * Represents the result of a TikTok scraping process.
 * @class
 */
class TikTokResult {
  /**
   * The author of the video.
   * @type {object}
   */
  author;

  /**
   * The video details.
   * @type {object}
   */
  video;

  /**
   * The audio details.
   * @type {object}
   */
  audio;

  /**
   * Number of shares for this video.
   * @type {number}
   */
  shareCount;

  /**
   * Number of likes for this video.
   * @type {number}
   */
  likesCount;

  /**
   * Number of comments for this video.
   * @type {number}
   */
  commentCount;

  /**
   * Number of times this video has been played.
   * @type {number}
   */
  playCount;

  /**
   * The creation date of the video.
   * @type {string}
   */
  createdAt;

  /**
   * The absolute link to the TikTok video.
   * @type {string}
   */
  tiktokLink;

  /**
   * The thumbnail of the video.
   * @type {string}
   */
  thumbnail;

  /**
   * Constructor for the TikTokResult class.
   * @param {object} author - The author of the video.
   * @param {object} video - The video details.
   * @param {object} audio - The audio details.
   * @param {number} shareCount - Number of shares for this video.
   * @param {number} likesCount - Number of likes for this video.
   * @param {number} commentCount - Number of comments for this video.
   * @param {number} playCount - Number of times this video has been played.
   * @param {string} createdAt - The creation date of the video.
   * @param {string} tiktokLink - The absolute link to the TikTok video.
   * @param {string} thumbnail - The thumbnail of the video.
   */
  constructor(
    author,
    video,
    audio,
    shareCount,
    likesCount,
    commentCount,
    playCount,
    createdAt,
    tiktokLink,
    thumbnail
  ) {
    this.author = author;          // Represents the author of the video
    this.video = video;            // Represents the video details
    this.audio = audio;            // Represents the audio details
    this.shareCount = shareCount;  // Number of shares
    this.likesCount = likesCount;  // Number of likes
    this.commentCount = commentCount; // Number of comments
    this.playCount = playCount;    // Number of plays
    this.createdAt = createdAt;    // Creation date of the video
    this.tiktokLink = tiktokLink;  // TikTok video link
    this.thumbnail = thumbnail;    // Video thumbnail
  }
}

// Exporting the TikTokResult class
module.exports = TikTokResult;
