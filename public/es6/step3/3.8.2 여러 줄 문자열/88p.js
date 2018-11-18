let currentTemp = 19.5;
const multiline = "line1\
line2";

// => line1line2

const multiline2 = "line1\n\
line2";

/* => line1
      line2
*/



// 벡틱 사용

const multiline3 = `line1
line2`;

/*
  => line1
     line2
*/

const multiline4 = `line1
  line2
  line3`;

/*
  => line1
      line2
      line3

      앞에 공백이 생김
*/

const multiline5 = "line1\n" +
  "line2\n" +
  "line3";

/*
  => line1
     line2
     line3
*/

const multiline6 = 'Currrnet temperature:\n' +
  `\t${currentTemp}\u00b0C\n` +
  "Don't worry...the heat is on!";

/*
  => Current temperature:
       19.5°C
     Don't worry...the heat is on!
*/