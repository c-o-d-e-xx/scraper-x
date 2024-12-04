const { 
    IHighlightsMetadata,
    IReelsMetadata,
    ReelsMediaData,
    HMedia,
    ReelsData,
    ReelsMedia,
    HighlightItem,
    EdgeStoryMediaViewers,
    HighlightOwner,
    VideoResource
} = require("./HighlightMediaMetadata");

const {
    ReelsIds,
    HightlighGraphQL,
    IHighlightData,
    IHighlightUser,
    Edge,
    EdgeElement,
    Node,
    CoverMedia,
    CoverMediaCroppedThumbnail
} = require("./HighlightMetadata");

const { 
    LoginData,
    LoggedInUser,
    GrowthFrictionInfo,
    Interventions,
    Nametag
} = require("./LoginData");

const {
    MediaConfigureOptions,
    PostingUsertags,
    MediaLocation
} = require("./MediaConfigureOptions");

const {
    IPaginatedPosts,
    EdgeOwnerToTimelineMediaEdge
} = require("./PaginatedPosts");

const {
    PostFeedResult,
    Media,
    FbUserTags,
    IPostOwnerUser
} = require("./PostFeedResult");

const {
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
} = require("./PostMetadata");

const {
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
} = require("./PostModels");

const {
    PostStoryResult,
    StoryMedia
} = require("./PostStoryResult");

const {
    IGStoriesMetadata,
    ItemStories,
    StoriesGraphQL
} = require("./StoriesMetadata");

const {
    Graphql,
    Data,
    UserGraphQlV2,
    BioLink,
    BiographyWithEntities,
    EdgeFollow,
    EdgeMutualFollowedBy,
    EdgeUser,
    NodeUsername,
    EdgeOwnerToTimelineMedia
} = require("./UserGraphQlV2");

const {
    IGUserMetadata,
    UserGraphQL,
    UserDetails,
    HDProfilePic,
    ProfileContextLinksWithUserID
} = require("./UserMetadata");

const {
    SearchFollow,
    UserFollow
} = require("./searchFollow");

// Enum for Media Types
const MediaType = Object.freeze({
  IMAGE: 1,
  VIDEO: 2,
  CAROUSEL: 8,
});

// Enum for Product Types
const ProductType = Object.freeze({
  CAROUSEL: 'carousel_container',
  REEL: 'clips',
  TV: 'igtv',
  SINGLE: 'feed',
});

// Enum for Typenames
const Typename = Object.freeze({
  GraphImage: 'GraphImage',
  GraphSidecar: 'GraphSidecar',
  GraphVideo: 'GraphVideo',
});

// Enum for IGPost Types
const IGPostType = Object.freeze({
  carousel_container: 'p',
  clips: 'reel',
  igtv: 'tv',
  feed: 'p',
});

// MimeType (represented as constants for simplicity)
const MimeType = {
  JPEG: 'image/jpeg',
  PNG: 'image/png',
  MP4: 'video/mp4',
  GIF: 'video/gif',
};

// csrfToken (as a string type alias)
const csrfToken = 'string';
const username = 'string';
const userId = 'string';
const seachTerm = 'string';
const password = 'string';
const IgCookie = 'string';
const url = 'string';

// postType (as constants)
const postType = {
  P: 'p',
  REEL: 'reel',
  TV: 'tv',
};

// FormattedShortcode Object
class FormattedShortcode {
  constructor(type, shortcode, url, media_id) {
    this.type = type; // postType or string
    this.shortcode = shortcode;
    this.url = url;
    this.media_id = media_id;
  }
}

// IChangedProfilePicture Object
class IChangedProfilePicture {
  constructor(changed_profile, id, has_profile_pic, profile_pic_url, profile_pic_url_hd, status) {
    this.changed_profile = changed_profile;
    this.id = id;
    this.has_profile_pic = has_profile_pic;
    this.profile_pic_url = profile_pic_url;
    this.profile_pic_url_hd = profile_pic_url_hd;
    this.status = status;
  }
}

module.exports = { 
    IHighlightsMetadata,
    IReelsMetadata,
    ReelsMediaData,
    HMedia,
    ReelsData,
    ReelsMedia,
    HighlightItem,
    EdgeStoryMediaViewers,
    HighlightOwner,
    VideoResource,
    ReelsIds,
    HightlighGraphQL,
    IHighlightData,
    IHighlightUser,
    Edge,
    EdgeElement,
    Node,
    CoverMedia,
    CoverMediaCroppedThumbnail,
    LoginData,
    LoggedInUser,
    GrowthFrictionInfo,
    Interventions,
    Nametag,
    MediaConfigureOptions,
    PostingUsertags,
    MediaLocation,
    IPaginatedPosts,
    EdgeOwnerToTimelineMediaEdge,
    PostFeedResult,
    Media,
    FbUserTags,
    IPostOwnerUser,
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
    Extensions,
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
    ItemUser,
    PostStoryResult,
    StoryMedia,
    IGStoriesMetadata,
    ItemStories,
    StoriesGraphQL,
    Graphql,
    Data,
    UserGraphQlV2,
    BioLink,
    BiographyWithEntities,
    EdgeFollow,
    EdgeMutualFollowedBy,
    EdgeUser,
    NodeUsername,
    EdgeOwnerToTimelineMedia,
    IGUserMetadata,
    UserGraphQL,
    UserDetails,
    HDProfilePic,
    ProfileContextLinksWithUserID,
    SearchFollow,
    UserFollow,
    MediaType,
    ProductType,
    Typename,
    IGPostType,
    MimeType,
    csrfToken,
    username,
    userId,
    seachTerm,
    password,
    IgCookie,
    url,
    postType,
    FormattedShortcode,
    IChangedProfilePicture
};
