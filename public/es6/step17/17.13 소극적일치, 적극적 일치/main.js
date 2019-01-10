const input = "Regex pros know the difference between\n" +
  "<i>greedy</i> and <i>lazy</i> matching.";
const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(output);
const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(output2);