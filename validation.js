function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';

    let isValid = true;

    if (username === '') {
        usernameError.innerText = 'Username is required.';
        usernameError.style.display = 'block';
        isValid = false;
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
        emailError.innerText = 'Invalid email address.';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (phone === '' || !/^\d{10}$/.test(phone)) {
        phoneError.innerText = 'Phone number must be 10 digits.';
        phoneError.style.display = 'block';
        isValid = false;
    }

    if (password === '' || password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password)) {
        passwordError.innerText = 'Password must be at least 7 characters long and include at least one capital letter, one digit, and one special character (&, $, #, @).';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerText = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', validateForm);
});
