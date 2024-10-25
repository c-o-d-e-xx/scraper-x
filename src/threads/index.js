const axios = require("axios");

const ProfileFields = [
  "id",
  "username",
  "name",
  "threads_profile_picture_url",
  "threads_biography",
];

const RetrieveRepliesFields = [
  "id",
  "text",
  "username",
  "permalink",
  "timestamp",
  "media_product_type",
  "media_type",
  "media_url",
  "shortcode",
  "thumbnail_url",
  "children",
  "is_quote_post",
  "has_replies",
  "root_post",
  "replied_to",
  "is_reply",
  "is_reply_owned_by_me",
  "hide_status",
  "reply_audience",
];

const Scope = [
  "threads_basic",
  "threads_content_publish",
  "threads_manage_insights",
  "threads_manage_replies",
  "threads_read_replies",
];

const ContainerStatus = [
  "EXPIRED",
  "ERROR",
  "FINISHED",
  "IN_PROGRESS",
  "PUBLISHED",
];

const TimePeriod = ["day", "week", "days_28", "lifetime"];

class ThreadsAPIConfig {
  /**
   * @param {string} clientId - The client ID.
   * @param {string} clientSecret - The client secret.
   * @param {string} redirectUri - The redirect URI.
   * @param {string[]} scope - The scopes of access granted by the access_token expressed as a list of comma-delimited or space-delimited, case-sensitive strings.
   * 
   * @throws Will throw an error if an invalid scope is provided.
   */
  constructor(clientId, clientSecret, redirectUri, scope = []) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.scope = scope;

    if (!this.validateScopes()) {
      throw new Error("Invalid scope(s) provided.");
    }
  }

  /**
   * Validates if all provided scopes are in the allowed Scope list.
   * @returns {boolean} - True if valid, otherwise false.
   */
  validateScopes() {
    return this.scope.every(s => Scope.includes(s));
  }
}

/**
 * Note: Type CAROUSEL is not available for single thread posts.
 */
const MediaType = ["TEXT", "IMAGE", "VIDEO", "CAROUSEL"];
const ReplyControl = ["everyone", "accounts_you_follow", "mentioned_only"];

class MediaContainer {
  constructor(id) {
    this.id = id;
  }
}

// Available metric names for both Media and User Insights
const MetricName = [
  "views",
  "likes",
  "replies",
  "reposts",
  "quotes",
  "followers_count",
  "follower_demographics",
];

// Structure for a single metric value (used in Media Insights)
class MetricValue {
  constructor(value) {
    this.value = value;
  }
}

// Structure for a single time series value (used in User Insights)
class TimeSeriesValue {
  constructor(value, end_time) {
    this.value = value;
    this.end_time = end_time;
  }
}

// Structure for a total value (used in User Insights)
class TotalValue {
  constructor(value) {
    this.value = value;
  }
}

