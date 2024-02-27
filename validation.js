var email=document.forms['form']['email'];
var password=document.forms['form']['password'];


var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_err');
   
email.addEventListener('textinput',email_verify);
password.addEventListener('textinput',password_verify);
function validated(){
    if(email.value.length < 9) {
        email.style.border="2px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
}
  
if(password.value.length < 6 ) {
    password.style.border="2px solid red";
    password_error.style.display="block";
    password.focus();
    return false;
}
function email_verify(){
    if(email.value.length >= 8){
        email.style.border="2px solid silver";
        email_error.style.display="none";
        return true;
    }
}

function password_verify(){
    if(password.value.length >= 5){
       password.style.border="2px solid silver";
        password_error.style.display="none";
        return true;
    }
}