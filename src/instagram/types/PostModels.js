/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


const { Dimensions, postType, SharingFrictionInfo } = require(".");

class IPostModel {
    constructor({
        username,
        name,
        postType,
        media_id,
        shortcode,
        taken_at_timestamp,
        likes,
        caption,
        media_count,
        comment_count,
        video_duration,
        music = null,
        links
    }) {
        this.username = username; // an Instagram Username
        this.name = name; // Instagram Full Name
        this.postType = postType; // Instagram Post type
        this.media_id = media_id; // media id
        this.shortcode = shortcode; // post shortcode
        this.taken_at_timestamp = taken_at_timestamp; // a timestamp of posted media
        this.likes = likes; // the number of user who like an Instagram post
        this.caption = caption; // a caption from Instagram post
        this.media_count = media_count; // total media
        this.comment_count = comment_count; // comment count
        this.video_duration = video_duration; // if post is video
        this.music = music; // music info will show if post is Reel
        this.links = links; // media urls
    }
}

// Define MediaUrls class
class MediaUrls {
    constructor({ id, type, url, dimensions }) {
        this.id = id; // Media ID
        this.type = type; // Type of media
        this.url = url; // URL of downloadable media
        this.dimensions = Dimensions; // Dimensions of the media
    }
}

class IRawBody {
    constructor({ items, num_results, more_available, auto_load_more_enabled }) {
        this.items = items; // Array of Item objects
        this.num_results = num_results; // Number of results
        this.more_available = more_available; // Indicates if more items are available
        this.auto_load_more_enabled = auto_load_more_enabled; // Indicates if auto-load more is enabled
    }
}

class Item {
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
        can_viewer_reshare,
        caption_is_edited,
        like_and_view_counts_disabled,
        featured_products_cta = null,
        commerciality_status,
        is_paid_partnership,
        is_visual_reply_commenter_notice_enabled,
        original_media_has_visual_reply_media,
        comment_likes_enabled,
        comment_threading_enabled,
        has_more_comments,
        max_num_visible_preview_comments,
        carousel_media_count,
        carousel_media,
        next_max_id,
        preview_comments,
        comments,
        can_view_more_preview_comments,
        comment_count,
        hide_view_all_comment_entrypoint,
        inline_composer_display_condition,
        image_versions2,
        original_width,
        original_height,
        like_count,
        has_liked,
        top_likers = [],
        facepile_top_likers = [],
        photo_of_you,
        can_see_insights_as_brand,
        mashup_info,
        is_dash_eligible,
        video_dash_manifest,
        video_codec,
        number_of_qualities,
        video_versions,
        has_audio,
        video_duration,
        view_count,
        caption,
        can_viewer_save,
        organic_tracking_token,
        sharing_friction_info,
        comment_inform_treatment,
        product_type,
        is_in_profile_grid,
        profile_grid_control_enabled,
        deleted_reason,
        integrity_review_decision,
        music_metadata,
        clips_metadata,
        media_cropping_info,
        has_translation,
        caption_position,
        is_reel_media,
        expiring_at,
        can_reshare,
        can_reply,
        story_static_models = [],
        supports_reel_reactions,
        can_send_custom_emojis,
        show_one_tap_fb_share_tooltip,
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
        this.can_viewer_reshare = can_viewer_reshare;
        this.caption_is_edited = caption_is_edited;
        this.like_and_view_counts_disabled = like_and_view_counts_disabled;
        this.featured_products_cta = featured_products_cta;
        this.commerciality_status = commerciality_status;
        this.is_paid_partnership = is_paid_partnership;
        this.is_visual_reply_commenter_notice_enabled = is_visual_reply_commenter_notice_enabled;
        this.original_media_has_visual_reply_media = original_media_has_visual_reply_media;
        this.comment_likes_enabled = comment_likes_enabled;
        this.comment_threading_enabled = comment_threading_enabled;
        this.has_more_comments = has_more_comments;
        this.max_num_visible_preview_comments = max_num_visible_preview_comments;
        this.carousel_media_count = carousel_media_count;
        this.carousel_media = carousel_media;
        this.next_max_id = next_max_id;
        this.preview_comments = preview_comments;
        this.comments = comments;
        this.can_view_more_preview_comments = can_view_more_preview_comments;
        this.comment_count = comment_count;
        this.hide_view_all_comment_entrypoint = hide_view_all_comment_entrypoint;
        this.inline_composer_display_condition = inline_composer_display_condition;
        this.image_versions2 = image_versions2;
        this.original_width = original_width;
        this.original_height = original_height;
        this.like_count = like_count;
        this.has_liked = has_liked;
        this.top_likers = top_likers;
        this.facepile_top_likers = facepile_top_likers;
        this.photo_of_you = photo_of_you;
        this.can_see_insights_as_brand = can_see_insights_as_brand;
        this.mashup_info = mashup_info;
        this.is_dash_eligible = is_dash_eligible;
        this.video_dash_manifest = video_dash_manifest;
        this.video_codec = video_codec;
        this.number_of_qualities = number_of_qualities;
        this.video_versions = video_versions;
        this.has_audio = has_audio;
        this.video_duration = video_duration;
        this.view_count = view_count;
        this.caption = caption;
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
        this.clips_metadata = clips_metadata;
        this.media_cropping_info = media_cropping_info;
        this.has_translation = has_translation;
        this.caption_position = caption_position;
        this.is_reel_media = is_reel_media;
        this.expiring_at = expiring_at;
        this.can_reshare = can_reshare;
        this.can_reply = can_reply;
        this.story_static_models = story_static_models;
        this.supports_reel_reactions = supports_reel_reactions;
        this.can_send_custom_emojis = can_send_custom_emojis;
        this.show_one_tap_fb_share_tooltip = show_one_tap_fb_share_tooltip;
    }
}

