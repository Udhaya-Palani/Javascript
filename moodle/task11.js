function get(){
    var user=document.getElementById("us").value;
    alert(user)
    var dob=document.getElementById("dob").value;
    alert(dob)
    var firstname=user.slice(0,4);
    alert(firstname)
    
    var date=new Date(dob);
    var lastname=date.getDate();
    var fullname=firstname+lastname;
    var pass=document.getElementById("divid")
    pass.innerHTML=fullname;
}