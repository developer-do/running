const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95}
];
let i = 0;
for (i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}

const names = cart.map(x => x.name);
console.log(names);
const prices = cart.map(x => x.price);
console.log(prices);

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);

const items = ["Widget", "Gadget"];
const prices1 = [9.95, 22.95];
const carts = items.map((x, i) => ({ name: x, price: prices[i] }));
for (i = 0; i < cart.length; i++) {
  console.log(JSON.stringify(carts[i]));
  console.log(carts[i]);
}

const cards = [];
let suit = "";
let value = "";
for (suit of ['H', 'C', 'D', 'S']) {
  for (value = 1; value <= 13; value++){
    cards.push({ suit, value });
  }
}

for (i = 0; i < cards.length; i++) {
  console.log(cards[i]);  
}


for (i = 0; i < cards.filter(c => c.value === 2).length; i++) {
  console.log(cards.filter(c => c.value === 2)[i]);
}

console.log(cards.filter(c => c.suit === 'D'));
console.log(cards.filter(c => c.value > 10 || c.value <= 2));
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

function cardToString(c) {
  const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
  const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
  for (let i = 2; i <= 10; i++) {
    values[i] = i;
    
  console.log(values);
  }
  return values[c.value] + suits[c.suit];
}

console.log(cards.map(cardToString));

// value 가 2인 카드
console.log(cards.filter(c => c.value === 2).map(cardToString));

// 하트의 킹, 퀸, 주니어
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));