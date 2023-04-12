const form=document.getElementById("form");
const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const cpassword=document.getElementById("cpassword").value;


form.addEventListener("submit",(e)=>{

      e.preventDefault();
      validateInputs();
      
      

})
function validateInputs(){
    const usernamevalue=document.getElementById("username").value.trim();
const emailvalue=document.getElementById("email").value.trim();
const passwordvalue=document.getElementById("password").value.trim();
const cpasswordvalue=document.getElementById("cpassword").value.trim();
let success=true

 if(usernamevalue===""){
    success=false;
    setError(username,"user name reqired")
 }
 else{
    setsuccess(username)
 }

 if(emailvalue===""){
    success=false;
    setError(email,"email is reqired")
 }
 else if(!EmailId (emailvalue))
 setError(email,"email is invalid")
 else{
    setsuccess(email)
 }
 if(passwordvalue===""){
    success=false;
    setError(password,"password is reqired")
 }
 else if(password,length<8){
    setError(password,"password must be 8 charecters long")
 }
 else{
    setsuccess(password)
 }
 if (cpasswordvalue===""){
    success=false;
    setError(cpassword,"confirm password is reqired")
 }
 else if(cpassword!==password){
    setError(cpassword,"password does not match")
 }
 else{
    setsuccess(cpassword)
 }
  return success;

}

function setError (element,message){
    const inputGroup=element.parrentElement;
    const errorElement=inputGroup.getElementById(".error")

    errorElement.innertext=message;
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}


function setsuccess (element,message){
    const inputGroup=element.parrentElement;
    const errorElement=inputGroup.getElementById(".error")

    errorElement.innertext="";
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
var EmailId = document.getElementById('Email').value;
 const regExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/. 
