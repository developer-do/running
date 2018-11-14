let funds = 50;           // 시작조건

// while (funds > 1 && funds < 100) {

//   funds = funds + 2; // 2보 전진
//   funds = funds - 1; // 1보 후퇴
//   console.log(funds);
//   // 돈을 겁니다.

//   // 주사위를 굴립니다.
  
//   // 그림을 맞췄으면 돈을 가져옵니다.
// }

const bets = {
  crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0
};
let totalBet = rand(1, funds);
if (totalBet === 7) {
  totalBet = funds;
  bets.heart = totalBet;
} else { 

}
funds = funds - totalBet;

let remaining = totalBet;
do {
  let bet = rand(1, remaining);
  let face = randFace();
  bets[face] = bets[face] + bet;
  console.log("bets[face] = "+bets[face]);
  remaining = remaining - bet;
  console.log("remaining = "+remaining);
} while (remaining > 0);

const hand = [];
for (let roll = 0; roll < 3; roll++){
  hand.push(randFace());
}
console.log(hand);

let winnings = 0;
for (let die = 0; die < hand.length; die++){
  let face = hand[die];
  if (bets[face] > 0) {
    winnings = winnings + bets[face];
    console.log("winnings = "+winnings);
  }
}
funds = funds + winnings;
console.log("funds = "+funds);

// m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
  console.log(m);
}

// 크라운 앤 앵커 게임의 여섯가지 도형중 하나를 무작위 반환합니다.
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
  [rand(0, 5)];
}