const beer99 = "32435kfjadsklj432324"; 
const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
console.log(match);

const match1 = beer99.match(/[0-9]+/);
console.log(match1);