window.addEventListener("load", inicio);
function inicio() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      var contenedor = document.getElementById("contenedor");
      contenedor.classList.add("carousel-inner");
      var indicadores = document.getElementById("lista");
      var cItem = document.createElement("div");
      cItem.classList.add("carousel-item");
      var cCaption = document.createElement("div");
      cCaption.classList.add("carousel-caption");
      contenedor.appendChild(cItem);
      contenedor.appendChild(cCaption);

      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      for (let i = 0; i < objeto.length; i++) {
        let lis = document.createElement("li");
        lis.setAttribute("data-target", "#myCarousel");
        lis.setAttribute("data-slide-to", i);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", objeto[i].imagen);
        imagen.classList.add("d-block", "w-100");
        imagen.height = 500;

        indicadores.appendChild(lis);
        contenedor.appendChild(cItem);
        contenedor.appendChild(cCaption);
        cItem.appendChild(imagen);
        cCaption.appendChild(enunciado);
        cCaption.appendChild(texto);
      }
    }
  };

  xhr.open(
    "GET",
    "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php",
    true
  );
  xhr.send();
}
