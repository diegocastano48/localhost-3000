/*
== String Manipulation ====
Se debe crear un método que reciba una cadena de texto el cual deberá validar si al final de
cada palabra enviada tiene un signo de admiración (!), si este tiene más de dos signos, solo
deberá quitar uno
*/

function validar_texto(a){
    let str = a;
    let caracter ="!";
    var indices = [];
    for(var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === caracter) indices.push(i);
    };
   
    if(indices.length>2){
        console.log();
        console.log("La cadena de texto tiene " +indices.length+" signos de ! y le quito 1");        
        console.log(str.slice(0,-1));
        console.log();
    }else{
        console.log();
        console.log("La cadena de texto solo tiene " +indices.length+" signos de !");        
        console.log(str);
        console.log();
    }   
}

validar_texto("hola!!!");