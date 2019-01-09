function countdown(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds-1)*1000);
    }
  });
}
countdown(5);