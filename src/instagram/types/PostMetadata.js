// Define MediaType, Typename, User based on your application structure or import them from their respective modules

const IGPostMetadata = {
    username: "",  // Instagram username
    name: "",      // Full Name
    media_id: "",  // Media ID
    shortcode: "", // Post shortcode
    taken_at_timestamp: 0,  // Timestamp of the media post
    likes: 0,  // Number of likes
    caption: "",  // Caption text
    media_count: 0,  // Total number of media
    comment_count: 0,  // Number of comments
    links: []  // List of media URLs with type and dimensions
};

const PostGraphQL = {
    data: {},  // GraphQL data
    extensions: {},  // Extensions data
    status: ""  // Status string
};

const ShortcodeMedia = {
    __typename: "",  // Typename
    id: "",  // Media ID
    shortcode: "",  // Media shortcode
    dimensions: {
        height: 0,
        width: 0
    },  // Media dimensions
    gating_info: null,
    fact_check_overall_rating: null,
    fact_check_information: null,
    sensitivity_friction_info: null,
    sharing_friction_info: {},
    media_overlay_info: null,
    media_preview: null,
    video_url: "",  // Video URL if it's a video post
    display_url: "",  // Display URL for the post
    display_resources: [],  // Resource for different image resolutions
    is_video: false,  // Boolean indicating if the post is a video
    tracking_token: "",  // Tracking token for insights
    edge_media_to_tagged_user: {},
    edge_media_to_caption: {},
    can_see_insights_as_brand: false,
    caption_is_edited: false,
    has_ranked_comments: false,
    like_and_view_counts_disabled: false,
    edge_media_to_parent_comment: {},
    comments_disabled: false,
    commenting_disabled_for_viewer: false,
    taken_at_timestamp: 0,
    edge_media_preview_like: {},
    location: null,
    owner: {},  // Owner of the post (user info)
    is_affiliate: false,
    is_paid_partnership: false,
    dash_info: {},
    has_audio: false,
    video_view_count: 0,
    video_duration: 0,  // Video duration in seconds
    thumbnail_src: "",  // Thumbnail URL
    edge_sidecar_to_children: {},  // If it's a carousel post
    accessibility_caption: null  // Accessibility caption
};

const EdgeMediaToCaptionClass = {
    edges: []  // Array of caption edges
};

const EdgeMediaToTaggedUser = {
    edges: []  // Array of tagged users
};

const EdgeSidecarToChildren = {
    edges: []  // Array of child media (carousel post)
};

const DashInfo = {
    is_dash_eligible: false,
    video_dash_manifest: "",
    number_of_qualities: 0
};

const SharingFrictionInfo = {
    should_have_sharing_friction: false,
    bloks_app_url: null
};

const PageInfo = {
    has_next_page: false,
    end_cursor: ""
};

const Dimensions = {
    height: 0,
    width: 0
};

const DisplayResource = {
    src: "",  // Image or video source URL
    config_width: 0,
    config_height: 0
};

const ClipsMusicAttributionInfo = {
    artist_name: "",
    song_name: "",
    uses_original_audio: false,
    should_mute_audio: false,
    should_mute_audio_reason: "",
    audio_id: ""
};

module.exports = {
    IGPostMetadata,
    PostGraphQL,
    ShortcodeMedia,
    EdgeMediaToCaptionClass,
    EdgeMediaToTaggedUser,
    EdgeSidecarToChildren,
    DashInfo,
    SharingFrictionInfo,
    PageInfo,
    Dimensions,
    DisplayResource,
    ClipsMusicAttributionInfo
};
