/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

const { Author } = require("./IAuthor");
const { Music } = require("./IMusic");
const { Video } = require("./IVideo");
const { TikTokResult } = require("./ITikTokResult");
const { User } = require("./IUser");

// Exporting the interfaces from their respective files
module.exports = {
    Author,
    Music,
    Video,
    TikTokResult,
    User
};
