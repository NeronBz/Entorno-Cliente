window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");
function inicio() {
  cargarTabla();
  let btn = document.querySelector("#btnAdd");
  btn.addEventListener("click", modal);
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
          "<div class='row'>" +
          "<div class='col-lg-2 text-center' >" +
          datos.dni +
          "</div>" +
          "<div class='col-lg-2 text-center' >" +
          datos.nombre +
          "</div>" +
          "<div class='col-lg-2 text-center' >" +
          datos.apellido +
          "</div>" +
          "<div class='col-lg-2 text-center' >" +
          datos.telefono +
          "</div>" +
          //Simular botón con a href, añado clase btn btn-danger(color rojo)
          "<div class='col-lg-2 text-center' ><a class='btn btn-danger btn-md'" +
          //anulo el href, no hay link, pero sí hay evento onclick
          //con parámetro incluido: dni de esa tupla
          "href=' javascript:void(0)' onclick=eliminar('" +
          datos.dni +
          "')>" +
          //texto del botón e icono
          "Eliminar<span class='glyphicon glyphicon-trash'></span></a></div>" +
          //td del modificar
          "<div class='col-lg-2 text-center' ><a class='btn btn-info btn-md' " +
          "href='javascript:void(0)' onclick=modificar('" +
          vector.join("', '") +
          "')</div>" +
          "Modificar<span class='glyphicon glyphicon-pencil'></span></a></div></div>";
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
function modal() {
  let btnInsertar = document.querySelector('button[name="insertar"]');
  btnInsertar.addEventListener("click", insertar);
  let btnModificar = document.querySelector(".btn-info");
  btnModificar.addEventListener("click", modificar);
}
function insertar() {
  console.log("entro en insertar clientes");
  var dni = document.querySelector("#txtDni").value;
  var nombre = document.querySelector("#txtNombre").value;
  var apellido = document.querySelector("#txtApellidos").value;
  var telefono = document.querySelector("#txtTelefono").value;
  $.ajax({
    url: "http:///moralo.atwebpages.com/menuAjax/clientes/insertarClientes.php",
    type: "POST",
    data: {
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    },
  });

  // Limpiar los campos del modal después de la inserción
  document.querySelector("#txtDni").value = "";
  document.querySelector("#txtNombre").value = "";
  document.querySelector("#txtApellidos").value = "";
  document.querySelector("#txtTelefono").value = "";
}
function modificar(dni, nombre, apellido, telefono) {
  console.log("entro en modificar clientes");
  var dni = document.querySelector("#txtDni").value;
  var nombre = document.querySelector("#txtNombre").value;
  var apellido = document.querySelector("#txtApellidos").value;
  var telefono = document.querySelector("#txtTelefono").value;
  $.ajax({
    url: "http:///moralo.atwebpages.com/menuAjax/clientes/modificarClientes.php",
    type: "POST",
    data: {
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    },
  });
}
function eliminar(dni) {
  console.log("entro en eliminar clientes");
  var dni = document.querySelector("#txtDni").value;
  $.ajax({
    url: "http:///moralo.atwebpages.com/menuAjax/clientes/eliminarClientes.php",
    type: "POST",
    data: {
      dni: dni,
    },
  });
}
