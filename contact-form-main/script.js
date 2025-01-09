document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages and styles
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
    document.querySelectorAll('input, textarea').forEach(function(el) {
        el.classList.remove('error');
    });

    // Validate first name
    const firstName = document.getElementById('first-name').value;
    if (!firstName) {
        document.getElementById('first-name-error').textContent = 'This field is required';
        document.getElementById('first-name').classList.add('error');
        isValid = false;
    }

    // Validate last name
    const lastName = document.getElementById('last-name').value;
    if (!lastName) {
        document.getElementById('last-name-error').textContent = 'This field is required';
        document.getElementById('last-name').classList.add('error');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'This field is required';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    // Validate query type
    const queryType = document.querySelector('input[name="query-type"]:checked');
    if (!queryType) {
        document.getElementById('query-type-error').textContent = 'Please select a query type';
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('message-error').textContent = 'This field is required';
        document.getElementById('message').classList.add('error');
        isValid = false;
    }

    // Validate consent
    const consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consent-error').textContent = 'To submit the form, please consent to being contacted';
        isValid = false;
    }

    if (isValid) {
        document.querySelector('.notification').style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});