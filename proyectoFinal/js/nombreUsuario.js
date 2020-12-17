document.getElementById('enviarUsuario').onkeydown = function(e){
    if(e.keyCode == 13){
    guardarUsuario()        

    }
}   
 

 function guardarUsuario() {
    var nombreUsuario =document.getElementById('enviarUsuario').value
    localStorage.setItem('Usuario',nombreUsuario)
    window.location.href= 'trivia.html'

}
