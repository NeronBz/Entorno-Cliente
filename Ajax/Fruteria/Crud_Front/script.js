window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let bloqueCesta = document.createElement("tr");
var objeto;
let contenedorCesta = document.querySelector("#cestaCompra");
var total = 0;
var calculoPrecio = 0;
let precioTotal = document.getElementById("precio");

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
btnGestionAl.onclick = login;

function inicio() {
  cargarContenido();
  console.log(objeto);
}
function cargarFrutas() {
  bloqueHtml.className = "row";
  for (let i = 0; i < objeto.length; i++) {
    let vector = [];
    vector.push(objeto[i].id, objeto[i].name, objeto[i].photo, objeto[i].price);
    bloqueHtml.innerHTML +=
      '<div class="col-lg-4">' +
      '<img class="card-img-top" src=' +
      objeto[i].photo +
      ' width="90" height="90" onclick=anadirCesta("' +
      vector +
      '") alt=' +
      objeto[i].id +
      ">" +
      '<div class="card-body" onclick=anadirCesta("' +
      vector +
      '")>' +
      '<h4 class="card-title">' +
      objeto[i].name +
      "</h4>" +
      '<p class="card-text">' +
      objeto[i].price +
      "</p></div></div>";
  }
  cajaFrutas.appendChild(bloqueHtml);
}
function cargarContenido() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      objeto = JSON.parse(this.responseText);
      cargarFrutas();
    }
  };
  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/productos/index.php",
    true
  );
  xhr.send();
}
function anadirCesta(vector) {
  let cajaTr = document.createElement("tr");
  console.log(vector);
  let vectorX = vector.split(",");
  let peso = prompt("Teclea los kgs de " + vectorX[1]);
  calculoPrecio = peso * parseFloat(vectorX[3]);
  total = total + calculoPrecio;
  precioTotal.textContent = total;

  if (peso && !isNaN(peso)) {
    cajaTr.innerHTML =
      "<td>" +
      vectorX[1] +
      "</td><td>" +
      peso +
      "</td><td>" +
      vectorX[3] +
      "</td><td>" +
      calculoPrecio +
      "</td>" +
      "<td>" +
      "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
      " href='javascript:void(0)' onclick=eliminar(this,'" +
      calculoPrecio +
      "')>" +
      "ELIMINAR<i class='bi-trash'></i></a></div>" +
      "</td>";
  }
  contenedorCesta.appendChild(cajaTr);
}

function eliminar(fila, calculo) {
  let filaTabla = fila.parentNode.parentNode.parentNode;
  filaTabla.innerHTML = "";
  total = total - calculo;
  precioTotal.textContent = total;
}

function login() {
  if (pwd.value == "frutas") {
    window.open();
  }
}
