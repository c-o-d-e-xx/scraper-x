// Import the IUser interface
const { IUser } = require("../Interfaces/IUser");

class User {
  /**
   * The id of the User.
   * @type {string}
   */
  id;

  /**
   * The TikTok unique id of the User.
   * @type {string}
   */
  uniqueId;

  /**
   * Optional nickname of the User.
   * @type {string}
   */
  nickname;

  /**
   * The avatar link of the User.
   * @type {string}
   */
  avatar;

  /**
   * The bio description of the User.
   * @type {string}
   */
  signature;

  /**
   * The date of the creation of the User.
   * @type {string}
   */
  createdAt;

  /**
   * Whether the User is a verified User by TikTok.
   * @type {boolean}
   */
  verified;

  /**
   * The secret UID of the User.
   * @type {string}
   */
  secretUID;

  /**
   * The link in the bio, if it contains any.
   * @type {string}
   */
  bioLink;

  /**
   * Whether the account privacy is set to private.
   * @type {boolean}
   */
  privateAccount;

  /**
   * Number of followers for this User.
   * @type {number}
   */
  followers;

  /**
   * Number of the accounts this User follows.
   * @type {number}
   */
  following;

  /**
   * How many likes this User got over time.
   * @type {number}
   */
  hearts;

  /**
   * Number of the Videos this User has posted.
   * @type {number}
   */
  videos;

  /**
   * User constructor.
   * @param {string} id The id of the User.
   * @param {string} uniqueId The TikTok unique id of the User.
   * @param {string} nickname Optional nickname of the User.
   * @param {string} avatar The avatar link of the User.
   * @param {string} signature The bio description of the User.
   * @param {string} createdAt The date of the creation of the User.
   * @param {boolean} verified Whether the User is a verified User by TikTok.
   * @param {string} secretUID The secret UID of the User.
   * @param {string} bioLink The link in the bio if it contains any.
   * @param {boolean} privateAccount Whether the account privacy is set to private.
   * @param {number} followers Number of followers for this User.
   * @param {number} following Number of the accounts this User follows.
   * @param {number} hearts How many likes this User got over time.
   * @param {number} videos Number of the Videos this User has posted.
   */
  constructor(
    id,
    uniqueId,
    nickname,
    avatar,
    signature,
    createdAt,
    verified,
    secretUID,
    bioLink,
    privateAccount,
    followers,
    following,
    hearts,
    videos
  ) {
    this.id = id;
    this.uniqueId = uniqueId;
    this.nickname = nickname;
    this.avatar = avatar;
    this.signature = signature;
    this.createdAt = createdAt;
    this.verified = verified;
    this.secretUID = secretUID;
    this.bioLink = bioLink;
    this.privateAccount = privateAccount;
    this.followers = followers;
    this.following = following;
    this.hearts = hearts;
    this.videos = videos;
  }
}

// Export the User class
module.exports = { User };
