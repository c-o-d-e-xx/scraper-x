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
const postType
  = {
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
  
  
  
