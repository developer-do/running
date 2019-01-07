const err = new Error('invalid email');
console.log(err);

function validateEmail(email) {
  return email.match(/@/) ?
    email :
    err;
}
const email1 = "dohyun8736@com";
const email2 = "dohyun8736.com";
console.log(validateEmail(email1));
console.log(validateEmail(email2));
if (validateEmail instanceof Error) {
  console.error(`Error: ${validateEmail.message}`);
} else {
  console.log(`Valid email: ${validateEmail}`);
}