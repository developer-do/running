function countDown() {
  console.log("CountDown:");
  for (let i = 5; i >= 0; i--) {
    setTimeout(function () {
      console.log(i === 0 ? "GO!" : i);
    },(5-i) * 1000);
  }
}


countDown();