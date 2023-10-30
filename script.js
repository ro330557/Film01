document.querySelector('.menu').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation, you can add more complex validation logic here
    if (email === 'rohxn.03@gmail.com' && password === 'gunashree') {
        window.location.href = 'secondpage.html'; // Redirect to the second page
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
