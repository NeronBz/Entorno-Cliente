window.onload = inicio;
function inicio() {
  document
    .getElementById("btnInsertar")
    .addEventListener("click", insertarCiudades);
}
function insertarCiudades() {
  console.log("entro en insertar Ciudades");
  var id = document.querySelector("#_id").value;
  var nombre = document.querySelector("#_nombre").value;
  var poblacion = document.querySelector("#_poblacion").value;
  var densidad = document.querySelector("#_densidad").value;
  var superficie = document.querySelector("#_superficie").value;
  $.ajax({
    url: "http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php",
    type: "POST",
    data: {
      id: id,
      nombre: nombre,
      poblacion: poblacion,
      densidad: densidad,
      superficie: superficie,
    },
  });

  mostrar();
}
function mostrar() {
  var cajaMostrarContenido = document.querySelector("#mostrarCiudades");
  var bloqueHtml = document.createElement("div");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      objeto.forEach(recorrer);
      function recorrer(datos, index) {
        bloqueHtml.innerHTML +=
          "<div class='row'>" +
          "<div class='col-lg-2'>" +
          datos.id +
          "</div>" +
          "<div class='col-lg-2'>" +
          datos.nombre +
          "</div>" +
          "<div class='col-lg-2'>" +
          datos.poblacion +
          "</div>" +
          "<div class='col-lg-2'>" +
          datos.densidad +
          "</div>" +
          "<div class='col-lg-2'>" +
          datos.extension +
          "</div></div";
      }
      cajaMostrarContenido.appendChild(bloqueHtml);
    }
  }
  xhr.open(
    "POST",
    "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php"
  );
  xhr.send();
}
