window.addEventListener("load", inicio);
const ArrayImagenes = [
  "img/0.JPG",
  "img/1.JPG",
  "img/2.JPG",
  "img/3.JPG",
  "img/4.JPG",
  "img/5.JPG",
  "img/6.JPG",
  "img/7.JPG",
];
//array con 14 números enteros entre 0 y 7
const ArrayFinal = [];
function inicio() {
  console.log("entra en inicio");
  const pantallaJ = document.querySelector("#pantallaJuego");
  const resultado = document.querySelector("#resultado");
  let contadorAciertos = 0;

  let cuerpo = document.querySelector("body");
  let container = document.createElement("div");
  container.className = "container";
  cuerpo.appendChild(container);
  crearPanel();

  function crearPanel() {
    for (let i; i < ArrayImagenes.length; i++) {
      let divImg = document.createElement("img");
      divImg.className = "gallery div";
      divImg.src
      container.appendChild(divImg);
      console.log("voy a crearlo");
    }
  }
}
//crear panel juego
