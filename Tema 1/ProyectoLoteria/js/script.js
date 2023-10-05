window.onload = inicio;

const NUM_COLUMNAS = 6;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
const columnas = [];
const vectorColumnas = [];
let vectorCajas = [];
let v_numeros = [];
let contAciertos = 0;

function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnJugar = document.createElement("button");
  btnJugar.textContent = "SORTEO";
  cuerpo.appendChild(btnJugar);
  btnJugar.classList.add("disabledDiv");
  btnJugar.onclick = jugar;

  let btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  cuerpo.appendChild(btnReset);
  btnReset.onclick = reset;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    console.log("entro en for columnas");
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    let contRojos = 0;
    columnas.push(contenedorS);
    if (i != 0) {
      contenedorS.classList.add("disabledDiv");
    }

    for (let x = 0; x < NUM_CAJAS; x++) {
      console.log("entro en for cajas");
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;
      function marcar() {
        if (v_numeros.length < 6 && !v_numeros.includes(x + 1)) {
          console.log("Entro en marcar");
          vectorCajas.push(caja);
          console.log("Soy X " + (x + 1));
          v_numeros.push(x + 1);
          caja.style.backgroundColor = "red";
          contRojos++;
          if (contRojos == 6) {
            vectorColumnas.push(v_numeros);
            columnas[i].classList.add("disabledDiv");
            v_numeros = [];
            contRojos = 0;
            if (i == NUM_COLUMNAS - 1) {
              console.log("entro en poner boton");
              btnJugar.classList.remove("disabledDiv");
              btnReset.classList.add("disabledDiv");
            } else {
              columnas[i + 1].classList.remove("disabledDiv");
            }
          }
        } else {
          console.log("Entro en desmarcar");
          let number = parseInt(caja.textContent);
          caja.style.backgroundColor = "green";
          let position = v_numeros.indexOf(number);
          v_numeros.splice(position, 1);
          contRojos--;
        }
      }
    }
  }
}

function jugar() {
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.ceil(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    vectorN.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorSorteo.appendChild(box);
  }

  //vectorCajas.forEach(recorrido);
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "rgb(0,160,0)";
  contenedorSorteo.appendChild(resultado);
  console.log(vectorN);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (vectorColumnas[i][j] == vectorN[j]) {
        contAciertos++;
      }
    }
  }
  resultado.textContent = contAciertos;

  //   function recorrido(item, index) {

  //     vectorN.forEach(accion2);

  //     function accion2(item2, index2) {

  //       if (item.textContent == item2.textContent) {
  //         console.log(item.textContent);
  //         contAciertos++;

  //       }

  //     //  resultado.textContent = cont;
  //     }

  //   }

  // --------------------------

  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let i = 0; i < vectorColumnas.length; i++) {
    for (let j = 0; j < vectorColumnas[0].length; j++) {
      console.log(vectorColumnas);
      let box = document.createElement("div");
      box.className = "gallery2 div";
      box.textContent = vectorColumnas[i][j];
      box.style.backgroundColor = "yellow";
      contenedorBombo.appendChild(box);

      if (vectorN.includes(vectorColumnas[i][j])) {
        box.style.backgroundColor = "red";
      }
    }
    let boxGanadora = document.createElement("div");
    boxGanadora.className = "gallery2 div";
    boxGanadora.textContent = vectorN[vectorColumnas[i]];
    boxGanadora.style.backgroundColor = "green";
    contenedorBombo.appendChild(boxGanadora);
  }
}

function reset() {
  vectorCajas.forEach(accion1);

  function accion1(item, index) {
    item.style.backgroundColor = "green";
  }
  columnas = [];
  vectorCajas = [];
  vectorColumnas = [];
  v_numeros = [];
  inicio();
}
