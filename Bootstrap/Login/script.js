window.addEventListener("load", inicio);

let bool = true;
function inicio() {
  let accion = document.getElementById("aceptar");

  accion.onsubmit = function () {
    let user1 = document.getElementById("user").value;
    let smUser1 = document.getElementById("smUser");

    let passwrd1 = document.getElementById("password1").value;
    let smPassword1 = document.getElementById("smPassword1");

    comprobar(user1, smUser1, passwrd1, smPassword1);

    return bool;
  };
}
function comprobar(us1, smUs1, pas1, smPas1) {
  let cadena1 = String(us1);
  let cadena2 = String(pas1);

  if (cadena1.length == 0) {
    bool = false;
    smUs1.innerHTML = "* Campo obligatorio";
  } else if (cadena2.length == 0) {
    bool = false;
    smPas1.innerHTML = "* Campo obligatorio";
  }
}
