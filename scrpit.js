document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Name validation
    if (fullName.length < 5) {
        alert('Name must be at least 5 characters long.');
        isValid = false;
    }

    // Email validation
    if (!email.includes('@')) {
        alert('Enter a correct email.');
        isValid = false;
    }

    // Phone number validation
    if (phone === '123456789' || phone.length !== 10) {
        alert('Enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Password validation
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        alert('Password is not strong enough.');
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to the server
    }
}
