export default class HolbertonClass {
  /**
     * @param {Number} size
     * @param {String} location
     */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
