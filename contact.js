document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact');
    var spinner = document.getElementById('loading-spinner');
    var button = document.getElementById('contact-submit');

    if (form) {
        form.addEventListener('submit', function() {
            // Hide the button and show the spinner when the form is submitted
            if (spinner && button) {
                spinner.style.display = 'block';
                button.style.display = 'none';
            }
        });
    }

    window.onload = function() {
        // Show the button and hide the spinner when the next page loads
        if (spinner && button) {
            spinner.style.display = 'none';
            button.style.display = 'block';
        }
    };
});