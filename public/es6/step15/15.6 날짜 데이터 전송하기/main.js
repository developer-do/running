const before = { d: new Date() };
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
console.log(json);
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(after);
console.log(typeof after.d);

after.d = new Date(after.d);
console.log(after.d instanceof Date);

const befo = { d: new Date().valueOf() };
console.log(typeof befo.d);
const jso = JSON.stringify(before);
const aft = JSON.parse(json);
console.log(typeof aft.d);
const ddd = new Date(after.d);
console.log(ddd);