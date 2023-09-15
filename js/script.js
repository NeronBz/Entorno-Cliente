window.onload = inicio;
function inicio() {
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
    let numero1 = Math.round(Math.random() * 100);
    document.getElementById("c1").innerText = numero1;
    document.getElementById("c1").style.backgroundColor = "Green";
    let caja1 = document.getElementById("c1");
    with (document.getElementById("c1")) {
      innerText = numero1;
      style.backgroundColor = "Green";
      style.color = "Red";
      style.fontSize = "23px";
    }
  }

  function funcion2() {
    const colores = ["Red", "Green", "Yellow", "Blue", "Orange"];
    let indice = Math.round(Math.random() * 4);
    let caja2 = document.getElementById("c2");
    caja2.style.backgroundColor = colores[indice];
  }

  function funcion3() {
    let caja3 = document.getElementById("c3");
    numero1 = prompt("Teclee un número");
    numero2 = prompt("Teclee otro número");
    let suma = parseInt(numero1) + parseInt(numero2);
    caja3.textContent = suma;
    caja3.style.backgroundColor = "Red";
  }

  function funcion4() {
    let caja4 = document.getElementById("c4");
    let numGanador = Math.round(Math.random() * 10);
    let fin = true;
    let contador = 0;

    while (fin) {
      let num = prompt("Teclee un número entre 1-10");
      contador++;
      if (num == numGanador) {
        fin = false;
        alert("Has acertado");
      }
    }
    caja4.textContent = "Intentos: " + contador;
    caja4.style.backgroundColor = "Green";
  }

  function funcion5() {
    let caja5 = document.getElementById("c5");
    let numGanador = Math.round(Math.random() * 10);
    let fin = true;
    let contador = 0;

    while (fin) {
      let num = prompt("Teclee un número entre 1-10");
      contador++;
      if (num == numGanador) {
        fin = false;
        alert("Has acertado");
      } else {
        if (num < numGanador) {
          alert("El número es más alto");
        } else {
          alert("El número es más bajo");
        }
      }
    }
  }

  function funcion6() {
    const fecha = new Date();
    document.getElementById("c5").innerText = fecha.getFullYear();
  }

  function funcion7() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minuto = fecha.getMinutes();

    document.getElementById("c6").innerText =
      hora + ":" + minuto + "\n" + dia + "/" + minuto;
  }

  function funcion8() {
    const listaComponentes = document.getElementsByClassName("caja");

    for (let item of listaComponentes) {
      item.textContent = Math.round(Math.random() * 100);
    }
  }

  function funcion9() {
    const listaComponentes = document.getElementsByClassName("caja");

    for (let item of listaComponentes) {
      item.textContent = prompt("Teclea un número entre 1-100");
    }
  }
}
