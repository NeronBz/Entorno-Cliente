window.addEventListener("load", inicio);
function inicio() {
  console.log("entro en inicio");
  let confirmar = document.getElementById("validar");
  confirmar.onsubmit = validaciones;
  function validaciones() {
    console.log(
      "entro en la validación número: contenido, entero, no esté repetido, número, entre 1-50"
    );
    alert("validando");
    let numero1 = document.getElementById("idNumero1");
    let mensaje1 = document.getElementById("smNumero1");
    let numero2 = document.getElementById("idNumero2");
    let mensaje2 = document.getElementById("smNumero2");
    let numero3 = document.getElementById("idNumero3");
    let mensaje3 = document.getElementById("smNumero3");
    let numero4 = document.getElementById("idNumero4");
    let mensaje4 = document.getElementById("smNumero4");
    let numero5 = document.getElementById("idNumero5");
    let mensaje5 = document.getElementById("smNumero5");

    let arrayNumeros = [numero1, numero2, numero3, numero4, numero5];
    let arrayComparaciones = [];
    let bool_repetido = false;

    let infoRepetido = document.getElementById("smRepetido");

    for (let i = 0; i < arrayNumeros.length; i++) {
      for (let j = 0; j < arrayNumeros.length; i++) {
        if (arrayNumeros[i] == arrayNumeros[j] && i != j) {
          bool_repetido = true;
        }
      }
    }
    if (bool_repetido) {
      infoRepetido.innerHTML = "** error, número repetido";
    }
    validar(numero1, mensaje1);
    validar(numero2, mensaje2);
    validar(numero3, mensaje3);
    validar(numero4, mensaje4);
    validar(numero5, mensaje5);
  }
}
