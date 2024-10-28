const axios = require("axios");

class ThreadsAPI {
    constructor(config) {
        this.accessToken = null;
        this.baseUrl = "https://graph.threads.net/v1.0/";
        this.config = config;
    }

    // Example function: Set the access token
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
     }

    async refreshTokenIfNeeded({ accessToken, expiresIn }) {
        const currentTime = Math.floor(Date.now() / 1000);

        // If there is less than a week left on the token, refresh it
        if (currentTime >= expiresIn - 604800) {
            const response = await this.refreshLongLivedToken(accessToken);
            const { access_token: refreshedAccessToken } = response;
            this.accessToken = refreshedAccessToken;
            return response;
        }

        return {
            access_token: accessToken,
            token_type: "Bearer",
            expires_in: expiresIn,
        };
    }

  getAuthorizationUrl(state) {
        const baseUrl = "https://threads.net/oauth/authorize";
        const params = new URLSearchParams({
            client_id: this.config.clientId,
            redirect_uri: this.config.redirectUri,
            scope: this.config.scope.join(","),
            response_type: "code",
            ...(state && { state }),
        });
        return `${baseUrl}?${params.toString()}`;
    }

async getAccessToken(code) {
        const url = `${this.baseUrl}oauth/access_token`;
        const params = new URLSearchParams({
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret,
            grant_type: "authorization_code",
            redirect_uri: this.config.redirectUri,
            code,
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            this.accessToken = response.access_token;
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getLongLivedToken(shortLivedToken) {
        const url = `${this.baseUrl}access_token`;
        const params = new URLSearchParams({
            grant_type: "th_exchange_token",
            client_secret: this.config.clientSecret,
            access_token: shortLivedToken,
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return { ...response };
        } catch (error) {
            throw this.handleError(error);
        }
}

async refreshLongLivedToken(longLivedToken) {
        const url = `${this.baseUrl}refresh_access_token`;
        const params = new URLSearchParams({
            grant_type: "th_refresh_token",
            access_token: longLivedToken,
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return { ...response };
        } catch (error) {
            throw this.handleError(error);
        }
}

async createMediaContainer({ userId, mediaType, mediaUrl, text }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            media_type: mediaType,
            ...(mediaType === "IMAGE" && mediaUrl && { image_url: mediaUrl }),
            ...(mediaType === "VIDEO" && mediaUrl && { video_url: mediaUrl }),
            ...(text && { text }),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async publishMediaContainer({ userId, creationId }) {
        const url = `${this.baseUrl}${userId}/threads_publish`;
        const params = new URLSearchParams({
            creation_id: creationId,
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getMediaContainerStatus(containerId) {
        const url = `${this.baseUrl}${containerId}`;
        const params = new URLSearchParams({
            fields: "status,error_message",
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
}

async createCarouselItemContainer({ userId, mediaType, mediaUrl }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            media_type: mediaType,
            is_carousel_item: "true",
            ...(mediaType === "IMAGE"
                ? { image_url: mediaUrl }
                : { video_url: mediaUrl }),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async createCarouselContainer({ userId, children, text }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            media_type: "CAROUSEL",
            children: children.join(","),
            ...(text && { text }),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getUserThreads({ userId, fields, options }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            fields: fields.join(","),
            ...(options?.limit && { limit: options.limit.toString() }),
            ...(options?.since && { since: options.since }),
            ...(options?.until && { until: options.until }),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getThreadsMediaObject({ mediaId, fields }) {
        const url = `${this.baseUrl}${mediaId}`;
        const params = {
            fields: fields.join(","),
        };

        try {
            return await this.makeRequest({
                url,
                method: "GET",
                params,
            });
        } catch (error) {
            throw this.handleError(error);
        }
}

async getUserProfile({ userId, fields }) {
        const url = `${this.baseUrl}${userId}`;
        const params = {
            fields: fields.join(","),
        };

        try {
            return await this.makeRequest({
                url,
                method: "GET",
                params,
            });
        } catch (error) {
            throw this.handleError(error);
        }
}

async getReplies({ mediaId, fields, reverse = true }) {
        const url = `${this.baseUrl}${mediaId}/replies`;
        const params = {
            fields: fields.join(","),
            reverse: reverse.toString(),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getConversation({ mediaId, fields, reverse = true }) {
        const url = `${this.baseUrl}${mediaId}/conversation`;
        const params = {
            fields: fields.join(","),
            reverse: reverse.toString(),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

async hideReply({ replyId, hide }) {
        const url = `${this.baseUrl}${replyId}/manage_reply`;
        const params = new URLSearchParams({
            hide: hide.toString(),
        });

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.success;
        } catch (error) {
            throw this.handleError(error);
        }
}

async respondToReply({ userId, mediaType, text, replyToId }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            media_type: mediaType,
            text,
            reply_to_id: replyToId,
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async controlWhoCanReply({ userId, mediaType, text, replyControl }) {
        const url = `${this.baseUrl}${userId}/threads`;
        const params = {
            media_type: mediaType,
            text,
            reply_control: replyControl,
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "POST",
                params,
            });
            return response.id;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getMediaInsights({ mediaId, metrics }) {
        const url = `${this.baseUrl}${mediaId}/insights`;
        const params = {
            metric: metrics.join(","),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

async getUserInsights({ userId, metric, options }) {
        const url = `${this.baseUrl}${userId}/threads_insights`;
        const params = {
            metric: Array.isArray(metric) ? metric.join(",") : metric,
            ...(options?.since && { since: options.since.toString() }),
            ...(options?.until && { until: options.until.toString() }),
        };

        try {
            const response = await this.makeRequest({
                url,
                method: "GET",
                params,
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

async makeRequest({ url, method, params }) {
        const config = {
            method,
            url,
            ...(method === "GET" ? { params } : { data: params }),
            headers: {
                ...(this.accessToken && {
                    Authorization: `Bearer ${this.accessToken}`,
                }),
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
}

handleError(error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw new Error(error.response.data.error_message || error.message);
            }
            throw new Error(error.message);
        }
        throw error; // Re-throw non-Axios errors
}

}

module.exports = { ThreadsAPI };
