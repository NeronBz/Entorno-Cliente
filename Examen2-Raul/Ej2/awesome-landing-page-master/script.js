window.addEventListener("load", inicio);

function inicio() {
  console.log("entro al inicio");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //Cogemos la lista y el div contenedor del DOM
      let contenedorIndices = document.querySelector("#carrusel");
      let contenedorImagenes = document.querySelector("#carrusel-inner");
      //Al hacer parse nos devuelve un objeto
      var arrayJson = JSON.parse(this.responseText);

      arrayJson.forEach(function (empleados, posicion) {
        //PARTE 1: LISTA OL
        //Creamos el elemento li de la lista para cada imagen
        let elemento = document.createElement("li");
        elemento.setAttribute("data-target", "#carousel-example-generic");
        elemento.setAttribute("data-slide-to", posicion);

        //Compruebo si es el primer li
        if (posicion == 0) {
          elemento.className = "active";
        }
        //Meto los li a la lista
        contenedorIndices.appendChild(elemento);

        //PARTE 2: DIV DE LA IMAGEN
        //Creamos el div que  va a tener las clases y la imagen

        var caja = document.createElement("div");

        //Compruebo si la caja es el primer item del carousel
        if (posicion == 0) {
          caja.className = "item active";
        } else {
          caja.className = "item";
        }
        //PARTE 3: IMAGEN
        //Creamos la imagen y le damos atributos
        let columna = document.createElement("div");
        columna.className = "mask";
        let imagenX = document.createElement("img");
        imagenX.setAttribute("src", empleados.imagen);
        columna.appendChild(imagenX);
        caja.appendChild(columna);

        //Creamos el último div
        let testimonial = document.createElement("div");
        testimonial.className = "carousel-testimonial-caption";
        let parrafo = document.createElement("h3");
        parrafo.textContent = empleados.nombre;
        let parrafo2 = document.createElement("p");
        parrafo2.textContent = empleados.cargo;
        let direction = document.createElement("p");
        direction.textContent = empleados.direccion;
        testimonial.appendChild(parrafo);
        testimonial.appendChild(parrafo2);
        testimonial.appendChild(direction);
        caja.appendChild(testimonial);
        contenedorImagenes.appendChild(caja);
      });
    }
  };

  xhr.open(
    "POST",
    "http://moralo.atwebpages.com/Empleados/getEmpleados.php",
    true
  );
  xhr.send();
}
