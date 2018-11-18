const a1 = [1, 2, 3, 4];          // 숫자로 구성된 배열
const a2 = [1, 'two', 3, null];   // 여러 가지 타입으로 구성된 배열
const a3 = [                      // 여러 줄로 정의한 배열
  "What the hammer? What the chain?",
  "In what furnace was thy brain?",
  "What the anvil? What dread grasp",
  "Dare its deadly terrors clasp?"
];
const a4 = [                      // 객체가 들어있는 배열
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];
const a5 = [
  [1, 3, 5],
  [2, 4, 6]
];

const arr = ['a', 'b', 'c'];
arr.length;                       // 3

// 첫번쨰 요소를 가져옵니다.
console.log(arr[0]);

// arr의 마지막 요소의 인덱스는 arr.length - 1입니다.
arr[arr.length - 1];

const arr2 = [1, 2, 'c', 4, 5];
// 배열의 값을 덮어쓸 때는 새 값을 할당하면 된다.
arr2[2] = 3;