class Caption {
    constructor(
        pk,
        userId,
        text,
        type,
        createdAt,
        createdAtUtc,
        contentType,
        status,
        bitFlags,
        didReportAsSpam,
        shareEnabled,
        user,
        isCovered,
        mediaId,
        privateReplyStatus
    ) {
        this.pk = pk;
        this.user_id = userId;
        this.text = text;
        this.type = type;
        this.created_at = createdAt;
        this.created_at_utc = createdAtUtc;
        this.content_type = contentType;
        this.status = status;
        this.bit_flags = bitFlags;
        this.did_report_as_spam = didReportAsSpam;
        this.share_enabled = shareEnabled;
        this.user = user; // Instance of User class
        this.is_covered = isCovered;
        this.media_id = mediaId;
        this.private_reply_status = privateReplyStatus;
    }
}

class User {
    constructor(
        pk,
        username,
        fullName,
        isPrivate,
        profilePicUrl,
        profilePicId,
        friendshipStatus,
        isVerified,
        followFrictionType,
        hasAnonymousProfilePicture,
        isUnpublished,
        isFavorite,
        latestReelMedia,
        hasHighlightReels,
        liveBroadcastId,
        liveBroadcastVisibility,
        canBoostPost,
        canSeeOrganicInsights,
        showInsightsTerms,
        reelAutoArchive,
        allowedCommenterType,
        interopMessagingUserFbid,
        fbidV2,
        accountBadges
    ) {
        this.pk = pk;
        this.username = username;
        this.full_name = fullName;
        this.is_private = isPrivate;
        this.profile_pic_url = profilePicUrl;
        this.profile_pic_id = profilePicId;
        this.friendship_status = friendshipStatus || false; // Optional property
        this.is_verified = isVerified;
        this.follow_friction_type = followFrictionType;
        this.has_anonymous_profile_picture = hasAnonymousProfilePicture;
        this.is_unpublished = isUnpublished;
        this.is_favorite = isFavorite;
        this.latest_reel_media = latestReelMedia;
        this.has_highlight_reels = hasHighlightReels;
        this.live_broadcast_id = liveBroadcastId || null; // Optional property
        this.live_broadcast_visibility = liveBroadcastVisibility || null; // Optional property
        this.can_boost_post = canBoostPost;
        this.can_see_organic_insights = canSeeOrganicInsights;
        this.show_insights_terms = showInsightsTerms;
        this.reel_auto_archive = reelAutoArchive;
        this.allowed_commenter_type = allowedCommenterType;
        this.interop_messaging_user_fbid = interopMessagingUserFbid;
        this.fbid_v2 = fbidV2;
        this.account_badges = accountBadges || []; // Default to an empty array
    }
}

