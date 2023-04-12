function output()
{
    var ou=document.getElementById("out")
    var em=document.getElementById("email").value;
    var pd=document.getElementById("pwd").value;
    var us=document.getElementById("use").value;

    var lan=document.getElementById("s").value;
    var zi=document.getElementById("zip").value;
    var tx=document.getElementById("txt").value;
    
    ou.innerHTML=us+"<br>"+pd+"<br>"+em+"<br>"+lan+"<br>"+zi+"<br>"+tx;
    
}