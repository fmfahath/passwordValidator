 let showPassBtn = document.querySelector('.show-password');
 let passwordInp = document.querySelector('.password-input');
 let passwordChecklist = document.querySelectorAll('.list-item');


 //show/hide password in input field
 showPassBtn.addEventListener('click', () => {
    showPassBtn.classList.toggle('fa-eye');
    showPassBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
 });

 //ReqularExpression validation
 let validationRegex = [
    {regex : /.{8,}/}, 
    {regex : /[0-9]/},
    {regex : /[a-z]/},
    {regex : /[A-Z]/},
    {regex : /[^A-Za-z0-9]/}
 ];

 passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {

        let isValid = item.regex.test(passwordInp.value);

        if(isValid){
            passwordChecklist[i].classList.add('checked');
        }
        else{
            passwordChecklist[i].classList.remove('checked');            
        }
    })
 });