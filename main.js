alert("Diligencia Tus Datos")

var nombre = document.getElementById('nombre');

var numero = document.getElementById('numero');

var correo = document.getElementById('correo');

var edad = document.getElementById('edad');

var comentario = document.getElementById('comentario');



function enviarformulario () {
    console.log ('Enviando Tus Datos...');

    var mensaje = []

    if(edad.value >=20 || edad.value === ''){
        mensaje.push('Eres toda una Cat Lover');
    }

    if(edad.value <=20 || edad.value === ''){
        mensaje.push('Eres una Cat Lover Principiante');
    }

    edad.innerHTML = mensaje.join(',');

    return false; 

}






