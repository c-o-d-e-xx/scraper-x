/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


// Import the HighlightOwner class or interface from the respective file
const { HighlightOwner } = require('./HighlightMediaMetadata');

/**
 * @class ReelsIds
 * Represents reel metadata such as highlight ID, cover URL, and title.
 */
class ReelsIds {
    /**
     * @param {string} highlight_id - The ID of the highlight.
     * @param {string} cover - The URL of the cover image.
     * @param {string} title - The title of the highlight.
     */
    constructor(highlight_id, cover, title) {
        this.highlight_id = highlight_id;
        this.cover = cover;
        this.title = title;
    }
}

/**
 * @class HightlighGraphQL
 * Represents the response from the GraphQL API for highlights.
 */
class HightlighGraphQL {
    /**
     * @param {IHighlightData} data - The highlight data.
     * @param {string} status - The status of the request.
     */
    constructor(data, status) {
        this.data = data;
        this.status = status;
    }
}

/**
 * @class IHighlightData
 * Represents the main data structure of the GraphQL response.
 */
class IHighlightData {
    /**
     * @param {null} viewer - Viewer information, null for now.
     * @param {IHighlightUser} user - The user object containing highlights information.
     */
    constructor(viewer, user) {
        this.viewer = viewer;
        this.user = user;
    }
}

/**
 * @class IHighlightUser
 * Represents the user information containing public story and highlight reels.
 */
class IHighlightUser {
    /**
     * @param {boolean} has_public_story - Whether the user has a public story.
     * @param {Edge} edge_highlight_reels - The highlight reels edge.
     * @param {Edge} edge_related_profiles - Related profiles edge.
     */
    constructor(has_public_story, edge_highlight_reels, edge_related_profiles) {
        this.has_public_story = has_public_story;
        this.edge_highlight_reels = edge_highlight_reels;
        this.edge_related_profiles = edge_related_profiles;
    }
}

/**
 * @class Edge
 * Represents a generic edge containing a list of EdgeElements.
 */
class Edge {
    /**
     * @param {EdgeElement[]} edges - An array of EdgeElements.
     */
    constructor(edges) {
        this.edges = edges;
    }
}

/**
 * @class EdgeElement
 * Represents an individual element in the Edge.
 */
class EdgeElement {
    /**
     * @param {Node} node - The node object.
     */
    constructor(node) {
        this.node = node;
    }
}

/**
 * @class Node
 * Represents a node containing the highlight data.
 */
class Node {
    /**
     * @param {string} __typename - The type name of the node.
     * @param {string} id - The ID of the node.
     * @param {CoverMedia} cover_media - The cover media object.
     * @param {CoverMediaCroppedThumbnail} cover_media_cropped_thumbnail - The cropped thumbnail for the cover media.
     * @param {HighlightOwner} owner - The owner of the highlight.
     * @param {string} title - The title of the highlight.
     */
    constructor(__typename, id, cover_media, cover_media_cropped_thumbnail, owner, title) {
        this.__typename = __typename;
        this.id = id;
        this.cover_media = cover_media;
        this.cover_media_cropped_thumbnail = cover_media_cropped_thumbnail;
        this.owner = owner;
        this.title = title;
    }
}

/**
 * @class CoverMedia
 * Represents the cover media information, specifically the thumbnail source.
 */
class CoverMedia {
    /**
     * @param {string} thumbnail_src - The URL of the thumbnail source.
     */
    constructor(thumbnail_src) {
        this.thumbnail_src = thumbnail_src;
    }
}

/**
 * @class CoverMediaCroppedThumbnail
 * Represents the cropped thumbnail of the cover media.
 */
class CoverMediaCroppedThumbnail {
    /**
     * @param {string} url - The URL of the cropped thumbnail.
     */
    constructor(url) {
        this.url = url;
    }
}

module.exports = {
    ReelsIds,
    HightlighGraphQL,
    IHighlightData,
    IHighlightUser,
    Edge,
    EdgeElement,
    Node,
    CoverMedia,
    CoverMediaCroppedThumbnail
};
