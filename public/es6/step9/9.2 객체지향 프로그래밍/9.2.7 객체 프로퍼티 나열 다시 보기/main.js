class Super {
  constructor() {
    this.name = 'Super';
    this.isSuper = true;
  }
}

// 유효하지만, 권장하지 않음
Super.prototype.sneaky = 'not recommended';

class Sub extends Super {
  constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

const obj = new Sub();
console.log(obj);

for (let p in obj) {
  console.log(`${p}: ${obj[p]}` +
    (obj.hasOwnProperty(p) ? '' : ' (inherited)')
  );
}