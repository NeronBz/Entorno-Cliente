window.onload = inicio;

function inicio() {
  obtenerPaises();
  obtenerDeportes();
  obtenerEquipos();
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
  } catch (error) {
    alert(error);
  }
}

async function obtenerDeportes() {
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
  } catch (error) {
    alert(error);
  }
}

async function obtenerEquipos() {
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
    let contenedor = document.getElementById("contenido");
    for (let i = 0; i < data.teams.length; i++) {
      contenedor.innerHTML += `
    <option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>
    `;
    }
  } catch (error) {
    alert(error);
  }
}
