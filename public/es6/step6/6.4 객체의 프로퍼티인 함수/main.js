const o = {
  name: "Wallace",
  bark: function() {
    return 'Woof!';
  }
};

console.log(o);
console.log(o.bark());

for (x in o) {
  console.log(o[x]);
  console.log(x);
}

const o2 = {
  name: "Wallace",
  bark() {
    return 'Woof!';
  }
};

for (x in o) {
  console.log(x);
}