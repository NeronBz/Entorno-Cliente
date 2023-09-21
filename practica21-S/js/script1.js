window.addEventListener("load", inicio);

//Identificar componentes html
let btnJugar = document.getElementById("jugar");
let spPuntos = document.getElementById("sppuntos");
let contenedorPrincipal = document.getElementById("contenedorP");

//Declarar vectores
const colores = ["Red", "Green", "Blue", "Orange", "Yellow"];
const nombres = ["Red", "Green", "Blue", "Orange", "Yellow"];

//Variables
let tiempo;
let contadorSegundos = 30;
let puntos = 0;

function inicio() {
  let campo = document.createElement("fieldset");

  //Incorpora al nuevo componente creado el estilo de clase .container que está en el css
  campo.className = "container";

  //Añadir campo al contenedor principal
  contenedorPrincipal.appendChild(campo);

  let leyenda = document.createElement("legend");
  leyenda.textContent = "Juegos 21 S";
  campo.appendChild(leyenda);

  //Contenedor de los 15 botones de juego
  let contenedorFlex = document.createElement("div");
  contenedorFlex.className = "gallery";

  //Añadir contenedorFlex a campo
  campo.appendChild(contenedorFlex);

  //Crear los 15 botones
  for (let i = 0; i < 15; i++) {
    let divs = document.createElement("div");
    divs.className = "fondo";
    contenedorFlex.appendChild(divs);
  }

  btnJugar.onclick = Jugar;

  function Jugar() {
    console.log("Entro en Jugar");
    contadorSegundos = 30;
    puntos = 0;
    btnJugar.disabled = true;
    cargarInfo();
    cargarColoresJuego();

    //Temporizador
    tiempo = setInterval(accion, 1000);

    function accion() {
      if (contadorSegundos > 0) {
        contadorSegundos--;
        cargarInfo();
      } else {
        limpiarDivs();
        alert("El juego ha terminado");
        clearInterval(tiempo);
      }
    }
  }

  function cargarInfo() {}

  function cargarColoresJuego() {
    let arrayCajasJuego = document.getElementsByName("cajasJuego");
    //tipo de for
  }
}
