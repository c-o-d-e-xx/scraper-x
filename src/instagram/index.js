
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
const { bufferToStream, getPostType, parseCookie, randInt, shortcodeFormatter } = require('./utils/index');
const {
    username,
    userId,
    seachTerm,
    url,
    IgCookie,
    ProductType,
    MediaType,
    IChangedProfilePicture,
    ISearchFollow,
    IGPostMetadata,
    PostGraphQL
} = require('./types');
const { IGUserMetadata, UserGraphQL } = require('./types/UserMetadata');
const { IGStoriesMetadata, ItemStories, StoriesGraphQL } = require('./types/StoriesMetadata');
const { highlight_ids_query, highlight_media_query, post_shortcode_query } = require('./helper/query');
const { HightlighGraphQL, ReelsIds } = require('./types/HighlightMetadata');
const { HMedia, IHighlightsMetadata, IReelsMetadata, ReelsMediaData } = require('./types/HighlightMediaMetadata');
const { IPostModels, IRawBody, MediaUrls } = require('./types/PostModels');
const { config } = require('./config');
const { getCsrfToken } = require('./helper/Session');
const { PostFeedResult } = require('./types/PostFeedResult');
const { PostStoryResult } = require('./types/PostStoryResult');
const { MediaConfigureOptions } = require('./types/MediaConfigureOptions');
const { UserGraphQlV2, Graphql } = require('./types/UserGraphQlV2');
const { IPaginatedPosts } = require('./types/PaginatedPosts');

module.exports = {
    ...require('./utils'),
    InstagramMetadata: require('./types'),
    ...require('./helper/Session')
};

class igApi {
    constructor(IgCookie = '', AxiosOpts = {}) {
        this.IgCookie = IgCookie;
        this.AxiosOpts = AxiosOpts;
        this.accountUserId = this.IgCookie.match(/sessionid=(.*?);/)?.[1].split('%')[0] || '';
    }

    buildHeaders(agent = config.android, options = {}) {
        return {
            'user-agent': agent,
            'cookie': `${this.IgCookie}`,
            'authority': 'www.instagram.com',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://www.instagram.com',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'x-ig-app-id': 936619743392459,
            'x-ig-www-claim': 'hmac.AR3W0DThY2Mu5Fag4sW5u3RhaR3qhFD_5wvYbOJOD9qaPjIf',
            'x-instagram-ajax': 1,
            'x-requested-with': 'XMLHttpRequest',
            ...options
        };
    }

