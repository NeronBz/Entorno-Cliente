window.addEventListener("load", inicio);

function inicio() {
  let formulario = document.getElementById("aceptar");

  formulario.onsubmit = function () {
    let pass1 = document.getElementById("password1");
    let smPass1 = document.getElementById("smPassword1");

    let pass2 = document.getElementById("password2");
    let smPass2 = document.getElementById("smPassword2");

    let mail = document.getElementById("email");
    let smMail = document.getElementById("smEmail");

    validarPassword(pass1, smPass1);
    comprobarPassword(pass1, pass2, smPasswd1);
    bool = true;
  };
}
function validarPassword(passwd1, smPasswd1) {
  let cadena = String(passwd1);
  let longitudCadena = cadena.length;

  if (cadena == "") {
    bool = false;
    smPasswd1.innerHTML = "* Campo obligatorio";
  } else {
    if (longitudCadena < 8) {
      bool = false;
      smPasswd1.innerHTML = "* La contraseña debe tener al menos 8 carácteres";
    } else {
      //   let mayus = false;
      //   let indice = 0;
      //   while (indice < longitudCadena && !mayus) {
      //     if (cadena.charAt(indice) == cadena.charAt(indice).toUpperCase) {
      //       mayus = true;
      //     }
      //     indice++;
      //   }
      //   if (!mayus) {
      //     bool = false;
      //     smPasswd1.innerHTML = "* La contraseña debe tener una mayúscula";
      //   }

      if (
        !/[A-Z]/.test(cadena) ||
        !/[a-z]/.test(cadena) ||
        !/[0-9]/.test(cadena)
      ) {
        bool = false;
        smPasswd1.innerHTML = "La contraseña no cumple con los requisitos";
      }
    }
  }
}
function comprobarPassword(pas1, pas2, smPas2) {
  let cadena = String(pas2);

  if (pas1 != pas2) {
    bool = false;
    smPas2.innerHTML = "* Las contraseñas no coinciden";
  }
}
