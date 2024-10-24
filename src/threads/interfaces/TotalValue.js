class TotalValue {
  constructor(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
    }
    
    this.value = value;
  }
}

module.exports = { TotalValue };
