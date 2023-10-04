window.onload = inicio;

function inicio() {
  console.log("entro en inicio");

  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let op = document.getElementById("op");
  let numero = document.getElementById("caja");
  let submit = document.getElementById("sub");
  let spPuntos = document.getElementById("sppuntos");
  let spFallos = document.getElementById("spFallos");
  let Tiempo = document.getElementById("time");

  let numero1 = Math.round(Math.random() * 100);
  let numero2 = Math.round(Math.random() * 100);
  let oper = Math.round(Math.random() * 4);
  let puntos = 0;
  let fallos = 0;
  let tiempo = 0;
  let contadorSegundos = 30;

  const operacion = ["+", "-", "/", "*"];

  btn1.onclick = Start;

  function Start() {
    console.log("entro en Start");
    btn1.disabled = true;

    tiempo = setInterval(accion, 1000);

    calcular();

    function calcular() {
      numero1 = Math.round(Math.random() * 100);
      numero2 = Math.round(Math.random() * 100);
      oper = Math.round(Math.random() * 4);
      num1.textContent = numero1;
      op.textContent = operacion[oper];
      num2.textContent = numero2;
      submit.onclick = Comprobacion;
    }
  }

  function accion() {
    if (contadorSegundos > 0) {
      contadorSegundos--;
      cargarInfo();
    } else {
      Over();
    }
  }

  function cargarInfo() {
    spPuntos.textContent = "Puntuación: " + puntos;
    spFallos.textContent = "Fallos: " + fallos;
    Tiempo.textContent = "Tiempo: " + contadorSegundos;
  }

  btn2.onclick = Over;

  function Over() {
    console.log("entro en Over");
    btn1.disabled = false;
    puntos = 0;
    fallos = 0;
    tiempo = 0;
    contadorSegundos = 0;
    cargarInfo();

    clearInterval(tiempo);
  }

  function Comprobacion() {
    console.log("entro en comprobacion");
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = num1 * numero2;
    let division = numero1 / numero2;

    let resultado = parseFloat(numero.value);

    if (operacion[0] && suma == resultado) {
      puntos++;
      cargarInfo();
      calcular();
    } else if (operacion[1] && resta == resultado) {
      puntos++;
      cargarInfo();
      calcular();
    } else if (operacion[2] && division == resultado) {
      puntos++;
      cargarInfo();
      calcular();
    } else if (operacion[3] && multiplicacion == resultado) {
      puntos++;
      cargarInfo();
      calcular();
    } else {
      fallos++;
      cargarInfo();
    }
  }
}
