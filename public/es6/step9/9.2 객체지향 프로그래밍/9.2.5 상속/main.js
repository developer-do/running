class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created");
  }
  deployAirbags() {
    console.log("BWOOSH!");
  }
}

const v = new Vehicle();

v.addPassenger("Frank");
v.addPassenger("Judy");
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");


document.write("c.passengers = ",c.passengers, "<br/>");
console.log("c =" , c);
document.write("v.passengers = ",v.passengers,"<br/>");
console.log("v.passengers =", v.passengers);

c.deployAirbags();
// v.deployAirbags();
