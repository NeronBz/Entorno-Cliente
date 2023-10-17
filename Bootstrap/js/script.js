window.addEventListener("load", inicio);
function inicio() {
  console.log("entro en inicio");
  let confirmar = document.getElementById("validar");
  confirmar.addEventListener("submit", function (event) {
    event.preventDefault();
    validaciones();
  });

  function validaciones() {
    console.log(
      "entro en la validación número: contenido, entero, no esté repetido, número, entre 1-50"
    );
    let numero1 = document.getElementById("idNumero1").value.trim();
    let mensaje1 = document.getElementById("smNumero1");
    let numero2 = document.getElementById("idNumero2").value.trim();
    let mensaje2 = document.getElementById("smNumero2");
    let numero3 = document.getElementById("idNumero3").value.trim();
    let mensaje3 = document.getElementById("smNumero3");
    let numero4 = document.getElementById("idNumero4").value.trim();
    let mensaje4 = document.getElementById("smNumero4");
    let numero5 = document.getElementById("idNumero5").value.trim();
    let mensaje5 = document.getElementById("smNumero5");

    let arrayNumeros = [numero1, numero2, numero3, numero4, numero5];
    let arrayMensajes = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5];
    let bool_repetido = false;

    let infoRepetido = document.getElementById("smRepetido");

    for (let i = 0; i < arrayNumeros.length; i++) {
      console.log(arrayNumeros[i]);

      if (arrayNumeros[i] == "") {
        console.log("entro en el if");
        arrayMensajes[i].innerHTML = "** Campo obligatorio";
      } else if (arrayNumeros[i] > 0 && arrayNumeros[i] < 51) {
        for (let j = 0; j < arrayNumeros.length; j++) {
          if (arrayNumeros[i] == arrayNumeros[j] && i !== j) {
            bool_repetido = true;
            break;
          }
        }

        if (bool_repetido) {
          infoRepetido.innerHTML = "** error, número repetido";
        }
      } else {
        arrayMensajes[i].innerHTML =
          "**No se pueden poner números fuera del rango 1-50";
      }
    }
  }
}
