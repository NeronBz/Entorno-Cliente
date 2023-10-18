let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {
  bool = true;

  //Declaramos el valor que tenga el input y el small para el mensaje de error
  let n1 = document.getElementById("idNumero1").value;
  let smNum1 = document.getElementById("smNumero1");

  let texto1 = document.getElementById("idTexto1").value;
  let smText1 = document.getElementById("smTexto1");

  let n2 = document.getElementById("idNumero2").value;
  let smNum2 = document.getElementById("smNumero2");

  let texto2 = document.getElementById("idTexto2").value;
  let smText2 = document.getElementById("smTexto2");

  validacion1(n1, smNum1);
  validacion2(texto1, smText1);
  validacion3(n2, smNum2);
  validacion4(texto2, smText2);

  return bool;
};

function validacion1(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (isNaN(num)) {
    sm.innerHTML = "* Introduce un número.";
    bool = false;
  } else if (!Number.isInteger(Number(num))) {
    sm.innerHTML = "* Introduce un número entero.";
    bool = false;
  } else if (num < 1 || num > 10) {
    sm.innerHTML = "* Número fuera del rango (0-10).";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}

function validacion2(texto, sm) {
  if (texto == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else {
    let longitud = String(texto).length;
    if (longitud < 5 || longitud > 15) {
      sm.innerHTML =
        "* La cadena no puede tener esa cantidad de caracteres (5-15).";
      bool = false;
    } else {
      let i = 0;
      let esNum = false;
      let esMayus = false;
      while (i < texto.length) {
        let caracter = texto.charAt(i);
        if (!isNaN(caracter * 1)) {
          esNum = true;
        }
        if (caracter === caracter.toUpperCase()) {
          esMayus = true;
        }
        i++;
      }
      if (esNum && esMayus) {
        sm.innerHTML = "";
      } else {
        sm.innerHTML =
          "* La cadena debe tener al menos una letra mayúscula y un número";
        bool = false;
      }
    }
  }
}

function validacion3(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (isNaN(num)) {
    sm.innerHTML = "* Introduce un número.";
    bool = false;
  } else if (num % 5 !== 0) {
    sm.innerHTML = "* No es múltiplo de 5.";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}
function validacion4(texto, sm) {
  if (texto == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else {
    let longitud = String(texto).length;
    if (longitud < 20 || longitud > 30) {
      sm.innerHTML =
        "* La cadena no puede tener esa cantidad de caracteres (20-30).";
      bool = false;
    } else {
      let i = 0;
      let esArroba = false;
      let contadorA = 0;

      while (i < texto.length) {
        let caracter = texto.charAt(i);
        if (caracter == "@") {
          esArroba = true;
          contadorA++;
        }
        i++;
      }

      if (esArroba && contadorA == 1) {
        sm.innerHTML = "";
      } else {
        sm.innerHTML = "* Tiene que haber una sola arroba.";
        bool = false;
      }
    }
  }
}
