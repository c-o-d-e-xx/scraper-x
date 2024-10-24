const { MetricName } = require('./MetricName');
const { TimePeriod } = require('./TimePeriod');
const { MetricValue } = require('./MetricValue');

/**
 * @class MediaMetric
 * @property {string} name - The metric name from MetricName
 * @property {string} period - The time period from TimePeriod
 * @property {MetricValue[]} values - An array of MetricValue objects
 * @property {string} title - The title of the media metric
 * @property {string} description - The description of the media metric
 * @property {string} id - The unique identifier for the media metric
 */
class MediaMetric {
  /**
   * @param {string} name - The name of the metric
   * @param {string} period - The time period
   * @param {MetricValue[]} values - Array of MetricValue
   * @param {string} title - Title of the media metric
   * @param {string} description - Description of the media metric
   * @param {string} id - Unique ID for the media metric
   */
  constructor(name, period, values, title, description, id) {
    if (!Object.values(MetricName).includes(name)) {
      throw new Error(`Invalid metric name: ${name}`);
    }
    if (!Object.values(TimePeriod).includes(period)) {
      throw new Error(`Invalid time period: ${period}`);
    }
    if (!Array.isArray(values) || !values.every(val => val instanceof MetricValue)) {
      throw new TypeError('Values must be an array of MetricValue instances');
    }
    
    this.name = name;
    this.period = period;
    this.values = values;
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

module.exports = { MediaMetric 
};
