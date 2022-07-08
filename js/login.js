const password = document.querySelector('#password');
const matchingPassword = document.querySelector('#matching_password');

matchingPassword.addEventListener('change', function() {
  console.log(password.value + " " + matchingPassword.value);
  if (password.value !== matchingPassword.value) {
    password.setCustomValidity('Invalid.');
  } else {
    password.setCustomValidity("");
  }
})