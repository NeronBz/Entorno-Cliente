window.addEventListener("load", inicio);
function inicio() {
  metodo();
  tiempo = setInterval(metodo, 5000);
  var etiquetaVideo;
  var etiquetaId = document.createElement("span");
  etiquetaId.className = "contenedor";

  function metodo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);
        var nRandom = Math.floor(Math.random() * 7);

        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "";

        etiquetaVideo = document.createElement("video");
        contenedor.appendChild(etiquetaId);
        etiquetaId.innerHTML = objeto[nRandom].id;

        etiquetaVideo.setAttribute("src", objeto[nRandom].url);
        etiquetaVideo.setAttribute("autoplay", true);

        contenedor.appendChild(etiquetaVideo);
      }
    };

    xhr.open("GET", "../getWebcam.json", true);
    xhr.send();
  }
}
