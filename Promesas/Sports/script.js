window.onload = inicio;
let opcionSeleccionada = "";
let opcion2Seleccionada = "";
let btnBuscar = document.getElementById("buscarEquipo");

function inicio() {
  obtenerPaises();
  obtenerDeportes();
  btnBuscar.onclick = obtenerEquipos;
}
async function obtenerPaises() {
  console.log("entro en el pais");
  const url = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  try {
    const data = await response.json();
    console.log(data);
    let contenedor = document.getElementById("pais");
    for (let i = 0; i < data.countries.length; i++) {
      contenedor.innerHTML += `
  <option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>
  `;
    }
    contenedor.addEventListener("change", function () {
      opcionSeleccionada = contenedor.value;
    });
  } catch (error) {
    alert(error);
  }
}

async function obtenerDeportes() {
  console.log("entro en el deporte");
  const url = "sports.json";
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  try {
    const data = await response.json();
    console.log(data);
    let contenedor2 = document.getElementById("deporte");
    for (let i = 0; i < data.sports.length; i++) {
      contenedor2.innerHTML += `
    <option value=${data.sports[i].strSport}>${data.sports[i].strSport}</option>
    `;
    }
    contenedor2.addEventListener("change", function () {
      opcion2Seleccionada = contenedor2.value;
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
