
    // document.getElementById("empty-message").style.display = "show";
    // document.getElementById("empty-message").style.display = "inherit";

function encriptar(){

    var frase = document.getElementById("textoDesencriptado").value.toLowerCase();

    // i = es para que tome letras mayusculas y minusculas
    // g = tome en cuenta toda la linea o la oracion
    // m = tome en cuenta multiples lineas 

    var textoDesencriptado = frase.replace(/e/img, "enter");
    var textoDesencriptado = textoDesencriptado.replace(/o/img, "ober");
    var textoDesencriptado = textoDesencriptado.replace(/i/img, "imes");
    var textoDesencriptado = textoDesencriptado.replace(/a/img, "ai");
    var textoDesencriptado = textoDesencriptado.replace(/u/img, "ufat");

    document.getElementById("textoEncriptado").innerHTML = textoDesencriptado;
   
  

    // document.getElementById("full-message").style.display = "block";
    

    if(textoDesencriptado !== ""){
        document.getElementById("empty-message").style.display = "none";
        document.getElementById("full-message").style.display = "show";
        document.getElementById("full-message").style.display = "inherit";
    }else{
        document.getElementById("full-message").style.display = "none";
        document.getElementById("empty-message").style.display = "show";
        document.getElementById("empty-message").style.display = "inherit";
    }

}


function desencriptar(){
    
    var frase = document.getElementById("textoDesencriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;

    // document.getElementById("full-message").style.display = "show";
    // document.getElementById("full-message").style.display = "inherit";

    if(textoEncriptado !== ""){
        document.getElementById("empty-message").style.display = "none";
        document.getElementById("full-message").style.display = "show";
        document.getElementById("full-message").style.display = "inherit";
    }else{
        document.getElementById("full-message").style.display = "none";
        document.getElementById("empty-message").style.display = "show";
        document.getElementById("empty-message").style.display = "inherit";
    }

}


function copiar(){

    var contenido = document.querySelector("#textoEncriptado");
    contenido.select();
    document.execCommand("copy");
    
}

