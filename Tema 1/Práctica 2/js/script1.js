window.addEventListener("load", inicio);
let intentos = 0;
function inicio() {
  const vectorColores = ["Yellow", "Pink", "Orange", "Purple"];
  console.log("entro en js");
  let nota1 = Math.round(Math.random() * 100);
  console.log(nota1);
  let nota2 = Math.round(Math.random() * 100);
  console.log(nota2);

  const dias = document.getElementsByTagName("li");
  const lista = document.getElementsByTagName("ul");
  for (let item of dias) {
    item.textContent = Math.round(Math.random() * 1000);
    item.style.color = "Red";
  }
  document.getElementById("btn1").addEventListener("click", accion1);
  document.getElementById("btn2").addEventListener("click", accion2);
  document.getElementById("btn3").addEventListener("click", accion3);
  document.getElementById("btn4").addEventListener("click", accion4);

  function accion1() {
    for (let item of dias) {
      item.textContent = Math.round(Math.random() * 1000);
      item.style.color = "Red";
    }
  }
  function accion2() {
    for (let item of dias) {
      let num = Math.round(Math.random() * 1000);
      item.textContent = num;
      if (num > 500) {
        item.style.color = "Blue";
      } else {
        item.style.color = "Green";
      }
    }
  }
  function accion3() {
    for (let item of dias) {
      let colorX = Math.round(Math.random() * 4);
      item.style.color = vectorColores[colorX];
    }
  }
  function accion4() {
    intentos++;
    let nota1 = Math.round(Math.random() * 10);
    console.log(nota1);
    let nota2 = Math.round(Math.random() * 10);
    console.log(nota2);
    document.getElementById("etiqueta1").innerText = nota1;
    document.getElementById("etiqueta2").innerText = nota2;
    if (nota1 == nota2) {
      alert("Iguales: " + intentos);
    }
  }
}
