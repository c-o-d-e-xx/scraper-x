const { MetricName } = require('./MetricName');

/**
 * @class ThreadsUserInsightsParams
 * @property {string|string[]} metric - The metric or array of metrics from MetricName
 * @property {Object} [options] - Optional parameters
 * @property {number} [options.since] - Unix timestamp for the start time
 * @property {number} [options.until] - Unix timestamp for the end time
 */
class ThreadsUserInsightsParams {
  /**
   * @param {string|string[]} metric - The metric name(s) from MetricName
   * @param {Object} [options] - Optional parameters for filtering
   * @param {number} [options.since] - Optional Unix timestamp for the start time
   * @param {number} [options.until] - Optional Unix timestamp for the end time
   */
  constructor(metric, options = {}) {
    if (!Array.isArray(metric) && !Object.values(MetricName).includes(metric)) {
      throw new Error(`Invalid metric: ${metric}`);
    }

    if (Array.isArray(metric) && !metric.every(m => Object.values(MetricName).includes(m))) {
      throw new Error('Invalid metrics in the array');
    }

    if (options.since && typeof options.since !== 'number') {
      throw new TypeError('since must be a number (Unix timestamp)');
    }

    if (options.until && typeof options.until !== 'number') {
      throw new TypeError('until must be a number (Unix timestamp)');
    }

    this.metric = metric;
    this.options = {
      since: options.since || null,
      until: options.until || null,
    };
  }
}

module.exports = { ThreadsUserInsightsPar
ams };
