const p1 = document.createElement('p');
const p2 = document.createElement('p');
const content = document.createElement('div');
const body = document.body;
p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

content.id = "content";
content.appendChild(p1);
content.appendChild(p2);
body.appendChild(content);

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
console.log(firstChild);

parent.insertBefore(p1, firstChild);
console.log(parent.appendChild(p2));