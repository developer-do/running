const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
console.log(arr.sort());

const arr1 = [
  { name: "Suzanne" },
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda"}
];

console.log(arr1.sort());
arr1.sort((a, b) => a.name > b.name);
console.log(arr1);
arr1.sort((a, b) => a.name[1] > b.name[1]);
// console.log(arr1[0].name);
arr1.sort(function (a, b) {
  console.log(a.name[0] > b.name[0]);
  return a.name[0] > b.name[0];
});
