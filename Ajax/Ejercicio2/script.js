window.addEventListener("load", inicio);
function inicio() {
  var contador = 0;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      let contenedor = document.getElementById("lunch");

      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      for (let i = 0; i < objeto.length; i++) {
        let divX = document.createElement("div");
        divX.classList.add("col-lg-4", "menu-item");

        let tagA = document.createElement("a");
        tagA.setAttribute("href", objeto[i].imagen);
        tagA.classList.add("glightbox");

        let imagen = document.createElement("img");
        imagen.setAttribute("src", objeto[i].imagen);
        imagen.classList.add("menu-img", "img-fluid");

        let nombre = document.createElement("h4");
        nombre.textContent = objeto[i].nombre;

        let ingredientes = document.createElement("p");
        ingredientes.classList.add("ingredients");
        ingredientes.textContent = objeto[i].ingredientes;

        let precio = document.createElement("p");
        precio.classList.add("price");
        precio.textContent = objeto[i].precio;

        contenedor.appendChild(divX);
        divX.appendChild(imagen);
        divX.appendChild(nombre);
        divX.appendChild(ingredientes);
        divX.appendChild(precio);
      }
    }
  };

  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/restaurante/getPlatos.php",
    true
  );
  xhr.send();
}
