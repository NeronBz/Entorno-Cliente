window.onload = inicio;

let btn1 = document.getElementById("avanzar");
let btn2 = document.getElementById("avanzar2");
let cuerpo = document.querySelector("body");
const componentes = [];

function inicio() {
  let contenedorP = document.createElement("div");
  contenedorP.className = "container";
  let contenedorS = document.createElement("div");
  contenedorS.className = "gallery";
  contenedorP.appendChild(contenedorS);
  cuerpo.appendChild(contenedorP);

  crearCajas();

  function crearCajas() {
    for (let i = 0; i < 40; i++) {
      let caja = document.createElement("div");
      caja.className = "fondo";

      componentes.push(caja);
      contenedorS.appendChild(caja);
    }
    console.log(componentes);
  }
  btn1.onclick = avanzar;
  btn2.onclick = avanzar2;

  function avanzar() {
    btn1.disabled = true;
    btn2.disabled = false;
    var numeroCaja = 0;

    let contador1;
    contador1 = setInterval(cambioR, 100);

    function cambioR() {
      if (numeroCaja < componentes.length) {
        componentes[numeroCaja].style.backgroundColor = "red";
        if (numeroCaja > 0) {
          componentes[numeroCaja - 1].style.backgroundColor = "green";
        }
        numeroCaja++;
      } else {
        componentes[numeroCaja - 1].style.backgroundColor = "green";
        numeroCaja = 0;
      }
    }
  }
  function avanzar2() {
    btn1.disabled = false;
    btn2.disabled = true;
    var numCaja = 0;

    let contador2;
    contador2 = setInterval(cambioR, 100);
    function cambioR() {
      //   if ((componentes[numeroCaja].style.backgroundColor = "green")) {
      //     if (numeroCaja == componentes.length) {
      //       numeroCaja = 0;
      //     }
      //     componentes[numeroCaja].style.backgroundColor = "red";
      //   } else if ((componentes[numeroCaja].style.backgroundColor = "red")) {
      //     if (numeroCaja == componentes.length) {
      //       numeroCaja = 0;
      //     }
      //     componentes[numeroCaja].style.backgroundColor = "green";
      //   }
      //   numeroCaja++;

      if (componentes[numCaja].style.backgroundColor) {
      }
    }
  }
}
