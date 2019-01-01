const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
  return `Hello, I'm ${this.name}`;
}

console.log(greet());               // "Hello, I'm undefined" - this는 어디에도 묶이지 않았습니다.
console.log(greet.call(bruce));     // "Hello, I'm Bruce!"    - this는 bruce입니다.
console.log(greet.call(madeline));  // "Hello, I'm Madeline!" - thisㄴ느 madeline입니다.

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
console.log(bruce);
// bruce는 이제 {name: "Bruce", birthYear: 1949, occupation: "singer"} 가 됩니다.
update.call(madeline, 1942, 'actress');
console.log(madeline);
// madeline는 이제 {name: "Madeline", birthYear: 1942, occupation: "actress"} 가 됩니다.

update.apply(bruce, [1955, "actor"]);
console.log(bruce);
// bruce는 이제 {name: "Bruce", birthYear: 1955, occupation: "actor"} 가 됩니다.

update.apply(madeline, [1918, "writer"]);
console.log(madeline);
// madeline은 이제 {name: "Madeline", birthYear: 1918, occupation: "writer"} 가 됩니다.

const arr = [2, 3, -5, 15, 7];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
console.log(bruce);
// apply(bruce, newBruce)와 같습니다.
console.log(Math.min(...arr));
console.log(Math.max(...arr));

const updateBruce = update.bind(bruce);
const updateMadeline = update.bind(madeline);

console.log(updateBruce);
console.log(updateMadeline);

updateBruce(1904, "actor");
updateMadeline(1904, "actor");
console.log(bruce);
console.log(madeline);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("영태,도현");
console.log(bruce);