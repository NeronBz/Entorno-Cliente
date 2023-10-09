window.onload = inicio();

function inicio() {
  let imagenes = document.querySelectorAll("img");
  console.log(imagenes);

  let temporizador = setInterval(accion, 1000);

  function accion() {
    imagenes.forEach(function (item, indice) {
      bRandom = Math.round(Math.random() * 2) + 1;
      imgR = Math.round(Math.random() * 4) + 1;
      item.src = "img/img" + imgR + ".jpg";
      item.className = "borde" + bRandom;
    });
  }
}
