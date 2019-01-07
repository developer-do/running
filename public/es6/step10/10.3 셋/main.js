const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();

userRoles
  .set(u1, "User")
  .set(u2, "User")
  .set(u3, "Admin");

const roles = new Set();
roles.add("User");
roles.add("Admin");

roles.add("User");
console.log(roles.size);
console.log(roles);

console.log(roles.delete("Admin"));
console.log(roles);
console.log(roles.delete("Admin"));
