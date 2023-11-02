window.addEventListener("load", inicio);
function inicio() {
  var contador = 0;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      let contenedor = document.querySelector("tbody");

      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      if (contador !== undefined && contador < objeto.length) {
        console.log("entro en el if");
        var etiquetaCiudad = document.createElement("td");
        etiquetaCiudad.textContent = objeto[contador].ciudad_nombre;

        var etiquetaHabitantes = document.createElement("td");
        etiquetaHabitantes.textContent = objeto[contador].ciudad_poblacion;

        var etiquetaVideo = document.createElement("td");
        etiquetaVideo.textContent = objeto[contador].video;

        var etiquetaImagen = document.createElement("td");
        etiquetaImagen.textContent = objeto[contador].imagen;

        var etiquetaMapa = document.createElement("td");
        etiquetaMapa.textContent = objeto[contador].mapa;

        var etiquetaId = document.createElement("td");
        etiquetaId.textContent = objeto[contador].ciudad_ID;

        contenedor.appendChild(etiquetaCiudad);
        contenedor.appendChild(etiquetaHabitantes);
        contenedor.appendChild(etiquetaVideo);
        contenedor.appendChild(etiquetaImagen);
        contenedor.appendChild(etiquetaMapa);
        contenedor.appendChild(etiquetaId);

        contador++;
      }
    }
  };

  xhr.open(
    "GET",
    "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php",
    true
  );
  xhr.send();
}