class FriendshipStatus {
    constructor(
        following,
        outgoingRequest,
        isBestie,
        isRestricted,
        isFeedFavorite,
        followedBy,
        blocking,
        muting,
        isPrivate,
        incomingRequest
    ) {
        this.following = following;
        this.outgoing_request = outgoingRequest;
        this.is_bestie = isBestie;
        this.is_restricted = isRestricted;
        this.is_feed_favorite = isFeedFavorite;
        this.followed_by = followedBy;
        this.blocking = blocking;
        this.muting = muting;
        this.is_private = isPrivate;
        this.incoming_request = incomingRequest;
    }
}

class CarouselMedia {
    constructor(
        id,
        mediaType,
        imageVersions2,
        originalWidth,
        originalHeight,
        pk,
        carouselParentId,
        canSeeInsightsAsBrand,
        usertags,
        commercialityStatus,
        sharingFrictionInfo,
        commentInformTreatment,
        videoVersions,
        videoDuration,
        isDashEligible,
        videoDashManifest,
        videoCodec,
        numberOfQualities
    ) {
        this.id = id;
        this.media_type = mediaType;
        this.image_versions2 = imageVersions2; // Instance of ImageVersions2 class
        this.original_width = originalWidth;
        this.original_height = originalHeight;
        this.pk = pk;
        this.carousel_parent_id = carouselParentId;
        this.can_see_insights_as_brand = canSeeInsightsAsBrand;
        this.usertags = usertags || undefined; // Optional Usertags instance
        this.commerciality_status = commercialityStatus;
        this.sharing_friction_info = sharingFrictionInfo; // Instance of SharingFrictionInfo class
        this.comment_inform_treatment = commentInformTreatment; // Instance of CommentInformTreatment class
        this.video_versions = videoVersions || undefined; // Optional array of VideoVersion instances
        this.video_duration = videoDuration || undefined; // Optional property
        this.is_dash_eligible = isDashEligible || undefined; // Optional property
        this.video_dash_manifest = videoDashManifest || undefined; // Optional property
        this.video_codec = videoCodec || undefined; // Optional property
        this.number_of_qualities = numberOfQualities || undefined; // Optional property
    }
}

class ClipsMetadata {
    constructor({
        music_info,
        original_sound_info,
        audio_type,
        music_canonical_id,
        featured_label = null,
        mashup_info,
        nux_info = null,
        viewer_interaction_settings = null,
        branded_content_tag_info,
        shopping_info = null,
        additional_audio_info,
        is_shared_to_fb,
        breaking_content_info = null,
        challenge_info = null,
        reels_on_the_rise_info = null,
        breaking_creator_info = null,
        asset_recommendation_info = null,
        contextual_highlight_info = null,
        clips_creation_entry_point,
        audio_ranking_info
    }) {
        this.music_info = music_info;
        this.original_sound_info = original_sound_info;
        this.audio_type = audio_type;
        this.music_canonical_id = music_canonical_id;
        this.featured_label = featured_label;
        this.mashup_info = mashup_info;
        this.nux_info = nux_info;
        this.viewer_interaction_settings = viewer_interaction_settings;
        this.branded_content_tag_info = branded_content_tag_info;
        this.shopping_info = shopping_info;
        this.additional_audio_info = additional_audio_info;
        this.is_shared_to_fb = is_shared_to_fb;
        this.breaking_content_info = breaking_content_info;
        this.challenge_info = challenge_info;
        this.reels_on_the_rise_info = reels_on_the_rise_info;
        this.breaking_creator_info = breaking_creator_info;
        this.asset_recommendation_info = asset_recommendation_info;
        this.contextual_highlight_info = contextual_highlight_info;
        this.clips_creation_entry_point = clips_creation_entry_point;
        this.audio_ranking_info = audio_ranking_info;
    }
}

