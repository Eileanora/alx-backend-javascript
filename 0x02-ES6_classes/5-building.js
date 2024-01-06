export default class Building {
  /* eslint-disable */
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
    this._sqft = sqft;
  }
  get sqft() {
    return this._sqft;
  }
}
