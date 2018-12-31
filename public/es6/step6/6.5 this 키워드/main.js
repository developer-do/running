const o = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}`;
  }
};
console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak);
console.log(speak());


console.log(`\n\n\n`);



const o1 = {
  name: "Julie",
  greetBackwards: function () {
    function getReverseName() {
      let nameBackwards = "";
      let i;
      for (i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};

console.log(o1.greetBackwards());

const o2 = {
  name: "Julie",
  greetBackwards: function () {
    const self = this;
    function getReverseName() {
      let nameBackwards = '';
      let i;
      for (i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
console.log(o2.greetBackwards());