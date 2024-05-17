document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');

    togglePassword.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'Esconder';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'Mostrar';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'main.html';
    });
});