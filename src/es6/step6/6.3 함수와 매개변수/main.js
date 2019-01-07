const a = 5, b = 10;
function avg(a, b) {
  return (a + b) / avg.length;
}

console.log(avg(5, 8, 10));
console.log(avg(a, b));

function f(x) {
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부: x=${x} (할당 후)`);
}
let x = 3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);
console.log("\n\n\n");

function t(o) {
  o.message = `t 안에서 수정함 (이전 값: '${o.message}')`;
}

let o = {
  message: "초기값"
};

console.log(`t를 호출하기 전: o.message = "${o.message}"`);
t(o);
console.log(o.message);
console.log(`t를 호출한 다음: o.message = "${o.message}"`);

console.log("\n\n\n");





function f1(o1) {
  o1.message = "f1에서 수정함";
  console.log(`f1 내부: o1.message="${o1.message}"(할당 전)`);
  o1 = {
    message: "새로운 객체!"
  };
  console.log(`f1 내부: o1.message="${o1.message}"(할당 후)`);
}

let o1 = {
  message: "초기 값"
};

console.log(`f1를 호출하기 전 : o1.message = "${o1.message}"`);
f1(o1);
console.log(`f1를 호출한 다음 : o1.message = "${o1.message}"`);
console.log(o1);