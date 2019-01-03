const arr = Array(10).map(function (x) { return 5; });
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
delete arr1[2];
console.log(arr1.map(x => 0));
console.log(
  arr1.map(function (x) {
    return x * 2;
  })
);
