const promo = "Opening for XAAX is the dynamic GOOG! DSSD At the box office now!";
const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log(bands);

const html = `<img alt='A "simple" example.'>` +
  `<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(['"]).*\1>/g);
console.log(matches);