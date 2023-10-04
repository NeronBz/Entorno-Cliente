window.onload = inicio;
console.log("entro en inicio");

btn1 = document.getElementById("jugar");
puntos = document.getElementById("spspuntos");
puntos2 = document.getElementById("spspuntos2");
cajaP = document.getElementById("cajaPadre");

function inicio() {
  let numeroRandom;
  const array = [];
  const carpeta = "img/";

  btn1.onclick = cargar;
  function cargar() {
    console.log("entro en cargar");
    cajaP.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      numeroRandom = Math.round(Math.random() * 18) + 1;
      array[i] = numeroRandom;
      const img = document.createElement("img");
      img.src = carpeta + numeroRandom + ".JPG";
      cajaP.appendChild(img);
    }
    comprobar();
  }

  function comprobar() {
    console.log("entro en comprobar");
    let repeticion = document.createElement("label");
    cajaP.appendChild(repeticion);
    if (
      array[1] == array[2] ||
      array[1] == array[3] ||
      array[1] == array[4] ||
      array[1] == array[5]
    ) {
      repeticion.textContent = "Hay repetidas";
    } else if (
      array[2] == array[1] ||
      array[2] == array[3] ||
      array[2] == array[4] ||
      array[2] == array[5]
    ) {
      repeticion.textContent = "Hay repetidas";
    } else if (
      array[3] == array[2] ||
      array[3] == array[1] ||
      array[3] == array[4] ||
      array[3] == array[5]
    ) {
      repeticion.textContent = "Hay repetidas";
    } else if (
      array[4] == array[2] ||
      array[4] == array[3] ||
      array[4] == array[1] ||
      array[4] == array[5]
    ) {
      repeticion.textContent = "Hay repetidas";
    } else if (
      array[5] == array[1] ||
      array[5] == array[2] ||
      array[5] == array[3] ||
      array[5] == array[4]
    ) {
      repeticion.textContent = "Hay repetidas";
    } else {
      repeticion.textContent = "No hay repetidas";
    }
  }
}
