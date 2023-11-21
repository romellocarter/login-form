// Get the form element
const loginform = document.getElementById('login');

// Get the input field within the form
const submission = loginform.querySelector('input[value="Login"]');

// Add a click event listener to the input field

loginform.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the form is valid
    if (loginform.checkValidity()) {
        // Perform your login logic here
        // For example, displaying an alert
        alert("You've logged in successfully");
    } else {
        // If the form is not valid, you can handle it accordingly
        // For instance, display error messages or prevent login attempts
        alert("Please fill in all required fields correctly.");
    }
});