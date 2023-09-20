window.onload = inicio;
function inicio() {
  console.log("entro en inicio");

  const colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
  const nombres = ["Red", "Green", "Blue", "Yellow"];

  let btnJugar = document.getElementById("jugar");
  btnJugar.onclick = empezar;
  let btnParar = document.getElementById("parar");
  btnParar.onclick = terminar;

  let caja = document.getElementById("fondo");
  let spTiempo = document.getElementById("spTiempo");
  let spPuntos = document.getElementById("spPuntos");
  var tiempo = 0;
  var puntos = 0;
  var contadorSegundos = 30;

  function empezar() {
    console.log("1");
    btnJugar.disabled = true;
    tiempo = setInterval(juego, 1000);
    contadorSegundos=30;
  }

  function juego() {
    console.log("2");

    let num1 = Math.round(Math.random() * 3);
    caja.style.backgroundColor = colores[num1];
    let num2 = Math.round(Math.random() * 3);
    document.getElementById("texto").textContent = nombres[num2];
    
    spTiempo.textContent = "Tiempo restante: " + contadorSegundos;
    contadorSegundos--;

    if (contadorSegundos <= 0) {
      clearInterval(tiempo);
      function comprobar() {}
      btnJugar.disabled=false;
    }

    caja.onclick = comprobar;
    function comprobar() {
      if (num1 == num2) {
        puntos++;
      } else {
        puntos--;
      }
      spPuntos.textContent = "Puntos: " + puntos;
    }
  }
  function terminar() {
    puntos = 0;
    contadorSegundos = 0;
    spPuntos.textContent = "Puntos: 0";
    spTiempo.textContent = "Tiempo: 30";
  }
}
