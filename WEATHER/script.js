document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Simple validation and storing user data (replace with your own logic)
    if (username && password ) {
        const userDetails = {
            username: username,
            password: password, // In real applications, passwords should be hashed and secured
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        window.location.href = 'dashboard.html';
        window.alert("welcome to weather forecast");
    } else {
        errorMessage.textContent = 'Please fill in all fields';
    }
});
