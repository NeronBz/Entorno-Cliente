window.onload = inicio;
let opcionSeleccionada = "";
let btnBuscar = document.getElementById("buscarGenero");

function inicio() {
  obtenerJuegos();
  btnBuscar.onclick = obtenerEquipos;
}
async function obtenerJuegos() {
  console.log("entro en el pais");
  const url = "https://www.freetogame.com/api/games";
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  try {
    const data = await response.json();
    console.log(data);
    let contenedor = document.getElementById("genero");

    const palabrasUnicasSet = new Set();
    const datosFiltrados = [];

    for (const data of datos) {
      // Supongamos que "texto" es el campo que contiene las palabras
      const palabras = data.texto.split(" ");

      for (const palabra of palabras) {
        if (!palabrasUnicasSet.has(palabra)) {
          // Si la palabra no está en el conjunto, la agregamos al conjunto y al array de datos filtrados
          palabrasUnicasSet.add(palabra);
          datosFiltrados.push({ texto: palabra });
        }
      }
    }

    for (let i = 0; i < data.length; i++) {
      contenedor.innerHTML += `
  <option value=${data[i].genre}>${data[i].genre}</option>
  `;
    }
    contenedor.addEventListener("change", function () {
      opcionSeleccionada = contenedor.value;
    });
  } catch (error) {
    alert(error);
  }
}

async function obtenerEquipos() {
  const url =
    "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=" +
    opcion2Seleccionada +
    "&c=" +
    opcionSeleccionada;
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  const data = await response.json();
  console.log(data);
  let contenedor3 = document.getElementById("contenido");
  contenedor3.innerHTML = "";
  try {
    for (let i = 0; i < data.teams.length; i++) {
      contenedor3.innerHTML += `
  <div>
  <img src=${data.teams[i].strTeamBadge}>
  <p>${data.teams[i].strTeam}</p>
  </div>
  `;
    }
  } catch (error) {
    alert(error);
  }
}
