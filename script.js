document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
        // Here you could integrate with an email API to send the message
        this.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
