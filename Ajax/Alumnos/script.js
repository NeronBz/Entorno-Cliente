window.onload = inicio;

let nombreNotaMedia = "";
let nAprobados = 0;
let mismaNota = 0;
let ninosConSuerte = 0;

let container = document.querySelector(".container");
function inicio() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      objeto.forEach(recorrer);

      function recorrer(datos, index) {
        let notaMedia =
          (parseInt(datos.nota1) +
            parseInt(datos.nota2) +
            parseInt(datos.nota3)) /
          3;
        let mayor = -1;

        if (notaMedia > mayor) {
          mayor = notaMedia;
          nombreNotaMedia = datos.alumno;
        }

        if (
          parseInt(datos.nota1) >= 5 &&
          parseInt(datos.nota2) >= 5 &&
          parseInt(datos.nota3) >= 5
        ) {
          nAprobados++;
        }

        if (
          parseInt(datos.nota1) == parseInt(datos.nota2) &&
          parseInt(datos.nota1) == parseInt(datos.nota3)
        ) {
          mismaNota++;
        }

        if (
          (parseInt(datos.nota1) < 5 ||
            parseInt(datos.nota2) < 5 ||
            parseInt(datos.nota3) < 5) &&
          notaMedia >= 5
        ) {
          ninosConSuerte++;
        }
        container.innerHTML = "<div>" + "<p>" + nombreNotaMedia + "</p></div>";
        container.innerHTML += "<div>" + "<p>" + nAprobados + "</p></div>";
        container.innerHTML += "<div>" + "<p>" + mismaNota + "</p></div>";
        container.innerHTML += "<div>" + "<p>" + ninosConSuerte + "</p></div>";
      }
      //   for (let i = 0; i < PARTIDOS.length; i++) {
      //     caja1.innerHTML +=
      //       PARTIDOS[i] +
      //       ": " +
      //       VOTOSTOTALES[i] +
      //       " votos totales" +
      //       "</br>" +
      //       "Representantes: " +
      //       PROVINCIAS[i] +
      //       "</br>" +
      //       "Provincias ganadas: " +
      //       NOMBREPROVINCIASGANADAS[i] +
      //       "</br>";
      //   }
    }
  };

  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php",
    true
  );
  xhr.send();
}
