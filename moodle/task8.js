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
         input+='<option value="">'+j+'</option>'
    }
    document.getElementById("select2").innerHTML=input
}