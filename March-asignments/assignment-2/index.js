function check_pass() {

    var pass = document.getElementById('pass');

    var cpass = document.getElementById('c_pass');
    
    var alert = document.getElementById('alert');

    pass=pass.value;
    cpass=cpass.value;

    if(pass==cpass){
        alert.innerText ="Password Match";
        
    }

    else {
        alert.innerText = "Password Don't Match";
        
    }

    pass.innerText =" ";
    cpass.innerText=" ";
}