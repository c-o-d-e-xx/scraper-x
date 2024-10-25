/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import necessary types from the current directory
const { Candidate, CommentInformTreatment, ImageVersions2, MusicMetadata, SharingFrictionInfo } = require('.');

/**
 * Represents the result of a post feed.
 */
class PostFeedResult {
    /**
     * @param {Media} media - Media details
     * @param {string} status - Status of the post feed result
     */
    constructor(media, status) {
        this.media = media;
        this.status = status;
    }
}

/**
 * Represents media information in a post.
 */
class Media {
    /**
     * @param {number} taken_at
     * @param {string} pk
     * @param {string} id
     * @param {number} device_timestamp
     * @param {number} media_type
     * @param {string} code
     * @param {string} client_cache_key
     * @param {number} filter_type
     * @param {string} accessibility_caption
     * @param {boolean} is_unified_video
     * @param {IPostOwnerUser} user
     * @param {boolean} can_viewer_reshare
     * @param {boolean} caption_is_edited
     * @param {boolean} like_and_view_counts_disabled
     * @param {string} commerciality_status
     * @param {boolean} is_paid_partnership
     * @param {boolean} is_visual_reply_commenter_notice_enabled
     * @param {boolean} original_media_has_visual_reply_media
     * @param {boolean} comment_likes_enabled
     * @param {boolean} comment_threading_enabled
     * @param {boolean} has_more_comments
     * @param {number} max_num_visible_preview_comments
     * @param {any[]} preview_comments
     * @param {any[]} comments
     * @param {boolean} can_view_more_preview_comments
     * @param {number} comment_count
     * @param {boolean} hide_view_all_comment_entrypoint
     * @param {ImageVersions2} image_versions2
     * @param {number} original_width
     * @param {number} original_height
     * @param {boolean} photo_of_you
     * @param {boolean} can_see_insights_as_brand
     * @param {null} caption
     * @param {FbUserTags} fb_user_tags
     * @param {boolean} can_viewer_save
     * @param {string} organic_tracking_token
     * @param {SharingFrictionInfo} sharing_friction_info
     * @param {CommentInformTreatment} comment_inform_treatment
     * @param {string} product_type
     * @param {boolean} is_in_profile_grid
     * @param {boolean} profile_grid_control_enabled
     * @param {number} deleted_reason
     * @param {string} integrity_review_decision
     * @param {MusicMetadata} music_metadata
     */
    constructor(
        taken_at,
        pk,
        id,
        device_timestamp,
        media_type,
        code,
        client_cache_key,
        filter_type,
        accessibility_caption,
        is_unified_video,
        user,
        can_viewer_reshare,
        caption_is_edited,
        like_and_view_counts_disabled,
        commerciality_status,
        is_paid_partnership,
        is_visual_reply_commenter_notice_enabled,
        original_media_has_visual_reply_media,
        comment_likes_enabled,
        comment_threading_enabled,
        has_more_comments,
        max_num_visible_preview_comments,
        preview_comments,
        comments,
        can_view_more_preview_comments,
        comment_count,
        hide_view_all_comment_entrypoint,
        image_versions2,
        original_width,
        original_height,
        photo_of_you,
        can_see_insights_as_brand,
        caption,
        fb_user_tags,
        can_viewer_save,
        organic_tracking_token,
        sharing_friction_info,
        comment_inform_treatment,
        product_type,
        is_in_profile_grid,
        profile_grid_control_enabled,
        deleted_reason,
        integrity_review_decision,
        music_metadata
    ) {
        this.taken_at = taken_at;
        this.pk = pk;
        this.id = id;
        this.device_timestamp = device_timestamp;
        this.media_type = media_type;
        this.code = code;
        this.client_cache_key = client_cache_key;
        this.filter_type = filter_type;
        this.accessibility_caption = accessibility_caption;
        this.is_unified_video = is_unified_video;
        this.user = user;
        this.can_viewer_reshare = can_viewer_reshare;
        this.caption_is_edited = caption_is_edited;
        this.like_and_view_counts_disabled = like_and_view_counts_disabled;
        this.commerciality_status = commerciality_status;
        this.is_paid_partnership = is_paid_partnership;
        this.is_visual_reply_commenter_notice_enabled = is_visual_reply_commenter_notice_enabled;
        this.original_media_has_visual_reply_media = original_media_has_visual_reply_media;
        this.comment_likes_enabled = comment_likes_enabled;
        this.comment_threading_enabled = comment_threading_enabled;
        this.has_more_comments = has_more_comments;
        this.max_num_visible_preview_comments = max_num_visible_preview_comments;
        this.preview_comments = preview_comments;
        this.comments = comments;
        this.can_view_more_preview_comments = can_view_more_preview_comments;
        this.comment_count = comment_count;
        this.hide_view_all_comment_entrypoint = hide_view_all_comment_entrypoint;
        this.image_versions2 = image_versions2;
        this.original_width = original_width;
        this.original_height = original_height;
        this.photo_of_you = photo_of_you;
        this.can_see_insights_as_brand = can_see_insights_as_brand;
        this.caption = caption;
        this.fb_user_tags = fb_user_tags;
        this.can_viewer_save = can_viewer_save;
        this.organic_tracking_token = organic_tracking_token;
        this.sharing_friction_info = sharing_friction_info;
        this.comment_inform_treatment = comment_inform_treatment;
        this.product_type = product_type;
        this.is_in_profile_grid = is_in_profile_grid;
        this.profile_grid_control_enabled = profile_grid_control_enabled;
        this.deleted_reason = deleted_reason;
        this.integrity_review_decision = integrity_review_decision;
        this.music_metadata = music_metadata;
    }
}

/**
 * Represents Facebook user tags in a post.
 */
class FbUserTags {
    /**
     * @param {any[]} inTags
     */
    constructor(inTags) {
        this.in = inTags;
    }
}

/**
 * Represents the owner user of the post.
 */
class IPostOwnerUser {
    /**
     * @param {number} pk
     * @param {string} username
     * @param {string} full_name
     * @param {boolean} is_private
     * @param {string} profile_pic_url
     * @param {string} profile_pic_id
     * @param {boolean} has_anonymous_profile_picture
     * @param {boolean} can_boost_post
     * @param {boolean} can_see_organic_insights
     * @param {boolean} show_insights_terms
     * @param {string} reel_auto_archive
     * @param {boolean} is_unpublished
     * @param {string} allowed_commenter_type
     * @param {boolean} has_highlight_reels
     * @param {string} interop_messaging_user_fbid
     * @param {string} fbid_v2
     */
    constructor(
        pk,
        username,
        full_name,
        is_private,
        profile_pic_url,
        profile_pic_id,
        has_anonymous_profile_picture,
        can_boost_post,
        can_see_organic_insights,
        show_insights_terms,
        reel_auto_archive,
        is_unpublished,
        allowed_commenter_type,
        has_highlight_reels,
        interop_messaging_user_fbid,
        fbid_v2
    ) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id;
        this.has_anonymous_profile_picture = has_anonymous_profile_picture;
        this.can_boost_post = can_boost_post;
        this.can_see_organic_insights = can_see_organic_insights;
        this.show_insights_terms = show_insights_terms;
        this.reel_auto_archive = reel_auto_archive;
        this.is_unpublished = is_unpublished;
        this.allowed_commenter_type = allowed_commenter_type;
        this.has_highlight_reels = has_highlight_reels;
        this.interop_messaging_user_fbid = interop_messaging_user_fbid;
        this.fbid_v2 = fbid_v2;
    }
}

module.exports = {
    PostFeedResult,
    Media,
    FbUserTags,
    IPostOwnerUser,
};
