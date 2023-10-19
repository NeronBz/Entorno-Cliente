document.getElementById("cargar").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita la recarga de la página

  // Recopila los datos del formulario
  var ciclo = document.querySelector('input[name="radio"]:checked').value;
  var mElementos = document.querySelectorAll('input[name="modulos"]:checked');
  var modulos = "";
  for (var i = 0; i < mElementos.length; i++) {
    if (i > 0) {
      modulos += ", ";
    }
    modulos += mElementos[i].value;
  }
  var curso = document.getElementById("selectCurso").value;
  var nombre = document.getElementById("nombre").value;

  // Muestra los datos en un alert
  var mensaje =
    "Ciclo: " +
    ciclo +
    "\n" +
    "Módulos: " +
    modulos +
    "\n" +
    "Curso: " +
    curso +
    "\n" +
    "Nombre: " +
    nombre;

  alert(mensaje);
});
