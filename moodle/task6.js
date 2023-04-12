function sample(){

    var a=document.getElementById("number").value;
    var id=document.getElementById("select");
    var output='<option>select</option>'
    for (var i=0;i<a;i++){
     output+='<option>'+i+'</option>'
    }
    document.getElementById("select").innerHTML=output
}