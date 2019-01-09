const d = new Date(Date.UTC(2016, 4, 27));
console.log(d);

document.write(moment().format('LTS'));

const dd = moment([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log('dd =', dd);
const s = moment([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(s);