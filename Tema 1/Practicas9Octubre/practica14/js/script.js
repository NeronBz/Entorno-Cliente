window.onload = inicio();

function inicio() {
  let imagenes = document.querySelectorAll("img");
  console.log(imagenes);

  let temporizador = setInterval(accion, 1000);

  function accion() {
    imagenes.forEach(function (item, indice) {
      bRandom = Math.round(Math.random() * 2) + 1;
      item.className = "borde" + bRandom;
    });
  }
}
