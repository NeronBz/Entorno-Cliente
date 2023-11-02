window.addEventListener("load", inicio);
function inicio() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      let contenedor = document.getElementById("cajaX");

      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      for (let i = 0; i < objeto.length; i++) {
        let divX = document.createElement("div");
        divX.style.border = "1px solid black";

        let imagen = document.createElement("img");
        imagen.setAttribute("src", objeto[i].imagen);
        imagen.width = 300;
        imagen.height = 200;

        let texto = document.createElement("p");
        texto.textContent = objeto[i].texto;

        let subtexto = document.createElement("p");
        subtexto.textContent = objeto[i].subtexto;
        subtexto.style.float = "left";

        let spActivo = document.createElement("span");
        spActivo.textContent = objeto[i].activo + "mins";
        spActivo.style.float = "right";

        contenedor.appendChild(divX);
        divX.appendChild(imagen);
        divX.appendChild(texto);
        divX.appendChild(subtexto);
        divX.appendChild(spActivo);
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
