const { CommentInformTreatment, FriendshipStatus, ImageVersions2, Item, MediaType, MimeType, SharingFrictionInfo, User } = require('.');

/**
 * Instagram Simplified Stories Metadata
 */
class IGStoriesMetadata {
    constructor({ username, stories_count, stories, graphql }) {
        this.username = username;
        this.stories_count = stories_count;
        this.stories = stories;
        this.graphql = graphql;
    }
}

/**
 * An Array of simplified StoriesMetadata
 */
class ItemStories {
    constructor({ type, mimetype, url, taken_at, expiring_at, id, original_width, original_height, has_audio, video_duration, caption }) {
        this.type = type;
        this.mimetype = mimetype;
        this.url = url;
        this.taken_at = taken_at;
        this.expiring_at = expiring_at;
        this.id = id;
        this.original_width = original_width;
        this.original_height = original_height;
        this.has_audio = has_audio;
        this.video_duration = video_duration;
        this.caption = caption;
    }
}

class StoriesGraphQL {
    constructor({ id, latest_reel_media, expiring_at, seen, can_reply, can_gif_quick_reply, can_reshare, reel_type, ad_expiry_timestamp_in_millis, is_cta_sticker_available, user, items, prefetch_count, has_besties_media, media_count, media_ids, has_fan_club_media, status }) {
        this.id = id;
        this.latest_reel_media = latest_reel_media;
        this.expiring_at = expiring_at;
        this.seen = seen;
        this.can_reply = can_reply;
        this.can_gif_quick_reply = can_gif_quick_reply;
        this.can_reshare = can_reshare;
        this.reel_type = reel_type;
        this.ad_expiry_timestamp_in_millis = ad_expiry_timestamp_in_millis;
        this.is_cta_sticker_available = is_cta_sticker_available;
        this.user = user;
        this.items = items;
        this.prefetch_count = prefetch_count;
        this.has_besties_media = has_besties_media;
        this.media_count = media_count;
        this.media_ids = media_ids;
        this.has_fan_club_media = has_fan_club_media;
        this.status = status;
    }
}

module.exports = { IGStoriesMetadata, ItemStories, StoriesGraphQ
  L };
