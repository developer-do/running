console.log("Before timeout: " + new Date());

setTimeout(function () {
  console.log("After timeout: " + new Date());
}, 60 * 1000);   // 1분
console.log("I happen after setTimeout!");
console.log("Me too!");

