// Import necessary types from PostMetadata
const { PageInfo, PurpleNode } = require('./PostMetadata');

/**
 * Represents a paginated list of Instagram posts.
 */
class IPaginatedPosts {
    /**
     * @param {number} count - The total count of posts.
     * @param {PageInfo} page_info - Information about the pagination.
     * @param {EdgeOwnerToTimelineMediaEdge[]} edges - Array of media edges.
     */
    constructor(count, page_info, edges) {
        this.count = count;
        this.page_info = page_info;
        this.edges = edges;
    }
}

/**
 * Represents an edge of media in the user's timeline.
 */
class EdgeOwnerToTimelineMediaEdge {
    /**
     * @param {PurpleNode} node - The node representing a post or media item.
     */
    constructor(node) {
        this.node = node;
    }
}

module.exports = {
    IPaginatedPosts,
    EdgeOwnerToTimelineMediaEdge,
  
};
