window.onload = inicio;
let opcionSeleccionada = "";
let contenedor = document.getElementById("genero");
let arrayGenre = [];
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
  try {
    const data = await response.json();
    console.log(data);
    let j = 0;
    while (j < data.length) {
      if (!arrayGenre.includes(data[j].genre)) {
        arrayGenre.push(data[j].genre);
      }
      j++;
    }
    for (let i = 0; i < arrayGenre.length; i++) {
      contenedor.innerHTML += `
  <option value=${arrayGenre[i]}>${arrayGenre[i]}</option>
  `;
    }
  } catch (error) {
    alert(error);
  }
}

async function mostrarJuegos() {
  const url = "games.json";
  var headers = {};

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  try {
    const data = await response.json();

    let contenedor2 = document.getElementById("contenido");
    contenedor2.innerHTML = "";

    const generoSeleccionado = contenedor.value;

    for (let i = 0; i < data.length; i++) {
      if (data[i].genre === generoSeleccionado) {
        contenedor2.innerHTML += `
          <div>
            <img src=${data[i].thumbnail}>
            <p>${data[i].title}</p>
          </div>
        `;
      }
    }
  } catch (error) {
    alert(error);
  }
}
