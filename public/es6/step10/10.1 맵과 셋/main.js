const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();

userRoles
  .set(u1, "User")
  .set(u2, "User")
  .set(u3, "Admin");

console.log(userRoles.get(u3));

console.log('userRoles.has(u1) =',userRoles.has(u1));
console.log('userRoles.get(u1) =',userRoles.get(u1));
console.log('userRoles.has(u4) =',userRoles.has(u4));
console.log('userRoles.get(u4) =',userRoles.get(u4));

console.log('userRoles.get(u1) =', userRoles.get(u1));
console.log('userRoles.set(u1, \'Admin\') =', userRoles.set(u1, 'Admin'));
console.log('userRoles.get(u1) =', userRoles.get(u1));

console.log(userRoles.size);

for (let u of userRoles.keys()) {
  console.log(u.name);
}

for (let r of userRoles.values()) {
  console.log(r);
}

for (let ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}

// 맵도 분해 할 수 있습니다. 분해하면 좀더 자연스러운 코드가 됩니다.
for (let [u, r] of userRoles.entries()) {
  console.log(`${u.name}: ${r}`);
}

// entries() method는 맵의 기본 이터레이터 입니다. 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for (let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

console.log([...userRoles.values()]);

userRoles.delete(u2);
console.log(userRoles.size);

userRoles.clear();
console.log(userRoles.size);