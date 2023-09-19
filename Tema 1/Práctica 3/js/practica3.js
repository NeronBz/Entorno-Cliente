window.onload = inicio;
function inicio() {
  var intervalo1;
  var intervalo2;
  var intervalo3;
  let posicion;
  let posicion2;
  let contador = 0;

  console.log("estoy en js");
  document.getElementById("btn1").addEventListener("click", funcion1);
  document.getElementById("btn2").addEventListener("click", funcion2);
  document.getElementById("btn3").addEventListener("click", funcion3);
  document.getElementById("btn4").addEventListener("click", funcion4);
  document.getElementById("btn5").addEventListener("click", funcion5);
  document.getElementById("btn6").addEventListener("click", funcion6);
  document.getElementById("btn7").addEventListener("click", funcion7);
  document.getElementById("btn8").addEventListener("click", funcion8);
  document.getElementById("btn9").addEventListener("click", funcion9);

  function funcion1() {
    console.log("entro en función");
    let numeroRandom = Math.round(Math.random() * 100);

    const coleccion = document.getElementsByClassName("caja");
    console.log(coleccion);
    for (let item of coleccion) {
      console.log(item);
      item.textContent = Math.round(Math.random() * 100);
    }
  }

  function funcion2() {
    console.log("entro en funcion2");

    let coleccion2 = document.getElementsByClassName("caja");
    console.log(coleccion2);
    let numero = 1;
    for (let item of coleccion2) {
      item.textContent = prompt("Teclea un número de la caja " + numero);
      numero++;
    }
  }

  function funcion3() {
    console.log("entro en función3");

    const coleccion3 = document.getElementsByClassName("caja");
    intervalo1 = setInterval(accionRandom, 1000);
    function accionRandom() {
      for (let item of coleccion3) {
        item.textContent = Math.round(Math.random() * 100);
      }
    }
  }

  function funcion4() {
    console.log("entro en funcion4");
    let vectorCajas = document.getElementsByClassName("caja");
    vectorColores = ["Red", "Green", "Yellow", "Orange", "Pink"];
    intervalo2 = setInterval(cambioColores, 1000);
    function cambioColores() {
      for (let item of vectorCajas) {
        let posicion = Math.round(Math.random() * 5);
        item.style.backgroundColor = vectorColores[posicion];
      }
    }
  }

  function funcion5() {
    clearInterval(intervalo1);
    clearInterval(intervalo2);
  }

  function funcion6() {
    let btn6 = document.getElementById("btn6");
    btn6.disabled = true;

    let reloj = document.getElementById("c1");
    let segundos = 10;
    let countdown = setInterval(cuentaAtras, 1000);

    function cuentaAtras() {
      reloj.textContent = segundos;

      if (segundos == 0) {
        btn6.disabled = false;
        clearInterval(countdown);
      }
      segundos--;
    }
  }

  function funcion7() {
    let vectorCajas = document.getElementById("c1");
    vectorColores = ["Red", "Green", "Yellow", "Orange", "Pink"];
    let vectorCajas2 = document.getElementById("c2");

    intervalo3 = setInterval(cambioColores2, 500);
    function cambioColores2() {
      posicion = Math.round(Math.random() * 5);
      vectorCajas.style.backgroundColor = vectorColores[posicion];

      posicion2 = Math.round(Math.random() * 5);
      vectorCajas2.style.backgroundColor = vectorColores[posicion2];
    }

    let reloj = document.getElementById("c4");
    let segundos = 30;
    let countdown = setInterval(cuentaAtras, 1000);

    function cuentaAtras() {
      reloj.textContent = "Tiempo restante: " + segundos;

      if (segundos == 0) {
        clearInterval(countdown);
      }
      segundos--;
    }
  }

  function funcion8() {
    if (posicion == posicion2) {
      contador++;
    } else {
      contador--;
    }
    let item = document.getElementById("c3");
    item.textContent = "La puntuación es de: " + contador;
  }
  function funcion9() {}
}
