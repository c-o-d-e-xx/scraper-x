class IGUserMetadata {
    constructor({
        id,
        username,
        fullname,
        followers,
        following,
        post_count,
        is_private,
        is_verified,
        biography,
        external_url,
        total_igtv_videos,
        has_videos,
        hd_profile_pic_url_info,
        has_highlight_reels,
        has_guides,
        is_business,
        contact_phone_number,
        public_email,
        account_type
    } = {}) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.followers = followers;
        this.following = following;
        this.post_count = post_count;
        this.is_private = is_private;
        this.is_verified = is_verified;
        this.biography = biography;
        this.external_url = external_url;
        this.total_igtv_videos = total_igtv_videos;
        this.has_videos = has_videos;
        this.hd_profile_pic_url_info = hd_profile_pic_url_info;
        this.has_highlight_reels = has_highlight_reels;
        this.has_guides = has_guides;
        this.is_business = is_business;
        this.contact_phone_number = contact_phone_number;
        this.public_email = public_email;
        this.account_type = account_type;
    }
}

class UserGraphQL {
    constructor({ user, status } = {}) {
        this.user = user;
        this.status = status;
    }
}

class UserDetails {
    constructor({
        pk,
        username,
        full_name,
        is_private,
        profile_pic_url,
        profile_pic_id,
        is_verified,
        follow_friction_type,
        has_anonymous_profile_picture,
        media_count,
        geo_media_count,
        follower_count,
        following_count,
        following_tag_count,
        biography,
        external_url,
        external_lynx_url,
        show_fb_link_on_profile,
        primary_profile_link_type,
        has_biography_translation,
        total_igtv_videos,
        has_videos,
        total_ar_effects,
        usertags_count,
        is_favorite,
        is_interest_account,
        has_chaining,
        hd_profile_pic_versions,
        hd_profile_pic_url_info,
        mutual_followers_count,
        profile_context,
        profile_context_links_with_user_ids,
        profile_context_mutual_follow_ids,
        has_highlight_reels,
        has_guides,
        can_be_reported_as_fraud,
        is_eligible_for_smb_support_flow,
        smb_support_partner,
        direct_messaging,
        address_street,
        business_contact_method,
        category,
        city_id,
        city_name,
        contact_phone_number,
        is_call_to_action_enabled,
        latitude,
        longitude,
        public_email,
        public_phone_country_code,
        public_phone_number,
        zip,
        instagram_location_id,
        is_business,
        professional_conversion_suggested_account_type,
        account_type,
        can_hide_category,
        can_hide_public_contacts,
        should_show_category,
        should_show_public_contacts,
        interop_messaging_user_fbid,
        account_badges,
        include_direct_blacklist_status,
        is_potential_business,
        show_post_insights_entry_point,
        request_contact_enabled,
        is_bestie,
        has_unseen_besties_media,
        show_account_transparency_details,
        auto_expand_chaining,
        highlight_reshare_disabled,
        is_memorialized,
        open_external_url_with_in_app_browser
    } = {}) {
        this.pk = pk;
        this.username = username;
        this.full_name = full_name;
        this.is_private = is_private;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_id = profile_pic_id;
        this.is_verified = is_verified;
        this.follow_friction_type = follow_friction_type;
        this.has_anonymous_profile_picture = has_anonymous_profile_picture;
        this.media_count = media_count;
        this.geo_media_count = geo_media_count;
        this.follower_count = follower_count;
        this.following_count = following_count;
        this.following_tag_count = following_tag_count;
        this.biography = biography;
        this.external_url = external_url;
        this.external_lynx_url = external_lynx_url;
        this.show_fb_link_on_profile = show_fb_link_on_profile;
        this.primary_profile_link_type = primary_profile_link_type;
        this.has_biography_translation = has_biography_translation;
        this.total_igtv_videos = total_igtv_videos;
        this.has_videos = has_videos;
        this.total_ar_effects = total_ar_effects;
        this.usertags_count = usertags_count;
        this.is_favorite = is_favorite;
        this.is_interest_account = is_interest_account;
        this.has_chaining = has_chaining;
        this.hd_profile_pic_versions = hd_profile_pic_versions;
        this.hd_profile_pic_url_info = hd_profile_pic_url_info;
        this.mutual_followers_count = mutual_followers_count;
        this.profile_context = profile_context;
        this.profile_context_links_with_user_ids = profile_context_links_with_user_ids;
        this.profile_context_mutual_follow_ids = profile_context_mutual_follow_ids;
        this.has_highlight_reels = has_highlight_reels;
        this.has_guides = has_guides;
        this.can_be_reported_as_fraud = can_be_reported_as_fraud;
        this.is_eligible_for_smb_support_flow = is_eligible_for_smb_support_flow;
        this.smb_support_partner = smb_support_partner;
        this.direct_messaging = direct_messaging;
        this.address_street = address_street;
        this.business_contact_method = business_contact_method;
        this.category = category;
        this.city_id = city_id;
        this.city_name = city_name;
        this.contact_phone_number = contact_phone_number;
        this.is_call_to_action_enabled = is_call_to_action_enabled;
        this.latitude = latitude;
        this.longitude = longitude;
        this.public_email = public_email;
        this.public_phone_country_code = public_phone_country_code;
        this.public_phone_number = public_phone_number;
        this.zip = zip;
        this.instagram_location_id = instagram_location_id;
        this.is_business = is_business;
        this.professional_conversion_suggested_account_type = professional_conversion_suggested_account_type;
        this.account_type = account_type;
        this.can_hide_category = can_hide_category;
        this.can_hide_public_contacts = can_hide_public_contacts;
        this.should_show_category = should_show_category;
        this.should_show_public_contacts = should_show_public_contacts;
        this.interop_messaging_user_fbid = interop_messaging_user_fbid;
        this.account_badges = account_badges;
        this.include_direct_blacklist_status = include_direct_blacklist_status;
        this.is_potential_business = is_potential_business;
        this.show_post_insights_entry_point = show_post_insights_entry_point;
        this.request_contact_enabled = request_contact_enabled;
        this.is_bestie = is_bestie;
        this.has_unseen_besties_media = has_unseen_besties_media;
        this.show_account_transparency_details = show_account_transparency_details;
        this.auto_expand_chaining = auto_expand_chaining;
        this.highlight_reshare_disabled = highlight_reshare_disabled;
        this.is_memorialized = is_memorialized;
        this.open_external_url_with_in_app_browser = open_external_url_with_in_app_browser;
    }
}

class HDProfilePic {
    constructor({ width, height, url } = {}) {
        this.width = width;
        this.height = height;
        this.url = url;
    }
}

class ProfileContextLinksWithUserID {
    constructor({ start, end, username } = {}) {
        this.start = start;
        this.end = end;
        this.username = username;
    }
}

module.exports = {
    IGUserMetadata,
    UserGraphQL,
    UserDetails,
    HDProfilePic,
    ProfileContextLinksWithUserID
};
