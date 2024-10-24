
const axios = require('axios');

class ThreadsAPI {
  constructor(config) {
    this.config = config;
    this.accessToken = null;
    this.baseUrl = 'https://graph.threads.net/v1.0/';
  }

  /**
   * Set the access token for the API
   * @param {string} accessToken The access token
   * @returns {void}
   */
  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  // Token Management
  async refreshTokenIfNeeded({ accessToken, expiresIn }) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime >= expiresIn - 604800) {
      const response = await this.refreshLongLivedToken(accessToken);
      const { access_token: refreshedAccessToken } = response;
      this.accessToken = refreshedAccessToken;
      return response;
    }
    return {
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: expiresIn,
    };
  }

  /**
   * Generate the authorization URL for OAuth flow
   * @param {string} [state] Optional state parameter for OAuth
   * @returns {string} The authorization URL
   */
  getAuthorizationUrl(state) {
    const baseUrl = 'https://threads.net/oauth/authorize';
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope.join(','),
      response_type: 'code',
      ...(state && { state }),
    });
    return `${baseUrl}?${params.toString()}`;
  }

  /**
   * Exchange authorization code for a short-lived access token
   * @param {string} code The authorization code
   * @returns {Promise<object>} Object containing short-lived access token and user ID
   */
  async getAccessToken(code) {
    const url = `${this.baseUrl}oauth/access_token`;
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: this.config.redirectUri,
      code,
    });

    try {
      const response = await this.makeRequest({
        url,
        method: 'POST',
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
   * @param {string} shortLivedToken The short-lived access token
   * @returns {Promise<object>} Object containing long-lived access token
   */
  async getLongLivedToken(shortLivedToken) {
    const url = `${this.baseUrl}access_token`;
    const params = new URLSearchParams({
      grant_type: 'th_exchange_token',
      client_secret: this.config.clientSecret,
      access_token: shortLivedToken,
    });

    try {
      const response = await this.makeRequest({
        url,
        method: 'GET',
        params,
      });
      return { ...response };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Refresh long-lived token
   * @param {string} longLivedToken The long-lived access token to refresh
   * @returns {Promise<object>} The new long-lived access token
   */
  async refreshLongLivedToken(longLivedToken) {
    const url = `${this.baseUrl}refresh_access_token`;
    const params = new URLSearchParams({
      grant_type: 'th_refresh_token',
      access_token: longLivedToken,
    });

    try {
      const response = await this.makeRequest({
        url,
        method: 'GET',
        params,
      });
      return { ...response };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createMediaContainer({
    userId,
    mediaType,
    mediaUrl,
    text,
  }) {
    const url = `${this.baseUrl}${userId}/threads`;
    const params = {
      media_type: mediaType,
      ...(mediaType === MediaType.IMAGE && mediaUrl && { image_url: mediaUrl }),
      ...(mediaType === MediaType.VIDEO && mediaUrl && { video_url: mediaUrl }),
      ...(text && { text }),
    };

    try {
      const response = await this.makeRequest({ url, method: "POST", params });
      return response.id;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Other methods...

  async makeRequest({ url, method, params }) {
    const options = {
      method,
      url,
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    };

    const response = await axios(options);
    return response.data;
  }

  handleError(error) {
    console.error(error);
    throw new Error('An error occurred while processing the request');
  }
}

module.exports = { ThreadsAPI };
