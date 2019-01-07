function getGreeting() {
  return "Hello World";
}

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o);
console.log(o.f());

const arr = [1, 2, 3];
console.log(arr);
arr[1] = getGreeting;
console.log(arr);
console.log(arr[1]());