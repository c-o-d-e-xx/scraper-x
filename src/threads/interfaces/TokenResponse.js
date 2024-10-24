/**
 * @class TokenResponse
 * @property {string} access_token - A token that can be sent to a Threads API.
 * @property {string} token_type - Identifies the type of token returned. Always has the value "Bearer".
 * @property {number} expires_in - The time in seconds at which this token expires.
 */
class TokenResponse {
  /**
   * @param {string} access_token - The access token
   * @param {string} token_type - The type of token (always "Bearer")
   * @param {number} expires_in - Expiry time of the token in seconds
   */
  constructor(access_token, token_type, expires_in) {
    if (typeof access_token !== 'string') {
      throw new TypeError('access_token must be a string');
    }

    if (typeof token_type !== 'string' || token_type !== 'Bearer') {
      throw new TypeError('token_type must be a string and the value must be "Bearer"');
    }

    if (typeof expires_in !== 'number') {
      throw new TypeError('expires_in must be a number');
    }

    this.access_token = access_token;
    this.token_type = token_type;
    this.expires_in = expires_in;
  }
}

module.exports = { TokenRespons
e };
