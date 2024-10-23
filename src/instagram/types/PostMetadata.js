const { MediaType, Typename, User } = require('.');

class IGPostMetadata {
    constructor({
        username,
        name,
        media_id,
        shortcode,
        taken_at_timestamp,
        likes,
        caption,
        media_count,
        comment_count,
        links,
    }) {
        this.username = username; // Instagram Username
        this.name = name; // Instagram Full Name
        this.media_id = media_id; // Media ID
        this.shortcode = shortcode; // Post shortcode
        this.taken_at_timestamp = taken_at_timestamp; // Timestamp of posted media
        this.likes = likes; // Number of likes
        this.caption = caption; // Caption from Instagram post
        this.media_count = media_count; // Total media
        this.comment_count = comment_count; // Comment count
        this.links = links.map(link => new Link(link.type, link.url, new Dimensions(link.dimensions.height, link.dimensions.width))); // Media URLs
    }
}

class links {
  /**
   * @param {string} type - The type of media.
   * @param {string} url - The URL of downloadable media.
   * @param {number} width - The width of the media.
   * @param {number} height - The height of the media.
   */
  constructor(type, url, width, height) {
    this.type = type;
    this.url = url;
    // Instantiate Dimensions within the Links class
    this.dimensions = new Dimensions(width, height);
  }
}


class PostGraphQL {
  /**
   * @param {Object} data - The parameters to initialize PostData.
   * @param {Object} extensions - The parameters to initialize Extensions.
   * @param {string} [status] - The status of the GraphQL post.
   */
  constructor(data = {}, extensions = {}, status = '') {
    // Instantiate PostData and Extensions internally
    this.data = new PostData(data);
    this.extensions = new Extensions(extensions);
    this.status = status;
  }
}

class PostData {
  /**
   * @param {Object} shortcode_media - The parameters to initialize ShortcodeMedia.
   */
  constructor(shortcode_media = {}) {
    // Instantiate ShortcodeMedia internally
    this.shortcode_media = new ShortcodeMedia(shortcode_media);
  }
}


class ShortcodeMedia {
  /**
   * @param {Object} params - The parameters to initialize ShortcodeMedia.
   */
  constructor(params) {
    this.__typename = params.__typename || '';
    this.id = params.id || '';
    this.shortcode = params.shortcode || '';
    this.dimensions = new Dimensions(params.dimensions.width, params.dimensions.height);
    this.gating_info = params.gating_info || null;
    this.fact_check_overall_rating = params.fact_check_overall_rating || null;
    this.fact_check_information = params.fact_check_information || null;
    this.sensitivity_friction_info = params.sensitivity_friction_info || null;
    this.sharing_friction_info = new SharingFrictionInfo(); // Instantiate as needed
    this.media_overlay_info = params.media_overlay_info || null;
    this.media_preview = params.media_preview || null;
    this.video_url = params.video_url || '';
    this.display_url = params.display_url || '';
    this.display_resources = (params.display_resources || []).map(res => new DisplayResource(res.src, res.config_height, res.config_width));
    this.is_video = params.is_video || false;
    this.tracking_token = params.tracking_token || '';
    this.upcoming_event = params.upcoming_event || null;
    this.edge_media_to_tagged_user = new EdgeMediaToTaggedUser(); // Instantiate as needed
    this.edge_media_to_caption = new EdgeMediaToCaptionClass(); // Instantiate as needed
    this.can_see_insights_as_brand = params.can_see_insights_as_brand || false;
    this.caption_is_edited = params.caption_is_edited || false;
    this.has_ranked_comments = params.has_ranked_comments || false;
    this.like_and_view_counts_disabled = params.like_and_view_counts_disabled || false;
    this.edge_media_to_parent_comment = new EdgeMediaToParentCommentClass(); // Instantiate as needed
    this.edge_media_to_hoisted_comment = new EdgeMediaToCaptionClass(); // Instantiate as needed
    this.edge_media_preview_comment = new EdgeMediaPreview(); // Instantiate as needed
    this.comments_disabled = params.comments_disabled || false;
    this.commenting_disabled_for_viewer = params.commenting_disabled_for_viewer || false;
    this.taken_at_timestamp = params.taken_at_timestamp || Date.now();
    this.edge_media_preview_like = new EdgeMediaPreview(); // Instantiate as needed
    this.edge_media_to_sponsor_user = new EdgeMediaToCaptionClass(); // Instantiate as needed
    this.is_affiliate = params.is_affiliate || false;
    this.is_paid_partnership = params.is_paid_partnership || false;
    this.location = params.location || null;
    this.owner = new ShortcodeMediaOwner(); // Instantiate as needed
    this.is_ad = params.is_ad || false;
    this.edge_web_media_to_related_media = new EdgeMediaToCaptionClass(); // Instantiate as needed
    this.coauthor_producers = params.coauthor_producers || [];
    this.edge_sidecar_to_children = new EdgeSidecarToChildren(); // Instantiate as needed
    this.edge_related_profiles = new EdgeMediaToCaptionClass(); // Instantiate as needed
    this.accessibility_caption = params.accessibility_caption || null;
    this.dash_info = new DashInfo(); // Instantiate as needed
    this.has_audio = params.has_audio || false;
    this.video_view_count = params.video_view_count || 0;
    this.video_play_count = params.video_play_count || null;
    this.encoding_status = params.encoding_status || null;
    this.is_published = params.is_published || false;
    this.product_type = params.product_type || '';
    this.title = params.title || '';
    this.video_duration = params.video_duration || 0;
    this.thumbnail_src = params.thumbnail_src || '';
    this.clips_music_attribution_info = params.clips_music_attribution_info || null;
  }
}

