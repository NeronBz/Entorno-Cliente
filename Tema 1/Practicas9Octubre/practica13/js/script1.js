window.onload = inicio();

function inicio() {
  let enlaces = document.querySelectorAll("a");
  console.log(enlaces);

  var doe = 0;
  var dompt = 0;

  enlaces.forEach(accion);

  function accion(item, indice) {
    if (item.href.includes("doe")) {
      doe++;
      setInterval()
    }

    if (item.href.includes("pt")) {
      dompt++;
    }
  }
  console.log("Número de apariciones del doe: " + doe);
  console.log("Número de apariciones del doe portugués: " + dompt);
}
