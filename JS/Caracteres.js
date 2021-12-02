function getID(id){
return document.getElementById(id).value;
}
var parrafo = document.querySelector(".paragraph-alert");
function Caracteres(){
setInterval(function() {
    var numero = getID("numero");
    if(numero.length > 9){
        parrafo.style.display = "block";        
    }else if(numero.length< 9){
        parrafo.style.display = "none";
    }else if(numero.value ==""){
    }

},0000);
}