class AdditionalAudioInfo {
    constructor(additional_audio_username = null, audio_reattribution_info = new AudioReattributionInfo()) {
        this.additional_audio_username = additional_audio_username;
        this.audio_reattribution_info = audio_reattribution_info;
    }
}

class AudioReattributionInfo {
    constructor(should_allow_restore = false) {
        this.should_allow_restore = should_allow_restore;
    }
}

class AudioRankingInfo {
    constructor(best_audio_cluster_id = '') {
        this.best_audio_cluster_id = best_audio_cluster_id;
    }
}

class BrandedContentTagInfo {
    constructor(can_add_tag = false) {
        this.can_add_tag = can_add_tag;
    }
}

class MashupInfo {
    constructor(
        mashups_allowed = false, 
        can_toggle_mashups_allowed = false, 
        has_been_mashed_up = false,
        formatted_mashups_count = null, 
        original_media = null, 
        non_privacy_filtered_mashups_media_count = null
    ) {
        this.mashups_allowed = mashups_allowed;
        this.can_toggle_mashups_allowed = can_toggle_mashups_allowed;
        this.has_been_mashed_up = has_been_mashed_up;
        this.formatted_mashups_count = formatted_mashups_count;
        this.original_media = original_media;
        this.non_privacy_filtered_mashups_media_count = non_privacy_filtered_mashups_media_count;
    }
}

class MusicInfo {
    constructor(music_asset_info = new MusicAssetInfo(), music_consumption_info = new MusicConsumptionInfo(), push_blocking_test = null) {
        this.music_asset_info = music_asset_info;
        this.music_consumption_info = music_consumption_info;
        this.push_blocking_test = push_blocking_test;
    }
}

// Define and export the MusicAssetInfo class
class MusicAssetInfo {
    constructor(
        audio_cluster_id,
        id,
        title,
        subtitle,
        display_artist,
        artist_id,
        cover_artwork_uri,
        cover_artwork_thumbnail_uri,
        progressive_download_url,
        reactive_audio_download_url,
        fast_start_progressive_download_url,
        highlight_start_times_in_ms,
        is_explicit,
        dash_manifest,
        has_lyrics,
        audio_asset_id,
        duration_in_ms,
        dark_message,
        allows_saving,
        territory_validity_periods
    ) {
        this.audio_cluster_id = audio_cluster_id;
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.display_artist = display_artist;
        this.artist_id = artist_id;
        this.cover_artwork_uri = cover_artwork_uri;
        this.cover_artwork_thumbnail_uri = cover_artwork_thumbnail_uri;
        this.progressive_download_url = progressive_download_url;
        this.reactive_audio_download_url = reactive_audio_download_url;
        this.fast_start_progressive_download_url = fast_start_progressive_download_url;
        this.highlight_start_times_in_ms = highlight_start_times_in_ms;
        this.is_explicit = is_explicit;
        this.dash_manifest = dash_manifest;
        this.has_lyrics = has_lyrics;
        this.audio_asset_id = audio_asset_id;
        this.duration_in_ms = duration_in_ms;
        this.dark_message = dark_message;
        this.allows_saving = allows_saving;
        this.territory_validity_periods = territory_validity_periods;
    }
}

// Define and export the TerritoryValidityPeriods class
class TerritoryValidityPeriods {
    constructor() {
        // Implement any specific properties here if needed
    }
}


// Define and export the MusicConsumptionInfo class
class MusicConsumptionInfo {
    constructor(
        ig_artist,
        placeholder_profile_pic_url,
        should_mute_audio,
        should_mute_audio_reason,
        is_bookmarked,
        overlap_duration_in_ms,
        audio_asset_start_time_in_ms,
        allow_media_creation_with_music,
        is_trending_in_clips,
        formatted_clips_media_count,
        streaming_services,
        display_labels
    ) {
        this.ig_artist = ig_artist;
        this.placeholder_profile_pic_url = placeholder_profile_pic_url;
        this.should_mute_audio = should_mute_audio;
        this.should_mute_audio_reason = should_mute_audio_reason;
        this.is_bookmarked = is_bookmarked;
        this.overlap_duration_in_ms = overlap_duration_in_ms;
        this.audio_asset_start_time_in_ms = audio_asset_start_time_in_ms;
        this.allow_media_creation_with_music = allow_media_creation_with_music;
        this.is_trending_in_clips = is_trending_in_clips;
        this.formatted_clips_media_count = formatted_clips_media_count;
        this.streaming_services = streaming_services;
        this.display_labels = display_labels;
    }
}

