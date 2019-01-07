const arr = new Array(5).fill(1);
console.log(arr);
console.log(arr.fill("a"));
console.log(arr.fill("b", 1));
console.log(arr.fill("c", 2, 4));
console.log(arr.fill(5.5, -4));
console.log(arr.fill(0, -3, -1));