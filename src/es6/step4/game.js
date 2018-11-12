let funds = 50;           // 시작조건

while (funds > 1 && funds < 100) {

  funds = funds + 2; // 2보 전진
  funds = funds - 1; // 1보 후퇴
  console.log(funds);
  // 돈을 겁니다.

  // 주사위를 굴립니다.
  
  // 그림을 맞췄으면 돈을 가져옵니다.
}

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