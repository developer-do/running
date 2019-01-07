const naughty = new WeakSet();

const children = [
  { name: "Suzy" },
  { name: "Derek" },
  { name: "12" },
  { name: "34" },
  { name: "56" }
];

naughty.add(children[1]);
console.log(naughty);

console.log(children);

for (let child of children) {
  if (naughty.has(child)) {
    console.log(`Coal for ${child.name}!`);
  } else {
    console.log(`Presents for ${child.name}`);
  }
}