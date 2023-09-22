const form = document.querySelector('form');
const email = document.querySelector('#email');
const button = document.querySelector('button');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function (e) {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Whoops! It looks like you forgot to add your email';
    email.style.borderColor = 'hsl(354, 100%, 66%)';
    return;
  } else if (!isValidEmail(emailValue)) {
    email.addEventListener('invalid', (e) => {
      errorMsg.style.display = 'block';
    });
  } else {
    form.submit();
  }
});

email.addEventListener('invalid', (e) => {
  e.preventDefault();
  errorMsg.style.display = 'block';
  email.style.borderColor = 'hsl(354, 100%, 66%)';
});

function isValidEmail(email) {
  const emailRegex = '/^[^s@]+@[^s@]+.[^s@]+$/';
  return emailRegex.test(email);
}
