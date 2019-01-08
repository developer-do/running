

/* function getNextRainbowColor() {
  if(++colorIndex >= colors.length) {
    colorIndex = 0;
  }
  return colors[colorIndex];
}

for(let i = 0 ; i < 7; i++) {
  console.log(getNextRainbowColor());
} */


const getNextRainbowColor = (function() {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      return {value:colors[colorIndex], done:false };
    }
  }
})();

setInterval(function() {
  document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor.next().value;
}, 500);

console.log(typeof getNextRainbowColor);


/* const years = new Date().getFullYear();

function isLeapYear(year) {
  if(year % 4 !== 0) return false;
  else if(year % 100 !== 0) return true;
  else if(year % 400 !== 0) return false;
  else return true;
}

console.log(isLeapYear(years)); */