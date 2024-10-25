/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/

 /*
 * MediaConfigureOptions represents the options used when configuring a media post.
 */
class MediaConfigureOptions {
    /**
     * @param {string} [caption] - The caption of the media post.
     * @param {string} [source_type] - The source type of the media.
     * @param {boolean} [disable_comments] - Whether comments are disabled.
     * @param {Object} [edits] - The editing options.
     * @param {[number, number]} [edits.crop_original_size] - The original size of the crop.
     * @param {[number, number]} [edits.crop_center] - The center of the crop.
     * @param {number|string} [edits.crop_zoom] - The zoom level of the crop.
     * @param {Object} [extra] - Extra options for the media post.
     * @param {number} [extra.source_width] - The width of the source media.
     * @param {number} [extra.source_height] - The height of the source media.
     * @param {number} [width] - The width of the media.
     * @param {number} [height] - The height of the media.
     * @param {string} [scene_capture_type] - The type of scene capture.
     * @param {string} [media_folder] - The folder where the media is stored.
     * @param {string} [software] - The software used to create the media.
     * @param {'1'|'0'} [geotag_enabled] - Whether geotagging is enabled.
     * @param {string} [posting_latitude] - The latitude where the media was posted.
     * @param {string} [posting_longitude] - The longitude where the media was posted.
     * @param {string} [media_latitude] - The latitude of the media location.
     * @param {string} [media_longitude] - The longitude of the media location.
     * @param {MediaLocation|string} [location] - The location of the media (can be internal).
     * @param {PostingUsertags|string} [usertags] - The user tags for the media (can be internal).
     */
    constructor(
        caption = '',
        source_type,
        disable_comments,
        edits = { crop_original_size: [0, 0], crop_center: [0, 0], crop_zoom: 1 },
        extra = { source_width: 0, source_height: 0 },
        width,
        height,
        scene_capture_type,
        media_folder,
        software,
        geotag_enabled,
        posting_latitude,
        posting_longitude,
        media_latitude,
        media_longitude,
        location,
        usertags
    ) {
        this.caption = caption;
        this.source_type = source_type;
        this.disable_comments = disable_comments;
        this.edits = edits;
        this.extra = extra;
        this.width = width;
        this.height = height;
        this.scene_capture_type = scene_capture_type;
        this.media_folder = media_folder;
        this.software = software;
        this.geotag_enabled = geotag_enabled;
        this.posting_latitude = posting_latitude;
        this.posting_longitude = posting_longitude;
        this.media_latitude = media_latitude;
        this.media_longitude = media_longitude;
        this.location = location;
        this.usertags = usertags;
    }
}

/**
 * PostingUsertags represents the user tags for the media post.
 */
class PostingUsertags {
    /**
     * @param {Array<{ user_id: number | string; position: [number, number] }>} inUserTags - The array of user tags.
     */
    constructor(inUserTags) {
        this.in = inUserTags;
    }
}

/**
 * MediaLocation represents the location of the media post.
 */
class MediaLocation {
    /**
     * @param {string} name - The name of the location.
     * @param {number} lat - The latitude of the location.
     * @param {number} lng - The longitude of the location.
     * @param {string} address - The address of the location.
     * @param {string} external_source - The external source of the location.
     * @param {string} external_id - The external ID of the location.
     */
    constructor(name, lat, lng, address, external_source, external_id) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.address = address;
        this.external_source = external_source;
        this.external_id = external_id;
    }
}

module.exports = {
    MediaConfigureOptions,
    PostingUsertags,
    MediaLocation,
};
