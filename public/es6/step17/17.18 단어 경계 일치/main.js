const inputs = [
  "john@doe.com",
  "john@doe.com is my email",
  "my email is john@doe.com",
  "use john@doe.com, my email",
  "my email:john@doe.com"
]
const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
console.log(inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>')));
