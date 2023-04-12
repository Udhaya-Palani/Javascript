var sn1=document.getElementById("spn1");
var us;
var psw;
var cpsw;
function use(){
    us=document.getElementById("user").value;
    if(us.length<8)
    {
        sn1.innerHTML="username must contain 8 characters.";
        sn1.style.color="red";
    }
    else{
        sn1.innerHTML=""; 
    }
}

var sn3=document.getElementById("spn3");
function pass(){
    psw=document.getElementById("password").value;
    if(psw.length<8)
    {
    sn3.innerHTML="Password must has atleast 8 characters that includes atleast 1 lowercase character, 1 uppercase character, 1 number and 1 spicial character in(!@#$%^&*)";
    sn3.style.color="red";
    }
    else{
        sn3.innerHTML="";
    }
}

var sn4=document.getElementById("spn4");
function word(){
    cpsw=document.getElementById("confirm_password").value;
    if(cpsw.length<8)
    {
    sn4.innerHTML="Please enter the password again";
    sn4.style.color="red";
    }
    else{
        sn4.innerHTML="";
        
    }
}

function signup(){
    if(psw==cpsw){
    alert("welcome "+ us);
    }
    else{
        alert("Incorrect password")
    }
}