/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


const fs = require("fs");
const path = require("path");
const { IgCookie } = require("../types");

const DIR = path.join(__dirname, '../config/Cookies.txt');

class CookieHandler {
  constructor(IgCookie = '') {
    this.IgCookie = IgCookie;
  }

  /**
   * Save session ID to local directory
   * @param {string} IgCookie session ID
   * @returns {void}
   */
  save(IgCookie = this.IgCookie) {
    if (!fs.existsSync(DIR)) {
      fs.writeFileSync(DIR, IgCookie, 'utf-8');
    } else {
      this.update(IgCookie);
    }
  }

  /**
   * Update with new cookie if last cookie got error, e.g. account locked
   * @param {string} IgCookie
   * @returns {void}
   */
  update(IgCookie = this.IgCookie) {
    if (fs.existsSync(DIR)) {
      fs.writeFileSync(DIR, IgCookie, 'utf-8');
    } else {
      throw new Error(
        "Cookie hasn't been saved before, save cookie first using save()"
      );
    }
  }

  /**
   * Check if Cookies.txt is stored in local directory
   * @returns {boolean} true if file is stored in local directory
   */
  check() {
    return fs.existsSync(DIR);
  }

  /**
   * Get session ID
   * @returns {string} session ID
   */
  get() {
    let data = this.check()
      ? fs.readFileSync(DIR, 'utf-8').toString() || this.IgCookie
      : this.IgCookie;
    return data;
  }
}

module.exports = CookieHandler;
