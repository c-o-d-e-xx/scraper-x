/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import the IVideo interface
const { IVideo } = require("../Interfaces");

class Video {
  /**
   * The unique id of the video.
   * @type {string}
   */
  id;

  /**
   * The description of the video if available.
   * @type {string}
   */
  description;

  /**
   * The date on which the video was created on TikTok.
   * @type {string}
   */
  createdAt;

  /**
   * Height of the video.
   * @type {number}
   */
  height;

  /**
   * Width of the video.
   * @type {number}
   */
  width;

  /**
   * Duration of the video.
   * @type {number}
   */
  duration;

  /**
   * Resolution of the video.
   * @type {string}
   */
  resolution;

  /**
   * Number of times the video was shared.
   * @type {number}
   */
  shareCount;

  /**
   * Number of likes on the video.
   * @type {number}
   */
  likesCount;

  /**
   * Number of comments on the video.
   * @type {number}
   */
  commentCount;

  /**
   * Number of times the video has been played.
   * @type {number}
   */
  playCount;

  /**
   * A direct download URL for the video.
   * @type {string}
   */
  downloadURL;

  /**
   * A direct URL to the video cover (optional).
   * @type {string | undefined}
   */
  cover;

  /**
   * A direct URL to the dynamic video cover (optional).
   * @type {string | undefined}
   */
  dynamicCover;

  /**
   * A direct play URL for the video (optional).
   * @type {string | undefined}
   */
  playURL;

  /**
   * The format of the video (optional).
   * @type {string | undefined}
   */
  format;

  /**
   * Author of the video (optional).
   * @type {string | undefined}
   */
  author;

  /**
   * Direct link to the video (optional).
   * @type {string | undefined}
   */
  directVideoUrl;

  /**
   * Video constructor.
   * @param {string} id The unique id of the video.
   * @param {string} description The description of the video if available.
   * @param {string} createdAt The date on which the video was created on TikTok.
   * @param {number} height Height of the video.
   * @param {number} width Width of the video.
   * @param {number} duration Duration of the video.
   * @param {string} resolution Resolution of the video.
   * @param {number} shareCount Number of times the video was shared.
   * @param {number} likesCount Number of likes on the video.
   * @param {number} commentCount Number of comments on the video.
   * @param {number} playCount Number of times the video has been played.
   * @param {string} downloadURL A direct download URL for the video.
   * @param {string | undefined} cover A direct URL to the video cover.
   * @param {string | undefined} dynamicCover A direct URL to the dynamic video cover.
   * @param {string | undefined} playURL A direct play URL for the video.
   * @param {string | undefined} format The format of the video.
   * @param {string | undefined} author The author of the video.
   * @param {string | undefined} directVideoUrl A direct link to the video.
   */
  constructor(
    id,
    description,
    createdAt,
    height,
    width,
    duration,
    resolution,
    shareCount,
    likesCount,
    commentCount,
    playCount,
    downloadURL,
    cover,
    dynamicCover,
    playURL,
    format,
    author,
    directVideoUrl
  ) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.height = height;
    this.width = width;
    this.duration = duration;
    this.resolution = resolution;
    this.shareCount = shareCount;
    this.likesCount = likesCount;
    this.commentCount = commentCount;
    this.playCount = playCount;
    this.downloadURL = downloadURL;
    this.cover = cover;
    this.dynamicCover = dynamicCover;
    this.playURL = playURL;
    this.format = format;
    this.author = author;
    this.directVideoUrl = directVideoUrl;
  }
}

// Export the Video class
module.exports = { Video };
