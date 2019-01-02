const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log("arr.indexOf(5) =",arr.indexOf(5));
console.log("arr.lastIndexOf(5) =",arr.lastIndexOf(5));
console.log("arr.indexOf(\"a\") =",arr.indexOf("a"));
console.log('arr.lastIndexOf("a") =',arr.lastIndexOf("a"));
console.log('arr.indexOf({ name: "Jerry" }) =',arr.indexOf({ name: "Jerry" }));
console.log('arr.indexOf(o) =',arr.indexOf(o));
console.log('arr.indexOf([1, 2]) =',arr.indexOf([1, 2]));
console.log('arr.indexOf("9") =',arr.indexOf("9"));
console.log('arr.indexOf(9) =',arr.indexOf(9));

console.log('arr.indexOf("a", 5) =',arr.indexOf("a", 5));
console.log('arr.indexOf(5, 5) =',arr.indexOf(5, 5));
console.log('arr.lastIndexOf(5, 4) =',arr.lastIndexOf(5, 4));
console.log('arr.lastIndexOf(true, 3) =', arr.lastIndexOf(true, 3));

const arr1 = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis"}
];
console.log('\n\n\n');
console.log('arr1.findIndex(o => o.id === 5) =',arr1.findIndex(o => o.id === 5));
console.log('arr1.findIndex(o => o.name === "Francis") =', arr1.findIndex(o => o.name === "Francis"));
console.log('arr1.findIndex(o => o === 3) =', arr1.findIndex(o => o === 3));
console.log('arr1.findIndex(o => o.id === 17) =', arr1.findIndex(o => o.id === 17));

console.log('\n\n\n');

console.log('arr1.find(o => o.id === 5) =', arr1.find(o => o.id === 5));
console.log('arr1.find(o => o.id === 2) =', arr1.find(o => o.id === 2));

console.log('\n\n\n');

const arr2 = [20, 1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr2.find((x, i) => i > 0 && Number.isInteger(Math.sqrt(x))));


console.log('\n\n\n');
class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;
const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

const arrr = [jamie, juliet, peter, jay];

// 옵션 1 : ID를 직접 비교하는 방법
console.log(arrr.find(p => p.id === juliet.id));

// 옵션 2 : "this" 매개 변수를 이용하는 방법
console.log(arrr.find(function (p) {
  return p.id === this.id;
}, jay));


console.log('\n\n\n');

const ar1 = [5, 7, 12, 15, 17];
console.log(ar1.some(x => x % 2 === 0));
console.log(ar1.some(x => Number.isInteger(Math.sqrt(x))));
console.log('\n\n');

const ar2 = [4, 6, 16, 36];
console.log(ar2.every(x => x % 2 === 0));
console.log(ar2.every(x => Number.isInteger(Math.sqrt(x))));