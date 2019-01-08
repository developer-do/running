function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const it = abc();

console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let l of abc()) {
  console.log(l);
}