function f1() {
  console.log(`one`);
}
function f2() {
  console.log(`two`);
}

f2();
f1();
f2();

const x = 3;

function f() {
  console.log(x);
  console.log(y);
}

{ // new scope
  const y = 5;
  // f();
}
f();