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

const MediaType = Object.freeze({
    IMAGE: 1,
    VIDEO: 2,
    CAROUSEL: 8,
});
const ProductType = Object.freeze({
    CAROUSEL: 'carousel_container',
    REEL: 'clips',
    TV: 'igtv',
    SINGLE: 'feed',
});
const Typename = Object.freeze({
    GraphImage: 'GraphImage',
    GraphSidecar: 'GraphSidecar',
    GraphVideo: 'GraphVideo',
});
const IGPostType = Object.freeze({
    carousel_container: 'p',
    clips: 'reel',
    igtv: 'tv',
    feed: 'p',
});

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
    IGPostType
};
