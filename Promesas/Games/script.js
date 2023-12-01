window.onload = inicio;
let opcionSeleccionada = "";
// let arrayGenre = [
//   "mmorpg",
//   "shooter",
//   "strategy",
//   "moba",
//   "racing",
//   "sports",
//   "social",
//   "sandbox",
//   "open-world",
//   "survival",
//   "pvp",
//   "pve",
//   "pixel",
//   "voxel",
//   "zombie",
//   "turn-based",
//   "first-person",
//   "third-Person",
//   "top-down",
//   "tank",
//   "space",
//   "sailing",
//   "side-scroller",
//   "superhero",
//   "permadeath",
//   "card",
//   "battle-royale",
//   "mmo",
//   "mmofps",
//   "mmotps",
//   "3d",
//   "2d",
//   "anime",
//   "fantasy",
//   "sci-fi",
//   "fighting",
//   "action-rpg",
//   "action",
//   "military",
//   "martial-arts",
//   "flight",
//   "low-spec",
//   "tower-defense",
//   "horror",
//   "mmorts",
// ];
let btnBuscar = document.getElementById("buscarGenero");

function inicio() {
  obtenerGeneros();
  btnBuscar.onclick = mostrarJuegos;
}
async function obtenerGeneros() {
  console.log("entro en el género");

  const url = "games.json";
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  const data = await response.json();
  console.log(data);
  let contenedor = document.getElementById("genero");
  try {
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

async function mostrarJuegos() {
  const url =
    "https://www.freetogame.com/api/games?category=" + opcionSeleccionada;
  var headers = {};
  console.log(opcionSeleccionada);

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  const data = await response.json();
  console.log(data);
  let contenedor2 = document.getElementById("contenido");
  contenedor2.innerHTML = "";
  try {
    for (let i = 0; i < data.length; i++) {
      contenedor2.innerHTML += `
        <div>
        <img src=${data[i].thumbnail}>
        <p>${data[i].title}</p>
        </div>
        `;
    }
  } catch (error) {
    alert(error);
  }
}
