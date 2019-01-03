const arr = [1, null, "hello", "world", true, undefined];
console.log(arr);
delete arr[3];
console.log(arr);
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(' -- '));

const attributes = ["Nimble", "Perceptive", "Generous"];
console.log(attributes);
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(html);