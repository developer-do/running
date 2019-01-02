// 배열 리터럴
const arr1 = [1, 2, 3];                         // 숫자로 구성된 배열
const arr2 = ["one", 2, "three"];               // 비균질적 배열
const arr3 = [[1, 2, 3], ["one", 2, "three"]];  // 배열을 포함한 배열
const arr4 = [                                  // 비 균질적 배열
  { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
  [
    { name: "Susan", type: "object" },
    { name: "Anthony", type: "object"}
  ],
  1,
  function () {
    return "array can contain functions too";
  },
  "three"
];


// 배열 요소에 접근하기
console.log(`arr1[0] = ${arr1[0]}`);
console.log(`arr1[2] = ${arr1[2]}`);
console.log(`arr3[1] = ${arr3[1]}`);
console.log(`arr4[1][0] = ${arr4[1][0]}`);
console.log("arr4[1][0] =",arr4[1][0]);

// 배열 길이
console.log(`arr1.length = ${arr1.length}`);
console.log(`arr4.length = ${arr4.length}`);
console.log(`arr4[1].length = ${arr4[1].length}`);

// 배열 길이 늘리기
console.log("arr1[4] = 5", arr1[4] = 5);
console.log(arr1);
console.log(`arr1.length = ${arr1.length}`);

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않습니다.
arr2[10];    // undefined;
console.log(`arr2[10] = ${arr2[10]}`);
console.log(`arr2.length = ${arr2.length}`);

// Array 생성자 ( 거의 사용하지 않습니다. )
const arr5 = new Array();           // 빈 배열
console.log("arr5 =", arr5);
const arr6 = new Array(1, 2, 3);    // [1,2,3];
console.log("arr6 =", arr6);
const arr7 = new Array(2);          // 길이가 2인 배열, 요소는 모두 undefined 입니다.
console.log("arr7 =", arr7);
const arr8 = new Array("2");        // ["2"]
console.log("arr8 =", arr8);