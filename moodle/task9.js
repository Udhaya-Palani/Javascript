function sample(){

    var a=document.getElementById("number").value;
    var id=document.getElementById("select");
    var output='<option>select</option>'
    for (var i=0;i<a;i++){
     output+='<option value='+i+'>'+i+'</option>'
    }
    document.getElementById("select").innerHTML=output
}
function sample2(){
    var id=document.getElementById("select").value;
    alert(id)
    var input='<option>select</option>'
    for (var j=0;j<id;j++){
         input+='<option value='+j+'>'+j+'</option>'
    }
    document.getElementById("select2").innerHTML=input
}
function sample3(){
    var c=document.getElementById("select2").value;
    alert(c)
    var inputtype=""
    for(var k=0;k<c;k++){
    
        inputtype+='<input type="text" placeholder="enter user name"><input type="password" placeholder="enter your password">'
     }
     document.getElementById("formid").innerHTML=inputtype
}