document.getElementById('contact').addEventListener('submit', function() {
    // Show the spinner when the form is submitted
    document.getElementById('loading-spinner').style.display = 'block';
});

window.onload = function() {
    // Hide the spinner when the next page loads
    document.getElementById('loading-spinner').style.display = 'none';
};