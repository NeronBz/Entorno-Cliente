window.addEventListener("load", inicio);

function inicio() {
  console.log("entro al inicio");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let contenedor = document.getElementById("contenedor");
      let lista = document.getElementById("lista");
      var arrayJson = JSON.parse(this.responseText);

      arrayJson.forEach(function (ciudad, posicion) {
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

        //PARTE 3: Crear
        //Creamos el video y le damos atributos
        let video = document.createElement("div");
        video.innerHTML = ciudad.video;

        //Creo el nombre
        let _nombre = document.createElement("h1");
        _nombre.textContent = ciudad.ciudad_nombre;

        //Creo la imagen
        let _img = document.createElement("img");
        _img.setAttribute("src", ciudad.imagen);
        _img.style = "width:100%;height:50vh;";

        //Meto la imagen en la caja y la caja en el contenedor
        caja.appendChild(video);
        caja.appendChild(_nombre);
        caja.appendChild(_img);
        contenedor.appendChild(caja);
      });
    }
  };

  xhr.open(
    "POST",
    "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php",
    true
  );
  xhr.send();
}
