window.onload = inicio;

var cuerpo = document.querySelector("body");

function inicio() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      let contadorPA = 0;
      let contadorPB = 0;
      let contadorPC = 0;
      let contadorPD = 0;
      let provinciaPA = [];
      let provinciaPB = [];
      let provinciaPC = [];
      let provinciaPD = [];
      let totalA = 0;
      let totalB = 0;
      let totalC = 0;
      let totalD = 0;
      let puesto1;
      let puesto2;
      let puesto3;
      let puesto4;

      objeto.forEach(recorrer);

      function recorrer(partidos, index) {
        if (
          partidos.votosPA > partidos.votosPB &&
          partidos.votosPA > partidos.votosPC &&
          partidos.votosPA > partidos.votosPD
        ) {
          contadorPA = contadorPA + parseInt(partidos.Representantes);
          provinciaPA.push(partidos.nombreProvincia);
          totalA += parseInt(partidos.votosPA);
          console.log(partidos.votosPA);
        } else if (
          partidos.votosPB > partidos.votosPA &&
          partidos.votosPB > partidos.votosPC &&
          partidos.votosPB > partidos.votosPD
        ) {
          contadorPB = contadorPB + parseInt(partidos.Representantes);
          provinciaPB.push(partidos.nombreProvincia);
          totalB += parseInt(partidos.votosPB);
        } else if (
          partidos.votosPC > partidos.votosPA &&
          partidos.votosPC > partidos.votosPB &&
          partidos.votosPC > partidos.votosPD
        ) {
          contadorPC = contadorPC + parseInt(partidos.Representantes);
          provinciaPC.push(partidos.nombreProvincia);
          totalC += parseInt(partidos.votosPC);
        } else if (
          partidos.votosPD > partidos.votosPA &&
          partidos.votosPD > partidos.votosPB &&
          partidos.votosPD > partidos.votosPC
        ) {
          contadorPD = contadorPD + parseInt(partidos.Representantes);
          provinciaPD.push(partidos.nombreProvincia);
          totalD += parseInt(partidos.votosPD);
        }
      }

      cuerpo.innerHTML =
        "<label>Apartado A</label>" +
        "<p>Partido A: " +
        contadorPA +
        "</p>" +
        "<p>Partido B: " +
        contadorPB +
        "</p>" +
        "<p>Partido C: " +
        contadorPC +
        "</p>" +
        "<p>Partido D: " +
        contadorPD +
        "</p>";

      cuerpo.innerHTML +=
        "<label>Apartado B</label>" +
        "<p>Partido A: " +
        provinciaPA +
        "</p>" +
        "<p>Partido B: " +
        provinciaPB +
        "</p>" +
        "<p>Partido C: " +
        provinciaPC +
        "</p>" +
        "<p>Partido D: " +
        provinciaPD +
        "</p>";

      cuerpo.innerHTML +=
        "<label>Apartado C</label>" +
        "<p>Partido A: " +
        totalA +
        "</p>" +
        "<p>Partido B: " +
        totalB +
        "</p>" +
        "<p>Partido C: " +
        totalC +
        "</p>" +
        "<p>Partido D: " +
        totalD +
        "</p>";
    }
  };

  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",
    true
  );
  xhr.send();
}
