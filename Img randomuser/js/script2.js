window.onload = inicio;

function inicio() {
  console.log("estoy en inicio");
  let contenedorP = document.createElement("div");
  contenedorP.className = "container";
  let contenedorS = document.createElement("fieldset");
  contenedorS.className = "gallery";
  let leyenda = document.createElement("legend");
  leyenda.textContent = "Práctica 8";
  let cuerpo = document.querySelector("body");
  cuerpo.appendChild(contenedorP);
  contenedorS.appendChild(leyenda);
  contenedorP.appendChild(contenedorS);

  for (let i = 0; i < 16; i++) {
    let num1 = Math.floor(Math.random() * 20);
    let rutaM = "https://randomuser.me/api/portraits/men/";
    let rutaW = "https://randomuser.me/api/portraits/women/";
    let imagen = document.createElement("img");
    imagen.className = "gallery img";
    contenedorS.appendChild(imagen);

    if (i % 2 == 0) {
      imagen.src = rutaM + num1 + ".jpg";
    } else {
      imagen.src = rutaW + num1 + ".jpg";
    }
  }
}
