let loginBtn = document.querySelector('.login');
let registerBtn = document.querySelector('.register');
let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

loginBtn.onclick = function(){
    loginForm.classList.toggle("active")
    registerForm.classList.toggle("active");
}
registerBtn.onclick = function(){
    loginForm.classList.toggle("active")
    registerForm.classList.toggle("active");
}