// Define and export the CoauthorProducerFriendshipStatus class
class CoauthorProducerFriendshipStatus {
    constructor(
        following,
        followed_by,
        blocking,
        muting,
        is_private,
        incoming_request,
        outgoing_request,
        is_bestie,
        is_restricted,
        is_feed_favorite
    ) {
        this.following = following;
        this.followed_by = followed_by;
        this.blocking = blocking;
        this.muting = muting;
        this.is_private = is_private;
        this.incoming_request = incoming_request;
        this.outgoing_request = outgoing_request;
        this.is_bestie = is_bestie;
        this.is_restricted = is_restricted;
        this.is_feed_favorite = is_feed_favorite;
    }
}

// Define and export the CoauthorProducer class
class CoauthorProducer {
    constructor(
        pk,
        username,
        full_name,
        is_private,
        profile_pic_url,
        profile_pic_id,
        is_verified,
        follow_friction_type,
        friendship_status
    ) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id || null; // Optional field
        this.is_verified = is_verified;
        this.follow_friction_type = follow_friction_type;
        this.friendship_status = friendship_status instanceof CoauthorProducerFriendshipStatus
            ? friendship_status
            : new CoauthorProducerFriendshipStatus(); // Ensure it's an instance of the correct class
    }
}

// OriginalSoundInfo.js
class ConsumptionInfo {
    constructor(is_bookmarked, should_mute_audio_reason, is_trending_in_clips) {
        this.is_bookmarked = is_bookmarked;
        this.should_mute_audio_reason = should_mute_audio_reason;
        this.is_trending_in_clips = is_trending_in_clips;
    }
}

class IgArtist {
    constructor(pk, username, full_name, is_private, profile_pic_url, profile_pic_id, is_verified, friendship_status = null) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id;
        this.is_verified = is_verified;
        this.friendship_status = friendship_status;
    }
}

class OriginalSoundInfo {
    constructor(
        audio_asset_id,
        progressive_download_url,
        dash_manifest,
        ig_artist,
        should_mute_audio,
        original_media_id,
        hide_remixing,
        duration_in_ms,
        time_created,
        original_audio_title,
        consumption_info,
        allow_creator_to_rename,
        can_remix_be_shared_to_fb,
        formatted_clips_media_count,
        audio_parts,
        is_explicit,
        original_audio_subtype,
        is_audio_automatically_attributed
    ) {
        this.audio_asset_id = audio_asset_id;
        this.progressive_download_url = progressive_download_url;
        this.dash_manifest = dash_manifest;
        this.ig_artist = ig_artist; // Instance of IgArtist
        this.should_mute_audio = should_mute_audio;
        this.original_media_id = original_media_id;
        this.hide_remixing = hide_remixing;
        this.duration_in_ms = duration_in_ms;
        this.time_created = time_created;
        this.original_audio_title = original_audio_title; // Array of strings
        this.consumption_info = consumption_info; // Instance of ConsumptionInfo
        this.allow_creator_to_rename = allow_creator_to_rename;
        this.can_remix_be_shared_to_fb = can_remix_be_shared_to_fb;
        this.formatted_clips_media_count = formatted_clips_media_count; // Can be null
        this.audio_parts = audio_parts; // Array
        this.is_explicit = is_explicit;
        this.original_audio_subtype = original_audio_subtype;
        this.is_audio_automatically_attributed = is_audio_automatically_attributed;
    }
}

