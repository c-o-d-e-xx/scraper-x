const { MediaMetric } = require('./MediaMetric');

/**
 * @class ThreadsMediaInsightsResponse
 * @property {MediaMetric[]} data - An array of media metrics
 */
class ThreadsMediaInsightsResponse {
  /**
   * @param {MediaMetric[]} data - An array of media metrics
   */
  constructor(data) {
    if (!Array.isArray(data)) {
      throw new TypeError('data must be an array');
    }

    // Validate each item in the data array
    data.forEach((item) => {
      if (!(item instanceof MediaMetric)) {
        throw new TypeError('Each item in data must be an instance of MediaMetric');
      }
    });

    this.data = data;
  }
}

module.exports = { ThreadsMediaInsightsRespons
e };
