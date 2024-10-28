/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

const { igApi } = require("./instagram")

const { ThreadsAPI } = require("./threads");

const { 
  getVideo,
  getUser,
  getAllVideosFromUser,
  getMusic,
  downloadAllVideosFromUser,
  noWaterMark,
  hashTag 
} = require("./tiktok")

module.exports = {
  igApi,
  ThreadsAPI,
  getVideo,
  getUser,
  getAllVideosFromUser,
  getMusic,
  downloadAllVideosFromUser,
  noWaterMark,
  hashTag
};
