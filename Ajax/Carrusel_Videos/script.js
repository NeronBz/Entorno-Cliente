window.addEventListener("load", inicio);

function inicio() {
  console.log("entro al inicio");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let contenedor = document.getElementById("contenedor");
      let lista = document.getElementById("lista");
      var arrayJson = JSON.parse(this.responseText);

      arrayJson.forEach(function (fotoCamacho, posicion) {
        let elemento = document.createElement("li");
        elemento.setAttribute("data-target", "#myCarousel");
        elemento.setAttribute("data-slide-to", posicion);

        //Compruebo si es el primer li
        if (posicion == 0) {
          elemento.className = "active";
        }

        //Meto los li a la lista
        lista.appendChild(elemento);

        //PARTE 2: DIV DE LA IMAGEN
        //Creamos el div que va a tener las clases y la imagen
        let caja = document.createElement("div");

        //Compruebo si la caja es el primer item del carousel
        if (posicion == 0) {
          caja.className = "item active";
        } else {
          caja.className = "item";
        }

        //PARTE 3: IMAGEN
        //Creamos la imagen y le damos atributos
        let video = document.createElement("video");
        video.setAttribute("src", fotoCamacho.url);
        video.setAttribute("autoplay", true);
        video.setAttribute("loop", true);
        video.style = "width:100%;height:50vh;";

        //Meto la imagen en la caja y la caja en el contenedor
        caja.appendChild(video);
        contenedor.appendChild(caja);
      });
    }
  };

  xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
  xhr.send();
}
