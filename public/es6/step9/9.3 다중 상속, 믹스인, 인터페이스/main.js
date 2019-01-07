class Car {
  static getNextVin() {
    return Car.nextVin++
  }
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
  }
  static areSimilar(car1, car2) {
    return car1.make === car2.make && car1.model === car2.model;
  }
  static areSame(car1, car2) {
    return car1.vin === car2.vin;
  }
  toString() {
    return `${this.make} ${this.model} ${this.vin}`;
  }
}

class InsurancePolicy { }
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable2(o) {
  o[ADD_POLICY] = function (p) {
    this[_POLICY] = p;
  }
  o[GET_POLICY] = function () {
    return this[_POLICY];
  }
  o[IS_INSURED] = function () {
    return !!this[_POLICY];
  }
}
function makeInsurable(o) {
  o.addInsurancePolicy = function (p) {
    this.insurancePolicy = p;
  }
  o.getInsurancePolicy = function () {
    return this.insurancePolicy;
  }
  o.isInsured = function () {
    return !!this.insurancePolicy;
  }
}




Car.nextVin = 0;
console.log(makeInsurable(Car.prototype));
const car1 = new Car("Tesla", "IE");
const car2 = new Car("Tesla", "IE");
car1.addInsurancePolicy(new InsurancePolicy);
console.log(car1);
console.log(car1.toString());
console.log(car2.toString());
