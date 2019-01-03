const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const o2 = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(o2)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop} : ${o2[prop]}`));