// Structure for a single metric in Media Insights
class MediaMetric {
  constructor(name, period, values, title, description, id) {
    this.name = name;
    this.period = period;
    this.values = values;
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

// Structure for a single metric in User Insights
class UserMetric {
  constructor(name, period, values, total_value, title, description, id) {
    this.name = name;
    this.period = period;
    this.values = values;
    this.total_value = total_value;
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

class ContainerStatusResponse {
  constructor(status, id, error_message) {
    this.status = status;
    this.id = id;
    this.error_message = error_message;
  }
}

// Main response structure for Media Insights
class ThreadsMediaInsightsResponse {
  constructor(data) {
    this.data = data;
  }
}

// Main response structure for User Insights
class ThreadsUserInsightsResponse {
  constructor(data) {
    this.data = data;
  }
}

// Parameters for the User Insights API request
class ThreadsUserInsightsParams {
  constructor(metric, options) {
    this.metric = metric;
    this.options = options;
  }
}

class TokenResponse {
  constructor(access_token, token_type, expires_in) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.expires_in = expires_in;
  }
}

class ThreadsAPI {
  constructor(config: ThreadsAPIConfig) {
    this.config = config;
    this.accessToken = null;
    this.baseUrl = "https://graph.threads.net/v1.0/";
  }

  /**
   * Set the access token for the API
   * @param accessToken The access token
   * @returns void
   */
  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  // Token Management
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

  /**
   * Generate the authorization URL for OAuth flow
   * @param state Optional state parameter for OAuth
   * @returns The authorization URL
   */
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

  /**
   * Exchange authorization code for a short-lived access token
   * @param code The authorization code
   * @returns Object containing short-lived access token and user ID
   */
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

  /**
   * Exchange short-lived token for long-lived token
   * @param shortLivedToken The short-lived access token
   * @returns Object containing long-lived access token
   */
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

  /**
   * Refresh long-lived token
   * @param longLivedToken The long-lived access token to refresh
   * @returns The new long-lived access token
   */
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

  /**
   * Create a media container for a thread post
   * @param userId The user ID
   * @param mediaType The type of media
   * @param mediaUrl Optional URL for image or video
   * @param text Optional text content
   * @returns The creation ID of the media container
   */
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

  /**
   * Publish a media container
   * @param userId The user ID
   * @param creationId The creation ID of the media container
   * @returns The ID of the published thread
   */
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

  /**
   * Checks the status of a media container
   * @param containerId The ID of the media container
   * @returns The status of the media container
   * @note Recommended querying a container's status once per minute, for no more than 5 minutes.
   */
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

  /**
   * Create a carousel item container
   * @param userId The user ID
   * @param mediaType The type of media (IMAGE or VIDEO)
   * @param mediaUrl The URL of the media
   * @returns The creation ID of the carousel item container
   */
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

  /**
   * Create a carousel container
   * @param userId The user ID
   * @param children Array of creation IDs for carousel items
   * @param text Optional text content
   * @returns The creation ID of the carousel container
   */
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

  /**
   * Retrieve user's threads
   * @param userId The user ID
   * @param fields Array of fields to retrieve
   * @param options Optional parameters for pagination and date range
   * @returns Array of user's threads
   */
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

  /**
   * Retrieve a single threads media object
   * @param mediaId The ID of the media object
   * @param fields Array of fields to retrieve
   * @returns The threads media object
   */
  async getThreadsMediaObject({ mediaId, fields }) {
    const url = `${this.baseUrl}${mediaId}`;
    const params = {
      fields: fields.join(","),
    };

    try {
      return await this.makeRequest({ url, method: "GET", params });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Retrieve a user's profile
   * @param userId The user ID
   * @param fields Array of fields to retrieve
   * @returns The user's profile
   */
  async getUserProfile({ userId, fields }) {
    const url = `${this.baseUrl}${userId}`;
    const params = {
      fields: fields.join(","),
    };

    try {
      return await this.makeRequest({ url, method: "GET", params });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Retrieve replies to a thread
   * @param mediaId The ID of the thread
   * @param fields Array of fields to retrieve
   * @param reverse Whether to reverse the order of replies
   * @returns Array of replies
   */
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

  /**
   * Retrieve a conversation thread
   * @param mediaId The ID of the thread
   * @param fields Array of fields to retrieve
   * @param reverse Whether to reverse the order of conversation
   * @returns Array of conversation items
   */
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

  /**
   * Hide or unhide a reply
   * @param replyId The ID of the reply
   * @param hide Whether to hide (true) or unhide (false) the reply
   * @returns Whether the operation was successful
   */
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

  /**
   * Respond to a reply
   * @param userId The user ID
   * @param mediaType The type of media for the response
   * @param text The text content of the response
   * @param replyToId The ID of the thread to reply to
   * @returns The ID of the created reply
   */
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

  /**
   * Control who can reply to a thread
   * @param userId The user ID
   * @param mediaType The type of media for the thread
   * @param text The text content of the thread
   * @param replyControl The reply control setting
   * @returns The ID of the created thread
   */
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

  /**
   * Retrieve media insights
   * @param mediaId The ID of the media
   * @param metrics Array of metrics to retrieve
   * @returns The media insights
   */
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

  /**
   * Retrieve user insights
   * @param userId The user ID
   * @param metrics Array of metrics to retrieve
   * @param options Optional parameters for date range
   * @returns The user insights
   */
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

  /**
   * Make a request to the Threads API
   * @param url The API endpoint URL
   * @param method The HTTP method
   * @param params The request parameters
   * @returns The response data
   */
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

  /**
   * Handle errors from API requests
   * @param error The error object
   * @returns The error message
   */
  handleError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    throw error;
  }
}

module.exports = {
  ThreadsAPI,
  ThreadsAPIConfig,
  ProfileFields,
  RetrieveRepliesFields,
  Scope,
  ContainerStatus,
  TimePeriod,
  MediaType,
  ReplyControl,
  MetricName,
  MediaMetric,
  UserMetric,
  ContainerStatusResponse,
  ThreadsMediaInsightsResponse,
  ThreadsUserInsightsResponse,
  ThreadsUserInsightsParams,
  TokenResponse,
  MediaContainer,
  MetricValue,
  TimeSeriesValue,
  TotalValue,
};

      
