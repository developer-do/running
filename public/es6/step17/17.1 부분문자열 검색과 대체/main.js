const input = "As I was going to Saint Ives";
console.log(input.length);
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going", 9));
console.log(input.endsWith("going", 14));
console.log(input.includes("going"));
console.log(input.includes("going", 10));
console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));

console.log("\n");

console.log(input.toLowerCase().startsWith("as"));
console.log("\n");

const output = input.replace("going", "walking");
console.log(output);