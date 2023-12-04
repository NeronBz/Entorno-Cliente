window.onload = inicio;

function inicio() {
  let btn = document.getElementById("listar1");
  btn.onclick = function () {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((datos) => {
        // console.table(datos);

        cargarTabla(datos);
      });
  };
}
function cargarTabla(datos) {
  let tabla = document.getElementById("tabla1");
  tabla.innerHTML = "";
  let rowHead = document.createElement("tr");

  let vectorMetadatos = Object.keys(datos[0]);
  console.log(vectorMetadatos);
  for (let i = 0; i < vectorMetadatos.length; i++) {
    var cabecera = document.createElement("th");
    var sp = document.createElement("span");
    sp.textContent = vectorMetadatos[i];
    cabecera.appendChild(sp);
    rowHead.appendChild(cabecera);
  }
  tabla.appendChild(rowHead);

  for (let j = 0; j < datos.length; j++) {
    var rowContent = document.createElement("tr");

    for (let i = 0; i < Object.keys(datos[j]).length; i++) {
      var celda = document.createElement("td");
      let campo = Object.keys(datos[j])[i];

      if (campo.endsWith(".jpg ") || campo.endsWith(".png ")) {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", datos[j][campo]);
        celda.appendChild(imagen);
      } else {
        var sp2 = document.createElement("span");
        sp2.textContent = datos[j][campo];
        celda.appendChild(sp2);
      }
      rowContent.appendChild(celda);
      tabla.appendChild(rowContent);
    }

    // Asegúrate de que estás agregando cada celda a alguna fila o tabla
    // dependiendo de tu estructura HTML
    // Ejemplo: row.appendChild(celda);
    //          tabla.appendChild(row);
  }
}
