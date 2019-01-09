function countDown(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i === 13) return reject(new Error("Oh my god"));
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds - 1) * 1000);
    }
  });
}

countDown(14).then(
  function () {
    console.log("countDown completed successfully");
  },
  function (err) {
    console.log("countDown experienced an error: " + err.message);
  }
)

const p = countDown(20);
p.then(function () {
  console.log("countDown completed successfully FUCK!!");
});
p.catch(function (err) {
  console.log("countDown experienced an error: " + err.message);
});

