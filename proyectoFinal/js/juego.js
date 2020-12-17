const pregunta = document.getElementById('pregunta');
const opciones = Array.from(document.getElementsByClassName('opcion'));
const botonSiguiente=document.getElementById('botonContinuar')

let todasLasPreguntas=undefined;
let numero=undefined;



let preguntaActual = {};
let aceptarRespuestas = false;
let puntos = 0;
let preguntasFaltantes = 0;
let preguntasDisponibles = [];


// Lista de preguntas
let preguntas = [
    {
        pregunta: 'Como se llama el continente donde se juega League of Legends',
        opcion1: 'Demacia',
        opcion2: 'Ciudad de los vandalos',
        opcion3: 'Magalomania',
        opcion4: 'Valoran',
        respuesta:4

    },
    {
        pregunta:"Quien lleva el titulo de 'Rugido del trueno'?",
        opcion1: "Garen",
        opcion2: "Fizz",
        opcion3: "Ashe",
        opcion4: "Volibear",
        respuesta:4,
    },
    {
        pregunta: "Es cierto que Corki solia tener un cegador en su conjunto de habilidades?",
        opcion1: "Si",
        opcion2: "No",
        opcion3: "",
        opcion4: "",
        respuesta:1,
    },
    {
        pregunta: "Podemos teletransportarnos a la E de Jarvan IV?",
        opcion1: "Si",
        opcion2: "No",
        opcion3: "",
        opcion4: "",
        respuesta:1,
    },
    {
        pregunta: "Que campeon es conocido como el niño que fragmento el tiempo?",
        opcion1: "Ezreal",
        opcion2: "Ekko",
        opcion3: "Zilean",
        opcion4: "Lucian",
        respuesta:2,
    },
    {
        pregunta: "Quien es la parca",
        opcion1: "Aurelion Sol",
        opcion2: "Mordekaiser",
        opcion3: "Kindred",
        opcion4: "Kled",
        respuesta:3,
    },
    {
        pregunta: "Cual es el champ con mas tamaño del lore?",
        opcion1: "Galio",
        opcion2: "Teemo",
        opcion3: "Nasus",
        opcion4: "Aurelion Sol",
        respuesta: 4,
    },
    {
        pregunta: "Cual de los siguientes champs no es un yordle",
        opcion1: "Kled",
        opcion2: "Teemo",
        opcion3: "Amummu",
        opcion4: "Fizz",
        respuesta: 3,
    },
    {
        pregunta: "Quien es el espiritu de la forja de Freljord?",
        opcion1: "Ornn",
        opcion2: "Sion",
        opcion3: "Garen",
        opcion4: "Kindred",
        respuesta: 1,
    },
];
// Preguntas disponibles y puntos por pregunta correcta
var puntosBien = 10;
var cantPreguntas = preguntas.length;



arrancarPartida = () => {
    
    puntos = 0;
    preguntasDisponibles = preguntas ;
    preguntasFaltantes=preguntasDisponibles.length;
    nuevaPregunta();
};

nuevaPregunta = () => {
    if (preguntasDisponibles.length == 0 || preguntasFaltantes == 0) {
        localStorage.setItem("Puntaje",puntos )
        return window.location.assign('final.html');
    }
    preguntasFaltantes--;
    todasLasPreguntas = Math.floor(Math.random() * preguntasDisponibles.length);
    preguntaActual = preguntasDisponibles[todasLasPreguntas];
    pregunta.innerText = preguntaActual.pregunta;

    opciones.forEach((opcion) => {
        numero = opcion.dataset['number'];
        opcion.innerText = preguntaActual['opcion' + numero];
    });

    preguntasDisponibles.splice(todasLasPreguntas, 1);
    aceptarRespuestas = true;
};

opciones.forEach((opcion) => {
    opcion.addEventListener('click', (e) => {

        aceptarRespuestas = false;
        let opcionElegida = opcion.dataset;
        opcionElegida=opcion.dataset['number'];

    botonSiguiente.style.display="initial";

    
    if (Number(opcionElegida)==preguntaActual.respuesta){
         puntos+=puntosBien
    }

    console.log(Number(opcionElegida)==preguntaActual.respuesta)
    
    });


});
    botonSiguiente.addEventListener('click',(e)=>{        
        nuevaPregunta()
        botonSiguiente.style.display="none";


    })




arrancarPartida();