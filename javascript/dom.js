var span1 =document.getElementById("usererrmsg");
var span2 = document.getElementById("pswerrmsg");
var user_input=document.getElementById("user");
user_input.style.borderColor="green";
user_input.style.padding="20px";
user_input.style.borderRadius="20px";
function user_login()
{
    var user_value=user_name.value;
    var password=document.getElementById("psw").value;

    if(user_value.length <=5 || user_value.length>15)
    {
        span1.innerHTML="username must be 8 characters";
        span1.style.color="red";
       
        
    }
    else{
        span1.innerHTML="";
    }
}



















// var d=document.getElementById("divid");
// function log()
// {
//     var us=document.getElementById("user").value;
//     var psw=document.getElementById("psw").value;

//     if(us=="kgisl" && psw=="kgisl@2023")
//     {
//         d.innerHTML="Your Login is success";
//         d.style.color="green";

//     }
//     else
//     {
//         d.innerHTML="invalid user";
//         d.style.color="red";
//     }
// }

















// // var d=document.getElementById("divid");
// // function demo()
// // {
// //     var a=document.getElementById("val1").value;
// //     var b=document.getElementById("val2").value;
// //     a=parseInt(a);
// //     b=parseInt(b);

// // if(a>b)
// // {
// //     d.innerHTML="A is greaterthan B";
// // }
// // else{
// //    d.innerHTML="B is greaterthan A";
// // }











// // //     var c=a+b;
   
// // //     result.innerHTML="Total value:"+c;
// // //     result.style.color="blue";
// // //    // alert("Total value:"+c);

// // }  