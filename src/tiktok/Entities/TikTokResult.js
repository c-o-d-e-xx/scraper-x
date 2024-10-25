/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import the necessary interfaces
const { IAuthor, IVideo, IMusic, ITikTokResult } = require("../Interfaces");

class TikTokResult {
  /**
   * Represents the IAuthor interface.
   * @type {IAuthor}
   */
  author;

  /**
   * Represents the IVideo interface.
   * @type {IVideo}
   */
  video;

  /**
   * Represents the IMusic interface.
   * @type {IMusic}
   */
  audio;

  /**
   * Number of shares for this video.
   * @type {number}
   */
  shareCount;

  /**
   * Number of Likes for this video.
   * @type {number}
   */
  likesCount;

  /**
   * Number of comments for this video.
   * @type {number}
   */
  commentCount;

  /**
   * Number of the times this video has been played.
   * @type {number}
   */
  playCount;

  /**
   * When the video was created.
   * @type {string}
   */
  createdAt;

  /**
   * The absolute link of this video.
   * @type {string}
   */
  tiktokLink;

  /**
   * Thumbnail of the video.
   * @type {string}
   */
  thumbnail;

  /**
   * TikTokResult constructor
   * @param {IAuthor} author Represents the IAuthor interface.
   * @param {IVideo} video Represents the IVideo interface.
   * @param {IMusic} audio Represents the IMusic interface.
   * @param {number} shareCount Number of shares for this video.
   * @param {number} likesCount Number of Likes for this video.
   * @param {number} commentCount Number of comments for this video.
   * @param {number} playCount Number of times this video has been played.
   * @param {string} tiktok_created_At When the video was created.
   * @param {string} tiktokLink The absolute link of this video.
   * @param {string} thumbnail Thumbnail of the video.
   */
  constructor(
    author,
    video,
    audio,
    shareCount,
    likesCount,
    commentCount,
    playCount,
    tiktok_created_At,
    tiktokLink,
    thumbnail
  ) {
    this.author = author;
    this.video = video;
    this.audio = audio;
    this.shareCount = shareCount;
    this.likesCount = likesCount;
    this.commentCount = commentCount;
    this.playCount = playCount;
    this.createdAt = tiktok_created_At;
    this.tiktokLink = tiktokLink;
    this.thumbnail = thumbnail;
  }
}

// Export the TikTokResult class
module.exports = { TikTokResult };
