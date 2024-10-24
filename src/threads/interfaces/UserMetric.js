const { MetricName } = require('./MetricName');
const { TimePeriod } = require('./TimePeriod');
const { TimeSeriesValue } = require('./TimeSeriesValue');
const { TotalValue } = require('./TotalValue');

/**
 * @class UserMetric
 * @property {string} name - The metric name from MetricName
 * @property {string} period - The time period from TimePeriod
 * @property {TimeSeriesValue[]} [values] - Optional array of TimeSeriesValue objects
 * @property {TotalValue} [total_value] - Optional total value
 * @property {string} title - The title of the user metric
 * @property {string} description - The description of the user metric
 * @property {string} id - The unique identifier for the user metric
 */
class UserMetric {
  /**
   * @param {string} name - The name of the metric
   * @param {string} period - The time period
   * @param {TimeSeriesValue[]} [values] - Optional array of TimeSeriesValue objects
   * @param {TotalValue} [total_value] - Optional total value
   * @param {string} title - Title of the user metric
   * @param {string} description - Description of the user metric
   * @param {string} id - Unique ID for the user metric
   */
  constructor(name, period, values, total_value, title, description, id) {
    if (!Object.values(MetricName).includes(name)) {
      throw new Error(`Invalid metric name: ${name}`);
    }
    if (!Object.values(TimePeriod).includes(period)) {
      throw new Error(`Invalid time period: ${period}`);
    }
    if (values && (!Array.isArray(values) || !values.every(val => val instanceof TimeSeriesValue))) {
      throw new TypeError('Values must be an array of TimeSeriesValue instances');
    }
    if (total_value && !(total_value instanceof TotalValue)) {
      throw new TypeError('total_value must be an instance of TotalValue');
    }
    
    this.name = name;
    this.period = period;
    this.values = values || [];
    this.total_value = total_value || null;
    this.title = title;
    this.description = description;
    this.id = id;
  }
}

module.exports = { UserMetric 
};
