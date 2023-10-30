/*MOSTRAR con javascript CONTENIDOS DE FORMA ASÍNCRONA DE UN FICHERO SITUADO EN UN SERVIDOR */
window.addEventListener("load", inicio);
function inicio() {
  let btnMostrar = document.getElementById("mostrar");
  btnMostrar.addEventListener("click", mostrar);
}
function mostrar() {
  /*XMLHttpRequest es un objeto nativo del navegador que permite hacer solicitudes HTTP desde JavaScript*/
  var xhr = new XMLHttpRequest();

  /*define una función que será llamada automáticamente cada vez que cambie su propiedad readystate*/

  xhr.onreadystatechange = cargar;
  function cargar() {
    /*readyState: contiene un valor numérico que representa la situación de intercambio de datos a través del objeto.*/

    /*status: código numérico devuelto por el servidor. Indica tipo de respuesta a la petición*/

    if (this.readyState == 4 && this.status == 200) {
      /*respuesta del servidor en formato de texto*/

      var objeto = JSON.parse(this.responseText);
      let idFila = document.querySelector("#fila");
      objeto.forEach(recorrer);
      function recorrer(item, index) {
        console.log(item.url);
        let divX = document.createElement("div");
        divX.innerHTML = "";
        divX.className = "col-lg-3";
        divX.innerHTML =
          "<video src='" +
          item.url +
          "' width='200' height='100'" +
          "autoplay loop> </video>";
        idFila.appendChild(divX);
      }
    }
  }
  /* .open: especifica la solicitud
             - GET/POST.
             - Archivo: txt, php, xml, json, etc.
             - true/false: método de envío. */

  xhr.open("GET", "../getWebcam.json", true);

  /* .send: envía la solicitud al servidor.
       Si utilizamos POST debemos pasar los datos por parámetro */

  xhr.send();
}
