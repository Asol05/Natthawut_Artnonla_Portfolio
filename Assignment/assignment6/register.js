var form

window.onload = pageLoad;
function pageLoad(){
	form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    if(document.forms["myRegister"]["password"].value != document.forms["myRegister"]["retrypassword"].value ){
        var errormsg = document.getElementById('errormsg');
        errormsg.innerHTML = "Username or Password incorrect"
        form.reset();
        return false;
    }
    return true;
}