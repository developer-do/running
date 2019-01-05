function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ['P', 'N', 'R', 'D'];
  this._userGear = this.userGears[0];
}

class Es6Car { };

function Es5Car() { }

console.log(typeof Es5Car);
console.log(typeof Es6Car);