window.onload = inicio;
cajaFrutas.innerHTML = "";
let bloqueHtml;
var objeto;

let btnPDF = document.getElementById("imprimirPDF");
btnPDF.onclick = mostrarPDF;

function inicio() {
  mostrarPDF();
}

function mostrarPDF() {
  cargarContenido();
  let ticket1 = document.getElementById("cestaCompra").innerHTML;
  console.log(ticket1);

  let estilo =
    "<style>" +
    "table {width: 100%;font: 17px Calibri;}" +
    "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
    "padding: 2px 3px;text-align: center;}" +
    "</style>";

  let win = window.open("ticket.pdf", "Fruteria", "height=700,width=700");
  win.document.write("<html><head>");
  win.document.write("<title>Ticket</title>"); //cabecera del pdf
  win.document.write(estilo); // estilo cabecera
  win.document.write("</head>");
  win.document.write("<body>");
  win.document.write("<table>");
  win.document.write(ticket1);
  win.document.write(bloqueHtml);
  win.document.write("</table>");
  win.document.write("</body></html>");
  win.print();
}

function cargarFrutas() {
  for (let i = 0; i < objeto.length; i++) {
    if (objeto.stockActual < objeto.stockMinimo) {
      let calculoStock =
        parseFloat(objeto.stockMinimo) - parseFloat(objeto.stockActual);
      let vector = [];
      vector.push(objeto[i].name, objeto[i].price, calculoStock[i]);
      bloqueHtml.innerHTML +=
        "<h4>" +
        objeto[i].name +
        "</h4>" +
        "<p>" +
        objeto[i].price +
        "</p>" +
        "<p>" +
        calculoStock[i] +
        "</p></div></div>";
    }
  }

  cajaFrutas.appendChild(bloqueHtml);
  console.log(bloqueHtml);
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
    "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",
    true
  );
  xhr.send();
}
