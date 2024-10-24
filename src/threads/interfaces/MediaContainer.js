class MediaContainer {
  constructor(id) {
    if (typeof id !== 'string') {
      throw new TypeError('id must be a string');
    }
    this.id = id;
  }
}

module.exports = { MediaContainer }
  ;