    FetchIGAPI(baseURL, url = '', agent = config.android, AxiosOptions = {}) {
        try {
            return axios({
                baseURL,
                url,
                headers: AxiosOptions.headers ? AxiosOptions.headers : this.buildHeaders(agent),
                method: AxiosOptions.method || 'GET',
                ...AxiosOptions,
                ...this.AxiosOpts
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error.response;
            }
        }
    }

    async getIdByUsername(username) {
        const res = await this.fetchUserV2(username);
        return res?.id;
    }

    async searchFollower(userId, seachTerm) {
        const res = await this.FetchIGAPI(
            config.instagram_api_v1,
            `/friendships/${userId}/followers/?count=12&query=${seachTerm}&search_surface=follow_list_page`,
            config.iPhone
        );
        return res?.data || res;
    }

    async searchFollowing(userId, seachTerm) {
        const res = await this.FetchIGAPI(
            config.instagram_api_v1,
            `/friendships/${userId}/following/?query=${seachTerm}`,
            config.iPhone
        );
        return res?.data || res;
    }

    _formatSidecar(data) {
        const gql = data.items[0];
        let urls = [];
        if (gql.product_type === ProductType.CAROUSEL) {
            gql.carousel_media.forEach((v) => {
                urls.push({
                    id: v.id,
                    url: v.media_type === MediaType.IMAGE ? v.image_versions2.candidates[0].url : v.video_versions?.[0].url || '',
                    type: v.media_type === MediaType.IMAGE ? 'image' : 'video',
                    dimensions: {
                        height: v.media_type === MediaType.IMAGE ? v.image_versions2.candidates[0].height : v.video_versions?.[0].height || 0,
                        width: v.media_type === MediaType.IMAGE ? v.image_versions2.candidates[0].width : v.video_versions?.[0].width || 0
                    }
                });
            });
        }
        // More post formatting logic for other types...
        return urls;
    }

    async fetchPost(url) {
        const post = shortcodeFormatter(url);
        const metadata = await this.fetchPostByMediaId(post.media_id);
        const item = metadata.items[0];
        return {
            username: item.user.username,
            name: item.user.full_name,
            postType: getPostType(item.product_type),
            media_id: item.id,
            shortcode: item.code,
            taken_at_timestamp: item.taken_at,
            likes: item.like_count,
            caption: item.caption?.text || null,
            media_count: item.product_type === ProductType.CAROUSEL ? item.carousel_media_count : 1,
            comment_count: item.comment_count,
            video_duration: item?.video_duration || null,
            music: item?.clips_metadata || null,
            links: this._formatSidecar(metadata)
        };
    }

    async fetchPostByMediaId(mediaId) {
        try {
            const res = await this.FetchIGAPI(
                config.instagram_api_v1,
                `/media/${mediaId.toString()}/info/`
            );
            return res?.data;
        } catch (error) {
            throw error;
        }
    }

    async fetchPostByShortcode(shortcode) {
        const res = await this.FetchIGAPI(
            config.instagram_base_url,
            '/graphql/query/',
            config.iPhone,
            { params: post_shortcode_query(shortcode) }
        );
        const graphql = res?.data;
        return graphql;
    }

    async accountInfo(userID = this.accountUserId) {
        try {
            const res = await this.FetchIGAPI(
                config.instagram_api_v1,
                `/users/${userID}/info/`
            );
            const graphql = res?.data;
            return graphql;
        } catch (error) {
            throw error;
        }
    }

    async fetchUser(username) {
        const userID = await this.getIdByUsername(username);
        const res = await this.FetchIGAPI(
            config.instagram_api_v1,
            `/users/${userID}/info/`
        );
        const graphql = res?.data;
        return {
            id: graphql.user.pk,
            username: graphql.user.username,
            fullname: graphql.user.full_name,
            followers: graphql.user.follower_count,
            following: graphql.user.following_count,
            post_count: graphql.user.media_count,
            is_private: graphql.user.is_private,
            is_verified: graphql.user.is_verified,
            biography: graphql.user.biography,
            external_url: graphql.user.external_url,
            // Additional profile data...
        };
    }

    async fetchUserV2(username) {
        const res = await this.FetchIGAPI(
            config.instagram_api_v1,
            `/users/web_profile_info/?username=${username}`,
            config.iPhone
        );
        const graphql = res?.data;
        return graphql.data?.user;
    }

    async isFollowMe(username) {
        const user = await this.fetchUserV2(username);
        return user.follows_viewer;
    }

    _parseStories(metadata) {
        const items = metadata.items;
        let storyList = [];
        for (let i = 0; i < items.length; i++) {
            storyList.push({
                type: items[i].media_type === 1 ? 'image' : 'video',
                mimetype: items[i].media_type === 1 ? 'image/jpeg' : 'video/mp4',
                url: items[i].media_type === 1 ? items[i].image_versions2.candidates[0].url : items[i].video_versions[0].url,
                taken_at: items[i].taken_at,
                expiring_at: items[i].expiring_at,
                id: items[i].id,
                original_width: items[i].original_width,
                original_height: items[i].original_height,
                has_audio: items[i].has_audio || false,
                video_duration: items[i].video_duration || null,
                caption: items[i].caption
            });
        }
        return storyList;
    }

    	/**
	 * fetches stories metadata 
	 * @param {string} username username target to fetch the stories, also work with private profile if you use cookie \w your account that follows target account
	 * @returns
	 */

  async fetchStories(username) {
        try {
            const userID = await this.getIdByUsername(username);
            const res = await this.FetchIGAPI(
                config.instagram_api_v1,
                `/feed/user/${userID}/reel_media/`,
                config.iPhone
            );

            const graphql = res?.data;
            const isFollowing = typeof graphql.user?.friendship_status !== 'undefined';

            if (!isFollowing && graphql.user.is_private) {
                throw new Error('Private profile');
            } else {
                return {
                    username: graphql.user.username,
                    stories_count: graphql.media_count,
                    stories: graphql.items.length === 0 ? null : this._parseStories(graphql),
                    graphql,
                };
            }
        } catch (error) {
            console.error('Error fetching stories:', error);
            throw error;
        }
    }

/**
	 * Fetch all reels/highlight id
	 * @param {username} username
	 * @returns 
	 */

async _getReelsIds(username) {
    const userID = await getIdByUsername(username);
    const res = await FetchIGAPI(
        config.instagram_base_url,
        '/graphql/query/',
        config.iPhone,
        { params: highlight_ids_query(userID) }
    );

    const graphql = res?.data;
    let items = [];

    graphql.data.user.edge_highlight_reels.edges.forEach((edge) => {
        items.push({
            highlight_id: edge.node.id,
            cover: edge.node.cover_media.thumbnail_src,
            title: edge.node.title
        });
    });

    return items;
}

	/**
	 * get media urls from highlight id
	 * @param {ids} ids of highlight
	 * @returns 
	 */

async _getReels(ids) {
    const res = await FetchIGAPI(
        config.instagram_base_url,
        '/graphql/query/',
        config.iPhone,
        { params: highlight_media_query(ids) }
    );

    const graphql = res?.data;
    return graphql;
}
	/**
	 * fetches highlight metadata
	 * @param {string} username username target to fetch the highlights, also work with private profile if you use cookie \w your account that follows target account
	 * @returns
	 */

async fetchHighlights(username) {
    try {
        const ids = await _getReelsIds(username);
        const reels = await Promise.all(ids.map(async (x) => {
            return this.formatHighlight(await _getReels(x.highlight_id));
        }));

        let data = [];
        for (let i = 0; i < reels.length; i++) {
            data.push({
                title: ids[i].title,
                cover: ids[i].cover,
                media_count: reels[i].length,
                highlights_id: ids[i].highlight_id,
                highlights: reels[i]
            });
        }

        let json = {
            username,
            highlights_count: ids.length,
            data: data
        };
        
        return json;
    } catch (error) {
        throw error;
    }
}

/**
	 * fetches highlight metadata
	 * @param {string} username username target to fetch the highlights, also work with private profile if you use cookie \w your account that follows target account
	 * @returns
	 */

async fetchHighlights(username) {
    try {
        const ids = await this._getReelsIds(username);
        const reels = await Promise.all(ids.map(async (x) => this.formatHighlight(await this._getReels(x.highlight_id))));
        
        const data = [];
        for (let i = 0; i < reels.length; i++) {
            data.push({
                title: ids[i].title,
                cover: ids[i].cover,
                media_count: reels[i].length,
                highlights_id: ids[i].highlight_id,
                highlights: reels[i],
            });
        }

        const json = {
            username,
            highlights_count: ids.length,
            data: data,
        };

        return json;
    } catch (error) {
        throw error;
    }
}

/**
	 * fetches user posts, with pagination
	 * @deprecated Does not return all information about a post, use fetchUserPostsV2()
	 * @param username 
	 * @param end_cursor get end_cursor by fetch user posts first
	 * @returns 
	 */
   
async fetchUserPosts(username, end_cursor = '') {
    try {
        const userId = await this.getIdByUsername(username);
        const params = {
            query_id: '17880160963012870',
            id: userId,
            first: 12,
            after: end_cursor,
        };

        const res = await this.FetchIGAPI(config.instagram_base_url, '/graphql/query/', config.android, { params });
        return res?.data?.data.user.edge_owner_to_timeline_media;
    } catch (error) {
        throw error;
    }
}

/**
	 * fetches user posts, with pagination
	 * @param username 
	 * @param end_cursor get end_cursor by fetchUserPostsV2 first
	 * @returns 
	 */

async fetchUserPostsV2(username, end_cursor = '') {
    try {
        const userId = await this.getIdByUsername(username);
        const params = {
            query_hash: '69cba40317214236af40e7efa697781d',
            variables: {
                id: userId,
                first: 12,
                after: end_cursor,
            },
        };

        const res = await this.FetchIGAPI(config.instagram_base_url, '/graphql/query/', config.android, { params });
        return res?.data?.data.user.edge_owner_to_timeline_media;
    } catch (error) {
        throw error;
    }
}

async uploadPhoto(photo) {
    try {
        const uploadId = Date.now();
        const file = Buffer.isBuffer(photo)
            ? photo
            : fs.existsSync(photo)
                ? fs.readFileSync(photo)
                : photo;

        const uploadParams = {
            media_type: 1,
            upload_id: uploadId.toString(),
            upload_media_height: 1080,
            upload_media_width: 1080,
            xsharing_user_ids: JSON.stringify([]),
            image_compression: JSON.stringify({
                lib_name: 'moz',
                lib_version: '3.1.m',
                quality: '80',
            }),
        };

        const nameEntity = `${uploadId}_0_${randInt(1000000000, 9999999999)}`;
        const headers = {
            'x-entity-type': 'image/jpeg',
            offset: 0,
            'x-entity-name': nameEntity,
            'x-instagram-rupload-params': JSON.stringify(uploadParams),
            'x-entity-length': Buffer.byteLength(file),
            'Content-Length': Buffer.byteLength(file),
            'Content-Type': 'application/octet-stream',
            'x-ig-app-id': '1217981644879628',
            'Accept-Encoding': 'gzip',
            'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
            'X-IG-Connection-Speed': `${randInt(3700, 1000)}kbps`,
            'X-IG-Bandwidth-Speed-KBPS': '-1.000',
            'X-IG-Bandwidth-TotalBytes-B': '0',
            'X-IG-Bandwidth-TotalTime-MS': '0',
        };

        const headersPhoto = this.buildHeaders(config.android, headers);
        const result = await this.FetchIGAPI(
            `${config.instagram_base_url}`,
            `/rupload_igphoto/fb_uploader_${nameEntity}`,
            config.android,
            { headers: headersPhoto, data: file, method: 'POST' }
        );

        return result?.data;
    } catch (error) {
        throw error;
    }
}

// Helper function to generate a random integer
randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
	 * Post a photo to instagram
	 * @param photo file path or Buffer
	 * @param type post type
	 * @param options 
	 * @returns 
	 */

async addPost(photo, type = 'feed', options) {
        try {
            const dateObj = new Date();
            const now = dateObj.toISOString().replace(/T/, ' ').replace(/\..+/, ' ');
            const offset = dateObj.getTimezoneOffset();
            
            const responseUpload = await this.uploadPhoto(photo);
            
            const payloadForm = {
                upload_id: responseUpload.upload_id,
                timezone_offset: offset,
                date_time_original: now,
                date_time_digitalized: now,
                source_type: '4',
                ...options,
            };

            const headers = {
                'authority': 'www.instagram.com',
                'x-ig-www-claim': 'hmac.AR2-43UfYbG2ZZLxh-BQ8N0rqGa-hESkcmxat2RqMAXejXE3',
                'x-instagram-ajax': 'adb961e446b7-hot',
                'content-type': 'application/x-www-form-urlencoded',
                'accept': '*/*',
                'user-agent': this.config.desktop,
                'x-requested-with': 'XMLHttpRequest',
                'x-csrftoken': this.parseCookie(this.IgCookie).csrftoken,
                'x-ig-app-id': '1217981644879628',
                'origin': 'https://www.instagram.com',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'referer': 'https://www.instagram.com/',
                'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': this.IgCookie,
            };

            const endpoint = `/media/${type === 'feed' ? 'configure/' : 'configure_to_story/'}`;
            const result = await this.FetchIGAPI(
                this.config.instagram_api_v1,
                endpoint,
                this.config.android,
                { data: new URLSearchParams(Object.entries(payloadForm)).toString(), method: 'POST', headers: headers }
            );

            return result?.data;
        } catch (error) {
            throw error;
        }
}

/**
	 * 
	 * @param photo input must be filepath or buffer
	 */

async changeProfilePicture(photo) {
    const media = Buffer.isBuffer(photo) ? bufferToStream(photo) : fs.createReadStream(photo);
    const form = new FormData();
    form.append('profile_pic', media, 'profilepic.jpg');

    const headers = {
        ...this.buildHeaders(config.desktop, {
            'X-CSRFToken': await getCsrfToken(),
            ...form.getHeaders(),
        }),
    };

    const result = await FetchIGAPI(config.instagram_base_url, '/accounts/web_change_profile_picture/', config.desktop, {
        method: 'post',
        data: form,
        headers,
    });

    return result?.data;
}

}

module.exports = { igApi };
  



