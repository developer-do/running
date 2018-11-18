const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";
console.log("dialog = " + dialog);
console.log("imperative = " + imperative);

// 에러 코드
// const dialog2 = "Sam looked up and said "don't do that!" to Max.";

// 수정 코드

const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
console.log("dialog1 = " + dialog1);
console.log("dialog2 = " + dialog2);

const s = "In JavaScript, use \\ as an escape charater in strings.";

console.log(s);