class ViewerInfo {
    /**
     * @param {Object} params - Parameters for ViewerInfo.
     * @param {boolean} params.viewer_has_liked - Indicates if the viewer has liked the media.
     * @param {boolean} params.viewer_has_saved - Indicates if the viewer has saved the media.
     * @param {boolean} params.viewer_has_saved_to_collection - Indicates if the viewer has saved to a collection.
     * @param {boolean} params.viewer_in_photo_of_you - Indicates if the viewer is in a photo of you.
     * @param {boolean} params.viewer_can_reshare - Indicates if the viewer can reshare the media.
     */
    constructor({ viewer_has_liked, viewer_has_saved, viewer_has_saved_to_collection, viewer_in_photo_of_you, viewer_can_reshare }) {
        this.viewer_has_liked = viewer_has_liked;
        this.viewer_has_saved = viewer_has_saved;
        this.viewer_has_saved_to_collection = viewer_has_saved_to_collection;
        this.viewer_in_photo_of_you = viewer_in_photo_of_you;
        this.viewer_can_reshare = viewer_can_reshare;
    }
}

class DashInfo {
    /**
     * @param {Object} params - Parameters for DashInfo.
     * @param {boolean} params.is_dash_eligible - Indicates if the video is DASH eligible.
     * @param {string} params.video_dash_manifest - The DASH manifest URL for the video.
     * @param {number} params.number_of_qualities - The number of available video qualities.
     */
    constructor({ is_dash_eligible, video_dash_manifest, number_of_qualities }) {
        this.is_dash_eligible = is_dash_eligible;
        this.video_dash_manifest = video_dash_manifest;
        this.number_of_qualities = number_of_qualities;
    }
}

/**
 * Media pixels dimensions
 */

