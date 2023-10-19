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

  //Validamos:
  // 1º Que no esté vacío.
  // 2º Que sea un número.
  // 3º Que sea un número entero.
  // 4º Que esté comprendido entre 1 y 50.
  // Si no hay errores se limpia el elemento small.

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
  } else if (num < 1 || num > 100) {
    sm.innerHTML = "* Número fuera del rango (0-100).";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}

function validacion2(texto, sm) {
  if (texto == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  }
  let longitud = String(texto).length;
  if (longitud <= 3 || longitud >= 15) {
    sm.innerHTML = "* La cadena no puede tener esa cantidad caracteres (3-15).";
    bool = false;
  }
}

function validacion3(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (num < -10 || num > 10) {
    sm.innerHTML = "* Número fuera del rango (-10 a 10).";
    bool = false;
  }
}

function validacion4(texto, sm) {
  if (texto == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else {
    let i = 0;
    let tieneA = false;
    let tieneE = false;
    let tieneO = false;
    let tieneB = false;
    let contB = 0;
    while (i < texto.length) {
      console.log("entro en el while");
      texto.toLowerCase();
      let caracter = texto.charAt(i);
      if (caracter == "a") {
        console.log("tengo una a");
        tieneA = true;
      }
      if (caracter == "e") {
        console.log("tengo una e");
        tieneE = true;
      }
      if (caracter == "o") {
        console.log("tengo una o");
        tieneO = true;
      }
      if (caracter == "b") {
        tieneB = true;
        contB++;
      }
      i++;
    }
    if (tieneA && tieneE && tieneO) {
      sm.innerHTML = "";
    } else if (tieneA && !tieneE && !tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra E y la letra O";
      bool = false;
    } else if (tieneA && tieneE && !tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra O";
      bool = false;
    } else if (!tieneA && tieneE && tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra A";
      bool = false;
    } else if (!tieneA && !tieneE && tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra A y la letra E";
      bool = false;
    } else if (tieneA && !tieneE && tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra E";
      bool = false;
    } else if (!tieneA && tieneE && !tieneO) {
      sm.innerHTML = "* A la cadena le falta la letra A y la letra O";
      bool = false;
    } else {
      sm.innerHTML =
        "* A la cadena le falta la letra A, la letra E y la letra O";
      bool = false;
    }
  }
}
