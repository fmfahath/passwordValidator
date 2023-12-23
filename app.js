 let showPassBtn = document.querySelector('.show-password');
 let passwordInp = document.querySelector('.password-input');


 //show/hide password in input field
 showPassBtn.addEventListener('click', () => {
    showPassBtn.classList.toggle('fa-eye');
    showPassBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
 });