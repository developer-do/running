function sum(arr, f) {
  if(typeof f !== 'function') f = x => x;

  return arr.reduce((a,x) => a += f(x), 0);
}

function sumOfSquares(arr){
  return sum(arr, x=> x*x);
}

console.log(sumOfSquares([1,3,45]));

function newSummer(f) {
  return arr => sum(arr,f);
}

const sumOfSquares1 = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x,3));

console.log(sumOfSquares1([1,2,3]));
console.log(sumOfCubes([1,2,3]));