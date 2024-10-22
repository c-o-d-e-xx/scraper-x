const { PageInfo } = require('.');

class Graphql {
    constructor({ data, status } = {}) {
        this.data = data;
        this.status = status;
    }
}

class Data {
    constructor({ user } = {}) {
        this.user = user;
    }
}

class UserGraphQlV2 {
    constructor({
        ai_agent_type,
        biography,
        bio_links,
        fb_profile_biolink,
        biography_with_entities,
        blocked_by_viewer,
        restricted_by_viewer,
        country_block,
        eimu_id,
        external_url,
        external_url_linkshimmed,
        edge_followed_by,
        fbid,
        followed_by_viewer,
        edge_follow,
        follows_viewer,
        full_name,
        group_metadata,
        has_ar_effects,
        has_clips,
        has_guides,
        has_chaining,
        has_channel,
        has_blocked_viewer,
        highlight_reel_count,
        has_requested_viewer,
        hide_like_and_view_counts,
        id,
        is_business_account,
        is_professional_account,
        is_supervision_enabled,
        is_guardian_of_viewer,
        is_supervised_by_viewer,
        is_supervised_user,
        is_embeds_disabled,
        is_joined_recently,
        guardian_id,
        business_address_json,
        business_contact_method,
        business_email,
        business_phone_number,
        business_category_name,
        overall_category_name,
        category_enum,
        category_name,
        is_private,
        is_verified,
        is_verified_by_mv4b,
        is_regulated_c18,
        edge_mutual_followed_by,
        pinned_channels_list_count,
        profile_pic_url,
        profile_pic_url_hd,
        requested_by_viewer,
        should_show_category,
        should_show_public_contacts,
        show_account_transparency_details,
        transparency_label,
        transparency_product,
        username,
        connected_fb_page,
        pronouns,
        edge_owner_to_timeline_media
    } = {}) {
        this.ai_agent_type = ai_agent_type;
        this.biography = biography;
        this.bio_links = bio_links;
        this.fb_profile_biolink = fb_profile_biolink;
        this.biography_with_entities = biography_with_entities;
        this.blocked_by_viewer = blocked_by_viewer;
        this.restricted_by_viewer = restricted_by_viewer;
        this.country_block = country_block;
        this.eimu_id = eimu_id;
        this.external_url = external_url;
        this.external_url_linkshimmed = external_url_linkshimmed;
        this.edge_followed_by = edge_followed_by;
        this.fbid = fbid;
        this.followed_by_viewer = followed_by_viewer;
        this.edge_follow = edge_follow;
        this.follows_viewer = follows_viewer;
        this.full_name = full_name;
        this.group_metadata = group_metadata;
        this.has_ar_effects = has_ar_effects;
        this.has_clips = has_clips;
        this.has_guides = has_guides;
        this.has_chaining = has_chaining;
        this.has_channel = has_channel;
        this.has_blocked_viewer = has_blocked_viewer;
        this.highlight_reel_count = highlight_reel_count;
        this.has_requested_viewer = has_requested_viewer;
        this.hide_like_and_view_counts = hide_like_and_view_counts;
        this.id = id;
        this.is_business_account = is_business_account;
        this.is_professional_account = is_professional_account;
        this.is_supervision_enabled = is_supervision_enabled;
        this.is_guardian_of_viewer = is_guardian_of_viewer;
        this.is_supervised_by_viewer = is_supervised_by_viewer;
        this.is_supervised_user = is_supervised_user;
        this.is_embeds_disabled = is_embeds_disabled;
        this.is_joined_recently = is_joined_recently;
        this.guardian_id = guardian_id;
        this.business_address_json = business_address_json;
        this.business_contact_method = business_contact_method;
        this.business_email = business_email;
        this.business_phone_number = business_phone_number;
        this.business_category_name = business_category_name;
        this.overall_category_name = overall_category_name;
        this.category_enum = category_enum;
        this.category_name = category_name;
        this.is_private = is_private;
        this.is_verified = is_verified;
        this.is_verified_by_mv4b = is_verified_by_mv4b;
        this.is_regulated_c18 = is_regulated_c18;
        this.edge_mutual_followed_by = edge_mutual_followed_by;
        this.pinned_channels_list_count = pinned_channels_list_count;
        this.profile_pic_url = profile_pic_url;
        this.profile_pic_url_hd = profile_pic_url_hd;
        this.requested_by_viewer = requested_by_viewer;
        this.should_show_category = should_show_category;
        this.should_show_public_contacts = should_show_public_contacts;
        this.show_account_transparency_details = show_account_transparency_details;
        this.transparency_label = transparency_label;
        this.transparency_product = transparency_product;
        this.username = username;
        this.connected_fb_page = connected_fb_page;
        this.pronouns = pronouns;
        this.edge_owner_to_timeline_media = edge_owner_to_timeline_media;
    }
}

class BioLink {
    constructor({ title, lynx_url, url, link_type } = {}) {
        this.title = title;
        this.lynx_url = lynx_url;
        this.url = url;
        this.link_type = link_type;
    }
}

class BiographyWithEntities {
    constructor({ raw_text, entities } = {}) {
        this.raw_text = raw_text;
        this.entities = entities;
    }
}

class EdgeFollow {
    constructor({ count } = {}) {
        this.count = count;
    }
}

class EdgeMutualFollowedBy {
    constructor({ count, edges } = {}) {
        this.count = count;
        this.edges = edges;
    }
}

class EdgeUser {
    constructor({ node } = {}) {
        this.node = node;
    }
}

class NodeUsername {
    constructor({ username } = {}) {
        this.username = username;
    }
}

class EdgeOwnerToTimelineMedia {
    constructor({ count, page_info, edges } = {}) {
        this.count = count;
        this.page_info = page_info;
        this.edges = edges;
    }
}

module.exports = {
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
};