class IgArtistFriendshipStatus {
    constructor(following, followed_by, blocking, muting, is_private, incoming_request, outgoing_request, is_bestie, is_restricted, is_feed_favorite) {
        this.following = following;
        this.followed_by = followed_by;
        this.blocking = blocking;
        this.muting = muting;
        this.is_private = is_private;
        this.incoming_request = incoming_request;
        this.outgoing_request = outgoing_request;
        this.is_bestie = is_bestie;
        this.is_restricted = is_restricted;
        this.is_feed_favorite = is_feed_favorite;
    }
}

class InUser {
    constructor(pk, username, full_name, is_private, profile_pic_url, profile_pic_id, is_verified, follow_friction_type) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id;
        this.is_verified = is_verified;
        this.follow_friction_type = follow_friction_type;
    }
}

class In {
    constructor(user, position, start_time_in_video_in_sec, duration_in_video_in_sec) {
        this.user = user;
        this.position = position;
        this.start_time_in_video_in_sec = start_time_in_video_in_sec;
        this.duration_in_video_in_sec = duration_in_video_in_sec;
    }
}

class Usertags {
    constructor(inArray) {
        this.in = inArray; // Expecting an array of In instances
    }
}

class VideoVersion {
    constructor(type, width, height, url, id) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.url = url;
        this.id = id;
    }
}

class Location {
    constructor(pk, short_name, facebook_places_id, external_source, name, address, city, has_viewer_saved, lng, lat, is_eligible_for_guides) {
        this.pk = pk;
        this.short_name = short_name;
        this.facebook_places_id = facebook_places_id;
        this.external_source = external_source;
        this.name = name;
        this.address = address;
        this.city = city;
        this.has_viewer_saved = has_viewer_saved;
        this.lng = lng;
        this.lat = lat;
        this.is_eligible_for_guides = is_eligible_for_guides;
    }
}

class ImageVersions2 {
    constructor(candidates, additional_candidates, animated_thumbnail_spritesheet_info_candidates) {
        this.candidates = candidates;
        this.additional_candidates = additional_candidates;
        this.animated_thumbnail_spritesheet_info_candidates = animated_thumbnail_spritesheet_info_candidates;
    }
}

class AdditionalCandidates {
    constructor(igtv_first_frame, first_frame) {
        this.igtv_first_frame = igtv_first_frame;
        this.first_frame = first_frame;
    }
}

class FirstFrame {
    constructor(width, height, url) {
        this.width = width;
        this.height = height;
        this.url = url;
    }
}

class AnimatedThumbnailSpritesheetInfoCandidates {
    constructor() {
        this.default = new Default(); // Instantiate Default class
    }
}

class Default {
    constructor(video_length, thumbnail_width, thumbnail_height, thumbnail_duration, sprite_urls, thumbnails_per_row, total_thumbnail_num_per_sprite, max_thumbnails_per_sprite, sprite_width, sprite_height, rendered_width, file_size_kb) {
        this.video_length = video_length;
        this.thumbnail_width = thumbnail_width;
        this.thumbnail_height = thumbnail_height;
        this.thumbnail_duration = thumbnail_duration;
        this.sprite_urls = sprite_urls;
        this.thumbnails_per_row = thumbnails_per_row;
        this.total_thumbnail_num_per_sprite = total_thumbnail_num_per_sprite;
        this.max_thumbnails_per_sprite = max_thumbnails_per_sprite;
        this.sprite_width = sprite_width;
        this.sprite_height = sprite_height;
        this.rendered_width = rendered_width;
        this.file_size_kb = file_size_kb;
    }
}

class Candidate {
    constructor(width, height, url) {
        this.width = width;
        this.height = height;
        this.url = url;
    }
}

class MusicMetadata {
    constructor(music_canonical_id, audio_type = null, music_info = null, original_sound_info = null) {
        this.music_canonical_id = music_canonical_id;
        this.audio_type = audio_type;
        this.music_info = music_info;
        this.original_sound_info = original_sound_info;
    }
}

class MediaCroppingInfo {
    constructor(feed_preview_crop, square_crop) {
        this.feed_preview_crop = feed_preview_crop;
        this.square_crop = square_crop; // Instance of SquareCrop
    }
}