// dimensions.js
class Dimensions {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// displayResource.js
class DisplayResource {
    constructor(src, config_width, config_height) {
        this.src = src;
        this.config_width = config_width;
        this.config_height = config_height;
    }
}

// edgeMediaPreview.js
class EdgeMediaPreview {
    constructor(count, edges) {
        this.count = count;
        this.edges = edges; // Should be an array of EdgeMediaPreviewCommentEdge instances
    }
}

// edgeMediaToParentComment.js
class EdgeMediaToParentCommentClass {
    constructor(count, pageInfo, edges) {
        this.count = count;
        this.page_info = pageInfo; // Should be an instance of PageInfo
        this.edges = edges; // Should be an array of EdgeMediaPreviewCommentEdge instances
    }
}

// purpleNode.js
class PurpleNode extends ViewerInfo {
    constructor({
        __typename,
        id,
        text,
        created_at,
        did_report_as_spam,
        edge_liked_by,
        is_restricted_pending,
        edge_threaded_comments,
        shortcode,
        dimensions,
        display_url,
        edge_media_to_tagged_user,
        fact_check_overall_rating,
        fact_check_information,
        gating_info,
        sensitivity_friction_info,
        sharing_friction_info,
        media_overlay_info,
        media_preview,
        owner,
        is_video,
        has_upcoming_event,
        accessibility_caption,
        edge_media_to_caption,
        comments_disabled,
        taken_at_timestamp,
        location,
        thumbnail_src,
        thumbnail_resources,
        coauthor_producers,
        dash_info,
        has_audio,
        tracking_token,
        video_url,
        video_view_count,
        felix_profile_grid_crop,
        product_type,
        clips_music_attribution_info,
        edge_sidecar_to_children,
        pinned_for_users,
        nft_asset_info,
        edge_media_to_sponsor_user,
        is_affiliate,
        is_paid_partnership
    }) {
        super(); // Call the constructor of the ViewerInfo class

        this.__typename = __typename;
        this.id = id;
        this.text = text;
        this.created_at = created_at;
        this.did_report_as_spam = did_report_as_spam;
        this.edge_liked_by = edge_liked_by; // Should be an instance of EdgeFollowedByClass
        this.is_restricted_pending = is_restricted_pending;
        this.edge_threaded_comments = edge_threaded_comments; // Should be an instance of EdgeMediaToParentCommentClass
        this.shortcode = shortcode;
        this.dimensions = dimensions; // Should be an instance of Dimensions
        this.display_url = display_url;
        this.edge_media_to_tagged_user = edge_media_to_tagged_user; // Should be an instance of EdgeMediaToTaggedUser
        this.fact_check_overall_rating = fact_check_overall_rating;
        this.fact_check_information = fact_check_information;
        this.gating_info = gating_info;
        this.sensitivity_friction_info = sensitivity_friction_info;
        this.sharing_friction_info = sharing_friction_info; // Should be an instance of SharingFrictionInfo
        this.media_overlay_info = media_overlay_info;
        this.media_preview = media_preview;
        this.owner = owner; // Should be an instance of User
        this.is_video = is_video;
        this.has_upcoming_event = has_upcoming_event;
        this.accessibility_caption = accessibility_caption;
        this.edge_media_to_caption = edge_media_to_caption; // Should be an instance of EdgeMediaToCaptionClass
        this.comments_disabled = comments_disabled;
        this.taken_at_timestamp = taken_at_timestamp;
        this.location = location; // Should be an instance of Location or null
        this.thumbnail_src = thumbnail_src;
        this.thumbnail_resources = thumbnail_resources; // Should be an array of DisplayResource instances
        this.coauthor_producers = coauthor_producers; // Should be an array
        this.dash_info = dash_info; // Optional, should be an instance of DashInfo
        this.has_audio = has_audio; // Optional, boolean
        this.tracking_token = tracking_token; // Optional, string
        this.video_url = video_url; // Optional, string
        this.video_view_count = video_view_count; // Optional, number
        this.felix_profile_grid_crop = felix_profile_grid_crop;
        this.product_type = product_type; // Optional, string
        this.clips_music_attribution_info = clips_music_attribution_info; // Optional, should be an instance of ClipsMusicAttributionInfo
        this.edge_sidecar_to_children = edge_sidecar_to_children; // Optional, should be an instance of EdgeSidecarToChildren
        this.pinned_for_users = pinned_for_users; // Should be an array
        this.nft_asset_info = nft_asset_info; // Should be an instance of NFT asset info
        this.edge_media_to_sponsor_user = edge_media_to_sponsor_user; // Should be an instance of EdgeMediaToCaptionClass
        this.is_affiliate = is_affiliate;
        this.is_paid_partnership = is_paid_partnership;
    }
}

// edgeMediaPreviewCommentEdge.js
class EdgeMediaPreviewCommentEdge {
    constructor(node) {
        this.node = node; // Should be an instance of PurpleNode
    }
}

// pageInfo.js
class PageInfo {
    constructor(hasNextPage, endCursor) {
        this.has_next_page = hasNextPage;
        this.end_cursor = endCursor;
    }
}

// edgeFollowedByClass.js
class EdgeFollowedByClass {
    constructor(count) {
        this.count = count;
    }
}

// nodeOwner.js
class NodeOwner {
    constructor({ id, isVerified, profilePicUrl, username }) {
        this.id = id;
        this.is_verified = isVerified;
        this.profile_pic_url = profilePicUrl;
        this.username = username;
    }
}

// edgeMediaToCaptionClass.js
class EdgeMediaToCaptionClass {
    constructor(edges) {
        this.edges = edges; // Should be an array of EdgeMediaToCaptionEdge instances
    }
}

// edgeMediaToCaptionEdge.js
class EdgeMediaToCaptionEdge {
    constructor(node) {
        this.node = node; // Should be an instance of FluffyNode
    }
}

class FluffyNode {
  constructor(text) {
    this.text = text;
  }
}

class EdgeMediaToTaggedUser {
  constructor(edges) {
    this.edges = edges; // Array of EdgeMediaToTaggedUserEdge instances
  }
}

class EdgeMediaToTaggedUserEdge {
  constructor(node) {
    this.node = node; // TentacledNode instance
  }
}

class TentacledNode {
  constructor(user, x, y) {
    this.user = user; // UserNode instance
    this.x = x;
    this.y = y;
  }
}

class UserNode {
  constructor(full_name, followed_by_viewer, id, is_verified, profile_pic_url, username) {
    this.full_name = full_name;
    this.followed_by_viewer = followed_by_viewer;
    this.id = id;
    this.is_verified = is_verified;
    this.profile_pic_url = profile_pic_url;
    this.username = username;
  }
}

class EdgeSidecarToChildren {
  constructor(edges) {
    this.edges = edges; // Array of EdgeSidecarToChildrenEdge instances
  }
}

class EdgeSidecarToChildrenEdge {
  constructor(__typename, node) {
    this.__typename = __typename;
    this.node = node; // StickyNode instance
  }
}

class StickyNode {
    constructor(
        __typename,
        id,
        shortcode,
        dimensions,
        gating_info,
        fact_check_overall_rating,
        fact_check_information,
        sensitivity_friction_info,
        sharing_friction_info,
        media_overlay_info,
        media_preview,
        display_url,
        video_url,
        display_resources,
        accessibility_caption,
        is_video,
        tracking_token,
        upcoming_event,
        owner,
        has_upcoming_event,
        dash_info,
        has_audio,
        video_view_count
    ) {
        this.__typename = __typename;
        this.id = id;
        this.shortcode = shortcode;
        this.dimensions = dimensions;
        this.gating_info = gating_info;
        this.fact_check_overall_rating = fact_check_overall_rating;
        this.fact_check_information = fact_check_information;
        this.sensitivity_friction_info = sensitivity_friction_info;
        this.sharing_friction_info = sharing_friction_info;
        this.media_overlay_info = media_overlay_info;
        this.media_preview = media_preview;
        this.display_url = display_url;
        this.video_url = video_url;
        this.display_resources = display_resources;
        this.accessibility_caption = accessibility_caption;
        this.is_video = is_video;
        this.tracking_token = tracking_token;
        this.upcoming_event = upcoming_event;
        this.owner = owner;
        this.has_upcoming_event = has_upcoming_event;
        this.dash_info = dash_info;
        this.has_audio = has_audio;
        this.video_view_count = video_view_count;
    }
}

class SharingFrictionInfo {
    constructor(should_have_sharing_friction, bloks_app_url) {
        this.should_have_sharing_friction = should_have_sharing_friction;
        this.bloks_app_url = bloks_app_url;
    }
}

class ShortcodeMediaOwner {
    constructor(
        id,
        is_verified,
        profile_pic_url,
        username,
        blocked_by_viewer,
        restricted_by_viewer,
        followed_by_viewer,
        full_name,
        has_blocked_viewer,
        is_embeds_disabled,
        is_private,
        is_unpublished,
        requested_by_viewer,
        pass_tiering_recommendation,
        edge_owner_to_timeline_media,
        edge_followed_by
    ) {
        this.id = id;
        this.is_verified = is_verified;
        this.profile_pic_url = profile_pic_url;
        this.username = username;
        this.blocked_by_viewer = blocked_by_viewer;
        this.restricted_by_viewer = restricted_by_viewer;
        this.followed_by_viewer = followed_by_viewer;
        this.full_name = full_name;
        this.has_blocked_viewer = has_blocked_viewer;
        this.is_embeds_disabled = is_embeds_disabled;
        this.is_private = is_private;
        this.is_unpublished = is_unpublished;
        this.requested_by_viewer = requested_by_viewer;
        this.pass_tiering_recommendation = pass_tiering_recommendation;
        this.edge_owner_to_timeline_media = edge_owner_to_timeline_media;
        this.edge_followed_by = edge_followed_by;
    }
}

class ClipsMusicAttributionInfo {
    constructor(
        artist_name,
        song_name,
        uses_original_audio,
        should_mute_audio,
        should_mute_audio_reason,
        audio_id
    ) {
        this.artist_name = artist_name;
        this.song_name = song_name;
        this.uses_original_audio = uses_original_audio;
        this.should_mute_audio = should_mute_audio;
        this.should_mute_audio_reason = should_mute_audio_reason;
        this.audio_id = audio_id;
    }
}

class Extensions {
    constructor(is_final) {
        this.is_final = is_final;
    }
}

module.exports = {
    IGPostMetadata,
    links,
    PostGraphQL,
    PostData,
    ShortcodeMedia,
    ViewerInfo,
    DashInfo,
    Dimensions,
    DisplayResource,
    EdgeMediaPreview,
    EdgeMediaToParentCommentClass,
    PurpleNode,
    EdgeMediaPreviewCommentEdge,
    PageInfo,
    EdgeFollowedByClass,
    NodeOwner,
    EdgeMediaToCaptionClass,
    EdgeMediaToCaptionEdge,
    FluffyNode,
    EdgeMediaToTaggedUser,
    EdgeMediaToTaggedUserEdge,
    TentacledNode,
    UserNode,
    EdgeSidecarToChildren,
    EdgeSidecarToChildrenEdge,
    StickyNode,
    SharingFrictionInfo,
    ShortcodeMediaOwner,
    ClipsMusicAttributionInfo,
    Extensions
};
    
    
