window.onload = inicio;
function inicio() {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let op = document.getElementById("op");
  let numero = document.getElementById("caja");
  let submit = document.getElementById("sub");
  let spPuntos = document.getElementById("sppuntos");
  let spFallos = document.getElementById("spFallos");

  let numero1 = Math.round(Math.random() * 100) + 1;
  let numero2 = Math.round(Math.random() * 100) + 1;
  let oper = Math.round(Math.random() * 3) + 1;

  const operacion = ["+", "-", "/", "*"];

  let bucleActivo = true;

  btn1.onclick = iniciarBucle;

  function iniciarBucle() {
    if (bucleActivo) {
      Start();
    }
  }

  function Start() {
    while (bucleActivo) {
      num1.textContent = numero1;
      op.textContent = operacion[oper];
      num2.textContent = numero2;
      submit.onclick = Comprobacion;
    }
  }

  btn2.onclick = Over;

  function Over() {
    bucleActivo = false;
  }

  function Comprobacion() {
    let resultado = num1 + operacion + num2;
    if (resultado == numero) {
      spPuntos++;
    } else {
      spFallos++;
    }
  }
}
