const err = new Error('invalid email');
const email = null;

function validateEmail(email) {
  console.log(err);
  return email.match(/@/) ? email : err;
}

try {
  const validatedEmail = validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
  } else {
    console.log(`Valid email: ${validatedEmail}`);
  }
} catch (err) {
  console.log(err.message);
  console.log(`Error: ${err.message}`);
}