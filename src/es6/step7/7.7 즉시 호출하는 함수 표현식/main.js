(function () {
  console.log(`\/\/ IIFE 바디 입니다`);
})();

const message = (function () {
  const secret = "I'm a secret!";
  return console.log(`The secret is ${secret.length} characters long.`);
})();

const f = (function () {
  let count = 0;
  return function () {
    return `I have been called ${++count} time(s)`;
  };
})();
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());