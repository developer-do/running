const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

console.log(d1 > d2);
console.log(d1 < d2);

const msDiff = d2 - d1;
console.log(msDiff);
const daysDiff = msDiff / 1000 / 60 / 60 / 24;
console.log(daysDiff);

const dates = [];

const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++){
  dates.push(new Date(min + delta * Math.random()));
}

dates.sort((a, b) => b - a);
console.log(dates);

let m = moment();
console.log(m.add(3, 'days'));
console.log(m.subtract(2, 'years'));

console.log(m = moment());
console.log(m.startOf('year'));
console.log(m.endOf('month'));

let ms = moment()
  .add(10, "hours")
  .subtract(3, "days")
  .endOf("month");
console.log(ms._d);