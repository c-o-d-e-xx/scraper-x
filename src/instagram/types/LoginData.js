/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import the IgCookie interface or type from the respective file
const { IgCookie } = require("./Configuration");

/**
 * @class LoginData
 * Represents the login data for an Instagram user, including the cookie and user information.
 */
class LoginData {
    /**
     * @param {IgCookie} cookie - The session cookie.
     * @param {LoggedInUser} logged_in_user - The logged-in user's data.
     * @param {any} session_flush_nonce - The session flush nonce.
     * @param {string} status - The status of the login attempt.
     */
    constructor(cookie, logged_in_user, session_flush_nonce, status) {
        this.cookie = cookie;
        this.logged_in_user = logged_in_user;
        this.session_flush_nonce = session_flush_nonce;
        this.status = status;
    }
}

/**
 * @class LoggedInUser
 * Represents the logged-in Instagram user.
 */
class LoggedInUser {
    /**
     * @param {number} pk - The primary key (ID) of the user.
     * @param {string} username - The username of the user.
     * @param {string} full_name - The full name of the user.
     * @param {boolean} is_private - Whether the user's account is private.
     * @param {string} profile_pic_url - The URL of the user's profile picture.
     * @param {string} profile_pic_id - The ID of the profile picture.
     * @param {boolean} is_verified - Whether the user is verified.
     * @param {number} follow_friction_type - The follow friction type.
     * @param {GrowthFrictionInfo} growth_friction_info - Growth friction info for the user.
     * @param {boolean} has_anonymous_profile_picture - Whether the user has an anonymous profile picture.
     * @param {boolean} is_supervision_features_enabled - Whether supervision features are enabled.
     * @param {boolean} can_boost_post - Whether the user can boost posts.
     * @param {boolean} is_business - Whether the user is a business account.
     * @param {number} account_type - The type of the user's account.
     * @param {number} professional_conversion_suggested_account_type - Suggested account type for professional conversion.
     * @param {boolean} is_call_to_action_enabled - Whether a call to action is enabled.
     * @param {boolean} can_see_organic_insights - Whether the user can see organic insights.
     * @param {boolean} show_insights_terms - Whether insights terms are shown.
     * @param {number} total_igtv_videos - The total number of IGTV videos.
     * @param {boolean} has_igtv_series - Whether the user has an IGTV series.
     * @param {string} reel_auto_archive - The reel auto-archive setting.
     * @param {boolean} has_placed_orders - Whether the user has placed orders.
     * @param {string} allowed_commenter_type - The allowed commenter type.
     * @param {boolean} has_highlight_reels - Whether the user has highlight reels.
     * @param {Nametag} nametag - The user's nametag information.
     * @param {boolean} can_hide_category - Whether the user can hide their category.
     * @param {boolean} can_hide_public_contacts - Whether the user can hide public contacts.
     * @param {boolean} should_show_category - Whether the category should be shown.
     * @param {string} category - The user's category.
     * @param {boolean} should_show_public_contacts - Whether public contacts should be shown.
     * @param {boolean} is_using_unified_inbox_for_direct - Whether the user is using a unified inbox for direct messages.
     * @param {number} biz_user_inbox_state - The business user inbox state.
     * @param {boolean} wa_addressable - Whether the user is WhatsApp addressable.
     * @param {number} wa_eligibility - The user's WhatsApp eligibility.
     * @param {number} interop_messaging_user_fbid - The user's Facebook ID for interop messaging.
     * @param {boolean} can_see_primary_country_in_settings - Whether the primary country can be seen in settings.
     * @param {any[]} account_badges - The user's account badges.
     * @param {number} fbid_v2 - The user's Facebook ID (v2).
     * @param {number} all_media_count - The total media count.
     * @param {boolean} allow_contacts_sync - Whether the user allows contacts sync.
     * @param {string} phone_number - The user's phone number.
     * @param {number} country_code - The user's country code.
     * @param {number} national_number - The user's national number.
     */
    constructor(
        pk, username, full_name, is_private, profile_pic_url, profile_pic_id, is_verified, 
        follow_friction_type, growth_friction_info, has_anonymous_profile_picture, 
        is_supervision_features_enabled, can_boost_post, is_business, account_type, 
        professional_conversion_suggested_account_type, is_call_to_action_enabled, 
        can_see_organic_insights, show_insights_terms, total_igtv_videos, has_igtv_series, 
        reel_auto_archive, has_placed_orders, allowed_commenter_type, has_highlight_reels, 
        nametag, can_hide_category, can_hide_public_contacts, should_show_category, 
        category, should_show_public_contacts, is_using_unified_inbox_for_direct, 
        biz_user_inbox_state, wa_addressable, wa_eligibility, interop_messaging_user_fbid, 
        can_see_primary_country_in_settings, account_badges, fbid_v2, all_media_count, 
        allow_contacts_sync, phone_number, country_code, national_number
    ) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id;
        this.is_verified = is_verified;
        this.follow_friction_type = follow_friction_type;
        this.growth_friction_info = growth_friction_info;
        this.has_anonymous_profile_picture = has_anonymous_profile_picture;
        this.is_supervision_features_enabled = is_supervision_features_enabled;
        this.can_boost_post = can_boost_post;
        this.is_business = is_business;
        this.account_type = account_type;
        this.professional_conversion_suggested_account_type = professional_conversion_suggested_account_type;
        this.is_call_to_action_enabled = is_call_to_action_enabled;
        this.can_see_organic_insights = can_see_organic_insights;
        this.show_insights_terms = show_insights_terms;
        this.total_igtv_videos = total_igtv_videos;
        this.has_igtv_series = has_igtv_series;
        this.reel_auto_archive = reel_auto_archive;
        this.has_placed_orders = has_placed_orders;
        this.allowed_commenter_type = allowed_commenter_type;
        this.has_highlight_reels = has_highlight_reels;
        this.nametag = nametag;
        this.can_hide_category = can_hide_category;
        this.can_hide_public_contacts = can_hide_public_contacts;
        this.should_show_category = should_show_category;
        this.category = category;
        this.should_show_public_contacts = should_show_public_contacts;
        this.is_using_unified_inbox_for_direct = is_using_unified_inbox_for_direct;
        this.biz_user_inbox_state = biz_user_inbox_state;
        this.wa_addressable = wa_addressable;
        this.wa_eligibility = wa_eligibility;
        this.interop_messaging_user_fbid = interop_messaging_user_fbid;
        this.can_see_primary_country_in_settings = can_see_primary_country_in_settings;
        this.account_badges = account_badges;
        this.fbid_v2 = fbid_v2;
        this.all_media_count = all_media_count;
        this.allow_contacts_sync = allow_contacts_sync;
        this.phone_number = phone_number;
        this.country_code = country_code;
        this.national_number = national_number;
    }
}

/**
 * @class GrowthFrictionInfo
 * Represents the growth friction information.
 */
class GrowthFrictionInfo {
    /**
     * @param {boolean} has_active_interventions - Whether there are active interventions.
     * @param {Interventions} interventions - The interventions information.
     */
    constructor(has_active_interventions, interventions) {
        this.has_active_interventions = has_active_interventions;
        this.interventions = interventions;
    }
}

/**
 * @class Interventions
 * Represents the interventions structure (empty for now).
 */
class Interventions {}

/**
 * @class Nametag
 * Represents the user's nametag information.
 */
class Nametag {
    /**
     * @param {number} mode - The mode of the nametag.
     * @param {number} gradient - The gradient value of the nametag.
     * @param {string} emoji - The emoji used in the nametag.
     * @param {number} selfie_sticker - The selfie sticker value of the nametag.
     */
    constructor(mode, gradient, emoji, selfie_sticker) {
        this.mode = mode;
        this.gradient = gradient;
        this.emoji = emoji;
        this.selfie_sticker = selfie_sticker;
    }
}

module.exports = {
    LoginData,
    LoggedInUser,
    GrowthFrictionInfo,
    Interventions,
    Nametag
};
