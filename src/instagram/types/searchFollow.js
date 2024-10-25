/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import User from PostModels
const { User } = require("./PostModels");

// Define the ISearchFollow class
class SearchFollow {
    /**
     * Constructor for the SearchFollow class.
     * @param {Object} options - Options to initialize the class.
     * @param {UserFollow[]} [options.users] - List of users following.
     * @param {boolean} [options.big_list] - Indicates if the list is large.
     * @param {number} [options.page_size] - Page size for pagination.
     * @param {boolean} [options.has_more] - Whether there are more results.
     * @param {boolean} [options.should_limit_list_of_followers] - Whether the follower list should be limited.
     * @param {boolean} [options.use_clickable_see_more] - Whether "See More" is clickable.
     * @param {boolean} [options.show_spam_follow_request_tab] - Whether to show the spam follow request tab.
     * @param {string} [options.status] - Status of the search follow request.
     */
    constructor({
        users = [],
        big_list = false,
        page_size = 0,
        has_more = false,
        should_limit_list_of_followers = false,
        use_clickable_see_more = false,
        show_spam_follow_request_tab = false,
        status = ''
    } = {}) {
        this.users = users;
        this.big_list = big_list;
        this.page_size = page_size;
        this.has_more = has_more;
        this.should_limit_list_of_followers = should_limit_list_of_followers;
        this.use_clickable_see_more = use_clickable_see_more;
        this.show_spam_follow_request_tab = show_spam_follow_request_tab;
        this.status = status;
    }
}

// Define the UserFollow class extending User
class UserFollow extends User {
    /**
     * Constructor for the UserFollow class.
     * @param {Object} options - Options to initialize the class.
     * @param {string} [options.pk_id] - Primary key ID of the user.
     * @param {number} [options.third_party_downloads_enabled] - Whether third-party downloads are enabled.
     * @param {string} [options.strong_id__] - Strong ID of the user.
     */
    constructor({ pk_id = '', third_party_downloads_enabled = 0, strong_id__ = '' } = {}) {
        super(); // Call the constructor of the parent User class
        this.pk_id = pk_id;
        this.third_party_downloads_enabled = third_party_downloads_enabled;
        this.strong_id__ = strong_id__;
    }
}

module.exports = {
    SearchFollow,
    UserFollow,
  
};
