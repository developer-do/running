let name = "Irena"; // global
let age = 25;       // global

function greet() {
  console.log(`Hello ${name}`);
}

function getBirthYear() {
  return new Date().getFullYear() - age;
}
greet();
console.log(getBirthYear());

let user = {
  name: "Irena",
  age: 28
};


function greet1(user) {
  console.log(`Hello ${user.name}`);
}
greet1(user);

function getBirthYear1(user) {
  return new Date().getFullYear() - user.age;
}
console.log(getBirthYear1(user));