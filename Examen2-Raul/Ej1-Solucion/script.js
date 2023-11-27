window.onload = inicio;

const PARTIDOS = ["Partido A", "Partido B", "Partido C", "Partido D"];
const PROVINCIAS = [0, 0, 0, 0];
const VOTOSTOTALES = [0, 0, 0, 0];
const NOMBREPROVINCIASGANADAS = ["", "", "", ""];
let representantes = [];

let caja1 = document.querySelector(".caja1");
let caja2 = document.querySelector(".caja2");
let caja3 = document.querySelector(".caja3");

function inicio() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      objeto.forEach(recorrer);

      function recorrer(datos, index) {
        let prov = [
          parseInt(datos.votosPA),
          parseInt(datos.votosPB),
          parseInt(datos.votosPC),
          parseInt(datos.votosPD),
        ];
        let mayor = -1;
        let pos = -1;
        for (let i = 0; i < prov.length; i++) {
          if (prov[i] > mayor) {
            mayor = prov[i];
            pos = i;
          }
          VOTOSTOTALES[i] += prov[i];
        }
        PROVINCIAS[pos] += parseInt(datos.Representantes);
        NOMBREPROVINCIASGANADAS[pos] += datos.nombreProvincia + ",";
      }
      for (let i = 0; i < PARTIDOS.length; i++) {
        caja1.innerHTML +=
          PARTIDOS[i] +
          ": " +
          VOTOSTOTALES[i] +
          " votos totales" +
          "</br>" +
          "Representantes: " +
          PROVINCIAS[i] +
          "</br>" +
          "Provincias ganadas: " +
          NOMBREPROVINCIASGANADAS[i] +
          "</br>";
      }
    }
  };

  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",
    true
  );
  xhr.send();
}
