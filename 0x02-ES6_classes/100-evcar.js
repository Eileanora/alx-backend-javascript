import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    /* eslint-disable */
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const speciess = super.constructor[Symbol.species];
    return new speciess();
  }
}
