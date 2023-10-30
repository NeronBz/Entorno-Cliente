window.addEventListener("load", inicio);
function inicio() {
  metodo();
  tiempo = setInterval(metodo, 5000);
  var etiquetaVideo;
  var etiquetaId = document.createElement("span");
  etiquetaId.className = "contenedor";
  var contador = 0;

  function metodo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);

        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "";

        etiquetaVideo = document.createElement("video");
        contenedor.appendChild(etiquetaId);
        etiquetaId.innerHTML = objeto[contador].id;

        etiquetaVideo.setAttribute("src", objeto[contador].url);
        etiquetaVideo.setAttribute("autoplay", true);

        contenedor.appendChild(etiquetaVideo);

        if (contador == objeto.length - 1) {
          contador = 0;
        } else {
          contador++;
        }
      }
    };

    xhr.open("GET", "../getWebcam.json", true);
    xhr.send();
  }
}
