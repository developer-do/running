const arr = [1, 2, 3];
console.log(arr.concat(4, 5, 6), arr);
console.log(arr.concat([4,5,6]), arr);
console.log(arr.concat([4, 5], 6), arr);
console.log(arr.concat([4, [5, 6]]), arr);