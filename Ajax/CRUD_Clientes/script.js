window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");
function inicio() {
  let btn = document.querySelector("#btnAdd");
  btn.addEventListener("click", insertarUsuario);
  cargarTabla();
}
function cargarTabla() {
  bloqueHtml.innerHTML =
    "<div class='row'>" +
    "<div class='col-lg-2 text-center' >DNI</div>" +
    "<div class='col-lg-2 text-center' >NOMBRE</div>" +
    "<div class='col-lg-2 text-center' >APELLIDO</div>" +
    "<div class='col-lg-2 text-center' >TELEFONO</div>" +
    "<div class='col-lg-2 text-center' >ELIMINAR</div>" +
    "<div class='col-lg-2 text-center' >MODIFICAR</div></div>";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;
  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      objeto.forEach(recorrer);
      function recorrer(datos, index) {
        let vector = [datos.dni, datos.nombre, datos.apellido, datos.telefono];
        bloqueHtml.innerHTML +=
          "<tr>" +
          "<td>" +
          datos.dni +
          "</td>" +
          "<td>" +
          datos.nombre +
          "</td>" +
          "<td>" +
          datos.apellido +
          "</td>" +
          "<td>" +
          datos.telefono +
          "</td>" +
          //Simular botón con a href, añado clase btn btn-danger(color rojo)
          "<td><a class='btn btn-danger btn-md'" +
          //anulo el href, no hay link, pero sí hay evento onclick
          //con parámetro incluido: dni de esa tupla
          "href=' javascript:void(0)' onclick=eliminar('" +
          datos.dni +
          "')>" +
          //texto del botón e icono
          "Eliminar<span class='glyphicon glyphicon-trash'></span></a></td>" +
          //td del modificar
          "<td><a class='btn btn-info btn-md' " +
          "href='javascript:void(0)' onclick=modificar(" +
          vector +
          ")</td>" +
          "Modificar<span class='glyphicon glyphicon-pencil'></span></a></td></tr>";
      }
    }
  }
  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php",
    true
  );
  xhr.send();
  tabla.appendChild(bloqueHtml);
}
function insertarUsuario() {}
function eliminarUsuario() {}
