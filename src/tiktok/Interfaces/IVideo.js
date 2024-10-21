/**
 * Represents a video file on TikTok
 * @class
 */
class Video {
    /**
     * @constructor
     * @param {string} id - The unique ID of the video
     * @param {string} description - The description of the video, if available
     * @param {string} createdAt - The date on which the video was created on TikTok
     * @param {number} height - Height of the video
     * @param {number} width - Width of the video
     * @param {number} duration - Duration of the video
     * @param {string} resolution - Resolution of the video
     * @param {number} shareCount - Number of times the video was shared
     * @param {number} likesCount - Number of likes on the video
     * @param {number} commentCount - Number of comments on the video
     * @param {number} playCount - Number of times the video has been played
     * @param {string} downloadURL - A direct download URL for the video
     * @param {string} [cover] - A direct URL to the video cover (optional)
     * @param {string} [dynamicCover] - A direct URL to the dynamic video cover (optional)
     * @param {string} [playURL] - A direct play URL for the video (optional)
     * @param {string} [format] - The format of the video (optional)
     * @param {string} [author] - Author of the video (optional)
     * @param {string} [directVideoUrl] - Direct link to the video (optional)
     */
    constructor(id, description, createdAt, height, width, duration, resolution, shareCount, likesCount, commentCount, playCount, downloadURL, cover, dynamicCover, playURL, format, author, directVideoUrl) {
        this.id = id;                          // Unique ID of the video
        this.description = description;        // Description of the video
        this.createdAt = createdAt;            // Creation date
        this.height = height;                  // Video height
        this.width = width;                    // Video width
        this.duration = duration;              // Video duration
        this.resolution = resolution;          // Video resolution
        this.shareCount = shareCount;          // Number of shares
        this.likesCount = likesCount;          // Number of likes
        this.commentCount = commentCount;      // Number of comments
        this.playCount = playCount;            // Number of plays
        this.downloadURL = downloadURL;        // Download URL
        this.cover = cover;                    // Video cover URL (optional)
        this.dynamicCover = dynamicCover;      // Dynamic cover URL (optional)
        this.playURL = playURL;                // Play URL (optional)
        this.format = format;                  // Video format (optional)
        this.author = author;                  // Author of the video (optional)
        this.directVideoUrl = directVideoUrl;  // Direct video URL (optional)
    }
}

// Exporting the Video class
module.exports = Video;
