let n = 0;
while (true) {
  n += 0.1;
  
  if (Math.abs(n - 0.3) < Number.EPSILON) {
    break;
  } else {
    console.log(n);
  }
}
console.log(`Stopped at ${n}`);
console.log(parseInt(Number.EPSILON));
console.log(Math.abs(n - 0.3));