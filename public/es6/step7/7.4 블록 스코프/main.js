console.log('before block');
{
  console.log('inside block');
  const x = 3;
  console.log(x);
}
console.log(`outside block: x=${x}`);