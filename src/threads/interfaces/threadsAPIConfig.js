const { Scope } = require('../types/Scope'); // Adjust the path as necessary

/**
 * @typedef {Object} ThreadsAPIConfig
 * @property {string} clientId
 * @property {string} clientSecret
 * @property {string} redirectUri
 * @property {string[]} scope - The scopes of access granted by the access_token.
 */

const threadsAPIConfig = {
  clientId: "your_client_id",
  clientSecret: "your_client_secret",
  redirectUri: "your_redirect_uri",
  scope: [
    Scope.THREADS_BASIC,
    Scope.THREADS_CONTENT_PUBLISH,
    Scope.THREADS_MANAGE_INSIGHTS,
    Scope.THREADS_MANAGE_REPLIES,
    Scope.THREADS_READ_REPLIES,
  ],
};

module.exports = { threadsAPIConfig };
