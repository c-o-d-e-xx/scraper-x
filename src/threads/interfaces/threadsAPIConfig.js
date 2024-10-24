const { Scope } = require('../types/Scope'); // Adjust the path as necessary

class ThreadsAPIConfig {
  constructor(clientId, clientSecret, redirectUri) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.scope = [
      Scope.THREADS_BASIC,
      Scope.THREADS_CONTENT_PUBLISH,
      Scope.THREADS_MANAGE_INSIGHTS,
      Scope.THREADS_MANAGE_REPLIES,
      Scope.THREADS_READ_REPLIES,
    ];
  }
}

module.exports = { ThreadsAPIConfig };
