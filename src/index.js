/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

const { igApi } = require("./instagram")

const { 
  getVideo,
  getUser,
  getAllVideosFromUser,
  getMusic,
  downloadAllVideosFromUser,
  noWaterMark,
  hashTag 
} = require("./tiktok")

const { ThreadsAPI, ThreadsAPIConfig } = require("./threads");

module.exports = {
  igApi,
  getVideo,
  getUser,
  getAllVideosFromUser,
  getMusic,
  downloadAllVideosFromUser,
  noWaterMark,
  hashTag,
  ThreadsAPI,
  ThreadsAPIConfig
};
