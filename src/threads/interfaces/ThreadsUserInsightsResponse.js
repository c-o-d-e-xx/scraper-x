const { UserMetric } = require('./UserMetric');

/**
 * @class ThreadsUserInsightsResponse
 * @property {UserMetric[]} data - An array of user metrics
 */
class ThreadsUserInsightsResponse {
  /**
   * @param {UserMetric[]} data - An array of user metrics
   */
  constructor(data) {
    if (!Array.isArray(data)) {
      throw new TypeError('data must be an array');
    }

    // Validate each item in the data array
    data.forEach((item) => {
      if (!(item instanceof UserMetric)) {
        throw new TypeError('Each item in data must be an instance of UserMetric');
      }
    });

    this.data = data;
  }
}

module.exports = { ThreadsUserInsightsRespons
e };
