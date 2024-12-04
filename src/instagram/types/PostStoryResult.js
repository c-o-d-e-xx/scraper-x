/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

const { SharingFrictionInfo } = require("./PostMetadata");
const { CommentInformTreatment, ImageVersions2, User } = require("./PostModels");

class PostStoryResult {
    constructor(media, status) {
        this.media = media;
        this.status = status;
    }
}

class StoryMedia {
    constructor({
        taken_at,
        pk,
        id,
        device_timestamp,
        media_type,
        code,
        client_cache_key,
        filter_type,
        is_unified_video,
        user,
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
        caption_position,
        is_reel_media,
        timezone_offset,
        like_count,
        has_liked,
        likers,
        photo_of_you,
        can_see_insights_as_brand,
        caption,
        can_viewer_save,
        organic_tracking_token,
        expiring_at,
        sharing_friction_info,
        comment_inform_treatment,
        product_type,
        is_in_profile_grid,
        profile_grid_control_enabled,
        deleted_reason,
        integrity_review_decision,
        music_metadata,
        can_reshare,
        can_reply,
        story_is_saved_to_archive,
        story_static_models,
        viewers,
        viewer_count,
        fb_viewer_count,
        viewer_cursor,
        total_viewer_count,
        multi_author_reel_names,
        supports_reel_reactions,
        can_send_custom_emojis,
        show_one_tap_fb_share_tooltip,
        has_shared_to_fb,
        has_shared_to_fb_dating,
        source_type
    }) {
        this.taken_at = taken_at;
        this.pk = pk;
        this.id = id;
        this.device_timestamp = device_timestamp;
        this.media_type = media_type;
        this.code = code;
        this.client_cache_key = client_cache_key;
        this.filter_type = filter_type;
        this.is_unified_video = is_unified_video;
        this.user = user;
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
        this.caption_position = caption_position;
        this.is_reel_media = is_reel_media;
        this.timezone_offset = timezone_offset;
        this.like_count = like_count;
        this.has_liked = has_liked;
        this.likers = likers;
        this.photo_of_you = photo_of_you;
        this.can_see_insights_as_brand = can_see_insights_as_brand;
        this.caption = caption;
        this.can_viewer_save = can_viewer_save;
        this.organic_tracking_token = organic_tracking_token;
        this.expiring_at = expiring_at;
        this.sharing_friction_info = sharing_friction_info;
        this.comment_inform_treatment = comment_inform_treatment;
        this.product_type = product_type;
        this.is_in_profile_grid = is_in_profile_grid;
        this.profile_grid_control_enabled = profile_grid_control_enabled;
        this.deleted_reason = deleted_reason;
        this.integrity_review_decision = integrity_review_decision;
        this.music_metadata = music_metadata;
        this.can_reshare = can_reshare;
        this.can_reply = can_reply;
        this.story_is_saved_to_archive = story_is_saved_to_archive;
        this.story_static_models = story_static_models;
        this.viewers = viewers;
        this.viewer_count = viewer_count;
        this.fb_viewer_count = fb_viewer_count;
        this.viewer_cursor = viewer_cursor;
        this.total_viewer_count = total_viewer_count;
        this.multi_author_reel_names = multi_author_reel_names;
        this.supports_reel_reactions = supports_reel_reactions;
        this.can_send_custom_emojis = can_send_custom_emojis;
        this.show_one_tap_fb_share_tooltip = show_one_tap_fb_share_tooltip;
        this.has_shared_to_fb = has_shared_to_fb;
        this.has_shared_to_fb_dating = has_shared_to_fb_dating;
        this.source_type = source_type;
    }
}

module.exports = { PostStoryResult, StoryMedia };
