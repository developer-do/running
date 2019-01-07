function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o1 = {
  subject: "I",
  verb: "love",
  object: "JavaScript"
};
const o2 = {
  subject: "I",
  verb: "love",
  object: "Min-Ji"
};

let arr = [o1, o2];
let i = 0;
for (i = 0; i < 2; i++) {
  console.log(getSentence(arr[i]));
}

function addPrefix(prefix, ...words) {
  // 나중에 더 좋은 방법을 배웁니다.
  const prefixedWords = [];
  let i;
  if (arguments.length > addPrefix.length) {
    for (i = 0; i < words.length; i++) {
      prefixedWords[i] = prefix + words[i];
    }  
  } else if(arguments.length === addPrefix.length) {
    return prefix;
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex", "st"));
console.log(addPrefix("maple", "story"));
console.log(addPrefix("maple"));
