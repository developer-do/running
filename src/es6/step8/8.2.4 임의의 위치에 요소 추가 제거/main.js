const arr = [1, 5, 7];
console.log(arr.splice(1, 0, 2, 3, 4), arr);
console.log(arr.splice(5, 0, 6), arr);
console.log(arr.splice(1, 2), arr);
console.log(arr.splice(2, 1, 'a', 'b'), arr);