window.addEventListener("load", inicio);

function inicio() {
  console.log("entro al inicio");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //Cogemos la lista y el div contenedor del DOM
      let contenedorIndices = document.querySelector(".carousel-indicators");
      let contenedorImagenes = document.querySelector(".carousel-inner");
      let contenedorCar = document.querySelector("#cajon");
      //Al hacer parse nos devuelve un objeto
      var arrayJson = JSON.parse(this.responseText);
      var nItems = String(arrayJson).length / 4;
      arrayJson.forEach(function (fotoCamacho, posicion) {
        //PARTE 1: LISTA OL
        //Creamos el elemento li de la lista para cada imagen
        let elemento = document.createElement("li");
        elemento.setAttribute("data-target", "#carouselId");
        elemento.setAttribute("data-slide-to", posicion);

        //Compruebo si es el primer li
        if (posicion == 0) {
          elemento.className = "active";
        }

        //Meto los li a la lista
        contenedorIndices.appendChild(elemento);

        //PARTE 2: DIV DE LA IMAGEN
        //Creamos el div que  va a tener las clases y la imagen
        let caja = document.createElement("div");

        //Compruebo si la caja es el primer item del carousel
        if (posicion == 0) {
          caja.className = "carousel-item active";
        } else {
          caja.className = "carousel-item";
        }

        //PARTE 3: IMAGEN
        //Creamos la imagen y le damos atributos

        let fila = document.createElement("row");

        let imag = document.createElement("img");
        imag.setAttribute("src", fotoCamacho.imagen);

        imag.style = "width:100%;height:30vh;";
        //crear texto para añadir nombre del empleado
        let nombre = document.createElement("span");
        nombre.textContent = fotoCamacho.nombre;

        //Meto la imagen en la caja y la caja en el contenedor
        caja.appendChild(imag);
        //  caja.appendChild(nombre);
        contenedorImagenes.appendChild(caja);

        let columna4 = document.createElement("div");
        columna4.className = "col-lg-4";
        let equipo = document.createElement("div");
        equipo.className = "equipo";

        let equipo_foto = document.createElement("div");
        equipo_foto.className = "equipo_foto";
        columna4.appendChild(equipo);
        equipo.appendChild(equipo_foto);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", fotoCamacho.imagen);
        equipo_foto.appendChild(imagen);

        let nombreEmpleado = document.createElement("h3");
        nombreEmpleado.innerHTML = fotoCamacho.nombre;
        equipo.appendChild(nombreEmpleado);

        let textoDireccion = document.createElement("div");
        textoDireccion.className = "equipo_texto";
        let spanDireccion = document.createElement("span");
        spanDireccion.innerHTML = fotoCamacho.spanDireccion;
        textoDireccion.appendChild(spanDireccion);

        contenedorCar.appendChild(columna4);
      });
    }
  };

  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php",
    true
  );
  xhr.send();
}
