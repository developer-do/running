const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g);
console.log(beginning);
const end = input.match(/\w+$/g);
console.log(end);
const everything = input.match(/^.*$/g);
console.log(everything);
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);
console.log(nomatch1);
console.log(nomatch2);

const input2 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input2.match(/^\w+/mg);
console.log(beginnings);
const endings = input2.match(/\w+$/mg);
console.log(endings);