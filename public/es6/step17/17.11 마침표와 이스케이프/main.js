const input = "address: 333 Main St., Anywhere, Ny, 55532. Phone: 555-555-2525";
const match = input.match(/\d{5}.*/);
console.log(match);

const quation = "(2 + 3.5) * 7";
const match2 = quation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log(match2);
const match3 = quation.match(/[\s\S]/);
console.log(match3);