window.onload = inicio;

function inicio() {
  let navegacion = document.querySelectorAll("nav ul li a");
  let teamDaw = ["Manuel", "Mario", "Mauro", "Álvaro", "Raúl"];
  let enlaceDaw = [
    "http://practicasmanuelbote.atwebpages.com",
    "http://raulblazquez.mywebcommunity.org",
    "http://practicasmanuelbote.atwebpages.com",
    "http://practicasmanuelbote.atwebpages.com",
    "http://practicasmanuelbote.atwebpages.com",
  ];
  let logo = document.querySelector("[href='#myPage']");
  let image = document.createElement("img");
  image.src = "img/apple-touch-icon.png";
  logo.appendChild(image);
  let nombre = document.querySelector("h1");
  nombre.textContent = "2ºDAW";

  let subtitulo = document.querySelector("div p");
  subtitulo.textContent = "Los pitbull del Javascript >:(";

  navegacion.forEach(accion);
  function accion(item, indice) {
    item.textContent = teamDaw[indice];
    item.setAttribute("target", "_blank");
    item.href = enlaceDaw[indice];
  }
}
