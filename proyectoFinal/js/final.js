var puntaje =localStorage.getItem('Puntaje');
var puntajeFinal=document.getElementById('puntajeFinal')
var usuario =localStorage.getItem('Usuario')
var nombre=document.getElementById("usuario")
puntajeFinal.innerText =puntaje;
nombre.innerText=usuario;
