export default class Airport {
  /* eslint-disable */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  // default string description
  toString() {
    return `[object ${this._code}]`
  }
}
