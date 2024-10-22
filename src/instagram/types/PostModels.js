// models/IPostModel.js

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

class CommentInformTreatment {
    constructor(should_have_inform_treatment, text) {
        this.should_have_inform_treatment = should_have_inform_treatment;
        this.text = text;
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






