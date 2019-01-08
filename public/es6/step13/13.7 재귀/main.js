let cntChk = (function () {
  let i = 0;
  return function () {
    console.log(i++);
  };
})();

function findNeddle(haystack) {
  cntChk();
  if (haystack.length === 0) {
    console.log("no haystack here!");
    return "no haystack here!";
  }
  if (haystack.shift() === 'needle') {
    console.log("found it!");
    return "found it!";
  }
  console.log(haystack);
  return findNeddle(haystack);
}

console.log(findNeddle(['hay', 'hay', 'hay', 'hay', 'hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(3));
