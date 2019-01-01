const f1 = function () {
  return "Hello World";
};

console.log(f1());

const f2 = () => {
  return `Hello World!`;
};
console.log(f2());

const f3 = function (name) {
  return `Hello, ${name}!`;
};

console.log(f3("도현"));

const f4 = name => `Hello, ${name}!`;
console.log(f4("민지"));


const f5 = function (a, b) {
  return a + b;
};

console.log(`f5(5,10) =`, f5(5, 10));

const f6 = (a, b) => { return (a + b) / f6.length; };
const f7 = (a, b) => (a * b) / f6.length;

console.log(f6(20, 50));
console.log(f7(40, 20));

const o = {
  name: 'Julie',
  greetBackwards: function () {
    const getReverseName = () => {
      let nameBackwards = '';
      let i;
      for (i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
console.log(o.greetBackwards());