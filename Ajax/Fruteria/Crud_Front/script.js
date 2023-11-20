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
let btnPdf = document.getElementById("imprimirPDF");
btnPdf.onclick = mostrarPDF;
let btnEnviarM = document.getElementById("enviarMail");
btnEnviarM.onclick = enviarMail;
btnGestionAl.onclick = login;

function inicio() {
  cargarContenido();
  console.log(objeto);
}

function mostrarPDF() {
  let ticket1 = document.getElementById("cestaCompra").innerHTML;
  console.log(ticket1);

  var estilo =
    "<style>" +
    "table {width: 100%;font: 17px Calibri;}" +
    "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
    "padding: 2px 3px;text-align: center;}" +
    "</style>";
  let win = window.open("ticket.pdf", "Fruteria", "height=700, width=700");
  win.document.write("<html><head>");
  win.document.write("<title>Ticket</title>"); //cabecera del pdf
  win.document.write(estilo); // estilo cabecera
  win.document.write("</head>");
  win.document.write("<body>");
  win.document.write("<table>");
  win.document.write(ticket1);
  win.document.write("</table>");
  win.document.write("Total: " + precio.textContent); // contenidos dentro del body
  win.document.write("</body></html>");
  win.print();
}

//ltzo vyev gqif ndso

function enviarMail() {
  alert("enviar mail");
  Email.send({
    Host: "smtp.gmail.com",
    Username: "rblazquezi02@educarex.es",
    Password: "ltzovyevgqifndso",
    To: "profeaugustobriga@gmail.com",
    From: "rblazquezi02@educarex.es",
    Subject: "Enviar mail usuario JS",
    Body: "TODO OK!!",
    // Attachments: [
    // {
    // name : "factura.pdf",
    // path : pdfBase64
    // }]
  }).then(function () {
    alert("MAIL ENVIADO OK");
  });
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
    window.open("../Crud_Back/index.html");
  }
}
