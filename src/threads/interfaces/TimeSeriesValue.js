class TimeSeriesValue {
  constructor(value, end_time) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
    }
    if (typeof end_time !== 'string') {
      throw new TypeError('end_time must be a string');
    }
    
    this.value = value;
    this.end_time = end_time;
  }
}

module.exports = { TimeSeriesValue }
;
