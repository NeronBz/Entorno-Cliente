window.onload = inicio;
function inicio() {
  document
    .getElementById("btnInsertar")
    .addEventListener("click", insertarCiudades);
  document
    .getElementById("btnEliminar")
    .addEventListener("click", eliminarCiudades);
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
  cajaMostrarContenido.innerHTML = "";
  var bloqueHtml = document.createElement("div");
  bloqueHtml.innerHTML = "";
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
function eliminarCiudades() {
  var eliminacionC = prompt("¿Qué ciudad quieres eliminar?");
  alert(eliminacionC);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      objeto.forEach(recorrer);
      function recorrer(datos, index) {
        if (eliminacionC !== null && eliminacionC == datos.id) {
          console.log("entro en eliminar Ciudades");
          $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/ciudades/eliminarCiudades.php",
            type: "POST",
            data: {
              id: "",
              nombre: "",
              poblacion: "",
              densidad: "",
              superficie: "",
            },
          });
        }
      }
    }
  }
  xhr.open(
    "POST",
    "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php"
  );
  xhr.send();
}