class SquareCrop {
    constructor(crop_bottom, crop_left, crop_right, crop_top) {
        this.crop_bottom = crop_bottom;
        this.crop_left = crop_left;
        this.crop_right = crop_right;
        this.crop_top = crop_top;
    }
}

class CommentInformTreatment {
    constructor(should_have_inform_treatment, text) {
        this.should_have_inform_treatment = should_have_inform_treatment;
        this.text = text;
    }
}

class Comment {
    constructor(pk, userId, text, type, createdAt, createdAtUtc, contentType, status, bitFlags, didReportAsSpam, shareEnabled, user, isCovered, mediaId, hasLikedComment, commentLikeCount, privateReplyStatus, parentCommentId = null) {
        this.pk = pk;
        this.user_id = userId;
        this.text = text;
        this.type = type;
        this.created_at = createdAt;
        this.created_at_utc = createdAtUtc;
        this.content_type = contentType;
        this.status = status;
        this.bit_flags = bitFlags;
        this.did_report_as_spam = didReportAsSpam;
        this.share_enabled = shareEnabled;
        this.user = user; // Instance of CommentUser
        this.is_covered = isCovered;
        this.media_id = mediaId;
        this.has_liked_comment = hasLikedComment;
        this.comment_like_count = commentLikeCount;
        this.private_reply_status = privateReplyStatus;
        this.parent_comment_id = parentCommentId;
    }
}

class CommentUser {
    constructor(pk, username, fullName, isPrivate, profilePicUrl, profilePicId, isVerified, followFrictionType) {
        this.pk = pk;
        this.username = username;
        this.full_name = fullName;
        this.is_private = isPrivate;
        this.profile_pic_url = profilePicUrl;
        this.profile_pic_id = profilePicId;
        this.is_verified = isVerified;
        this.follow_friction_type = followFrictionType;
    }
}

class ItemUser {
    constructor(pk, username, fullName, isPrivate, profilePicUrl, profilePicId, friendshipStatus, isVerified, followFrictionType, hasAnonymousProfilePicture, isUnpublished, isFavorite, latestReelMedia, hasHighlightReels, liveBroadcastId = null, liveBroadcastVisibility = null) {
        this.pk = pk;
        this.username = username;
        this.fullName = fullName;
        this.isPrivate = isPrivate;
        this.profilePicUrl = profilePicUrl;
        this.profilePicId = profilePicId;
        this.friendshipStatus = friendshipStatus;
        this.isVerified = isVerified;
        this.followFrictionType = followFrictionType;
        this.hasAnonymousProfilePicture = hasAnonymousProfilePicture;
        this.isUnpublished = isUnpublished;
        this.isFavorite = isFavorite;
        this.latestReelMedia = latestReelMedia;
        this.hasHighlightReels = hasHighlightReels;
        this.liveBroadcastId = liveBroadcastId;
        this.liveBroadcastVisibility = liveBroadcastVisibility;
    }
}

module.exports = {
    IPostModel,
    MediaUrls,
    IRawBody,
    Item,
    Caption,
    User,
    FriendshipStatus,
    CarouselMedia,
    ClipsMetadata,
    AdditionalAudioInfo,
    AudioReattributionInfo,
    AudioRankingInfo,
    BrandedContentTagInfo,
    MashupInfo,
    MusicInfo,
    MusicAssetInfo,
    TerritoryValidityPeriods,
    MusicConsumptionInfo,
    CoauthorProducer,
    CoauthorProducerFriendshipStatus,
    OriginalSoundInfo,
    ConsumptionInfo,
    IgArtist,
    IgArtistFriendshipStatus,
    Usertags,
    In,
    InUser,
    VideoVersion,
    Location,
    ImageVersions2,
    AdditionalCandidates,
    FirstFrame,
    AnimatedThumbnailSpritesheetInfoCandidates,
    Default,
    Candidate,
    MusicMetadata,
    MediaCroppingInfo,
    SquareCrop,
    CommentInformTreatment,
    Comment,
    CommentUser,
    ItemUser
};
    
    








