export default class Car {
  constructor(brand, motor, color) {
    /* eslint-disable */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const speciess = this.constructor[Symbol.species];
    return new speciess();
  }
}
