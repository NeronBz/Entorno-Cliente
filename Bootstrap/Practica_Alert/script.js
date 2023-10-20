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
  var sElement = document.getElementById("exampleFormControlSelect2");
  var sOptions = sElement.sOptions;
  var example = "";
  for (var i = 0; i < sOptions.length; i++) {
    if (i > 0) {
      example += ", ";
    }
    example += sOptions[i].value;
  }
  var txtArea = document.getElementById("exampleFormControlTextarea1").value;

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
    nombre +
    "\n" +
    "Example1: " +
    example +
    "\n" +
    "Textarea: " +
    txtArea +
    "\n";

  alert(mensaje);
});
