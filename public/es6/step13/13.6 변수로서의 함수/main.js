function addThreeSquareAddFiveTakeSquareRoot(x) {
  return Math.sqrt(Math.pow(x+3, 2) + 5);
}
const answer = (addThreeSquareAddFiveTakeSquareRoot(5)) + addThreeSquareAddFiveTakeSquareRoot(2) / addThreeSquareAddFiveTakeSquareRoot(7);
console.log(answer);

const f = addThreeSquareAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2) / f(7));
console.log(answer2);

const Money = require('math-money');

const oneDollar = Money.Dollar(1);
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
