const stuff =
  'height:    9\n' +
  'medium:     5\n' +
  'low:       2\n';
const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);

const field = 'something';
const valid = /\S/.test(field);
console.log(valid);