console.log("entro en javascript")

//la función inicio es llamada por el objeto Window (la ventana del navegador)
//cuando termine de cargar (load) todo el DOM HTML
//Funciones útiles de Windows: alert, prompt, confirm
//window.addEventListener("load", inicio);
window.onload=inicio;
function inicio(){
 alert("estoy en la función inicio");

 //prompt("teclea tu nombre", "");
 //se guarda en una variable en js el valor completo del objeto cuyo id es "etiqueta1"
 function cargarAleatorio(){
 let primeraEtiqueta=document.getElementById("etiqueta1");
 let segundaEtiqueta=document.getElementById("etiqueta2");
 primeraEtiqueta.textContent=Math.round(Math.random()*100);
 segundaEtiqueta.textContent=Math.round(Math.random()*100);
 }

 //identificar el objeto de tipo button cuyo id es btn1 y lo guardamos en la variable recargar
 let recargar=document.getElementById("btn1");
 //generar un evento de tipo "click" simple sobre el button de id=btn1
 recargar.addEventListener("click", accion1);
 function accion1(){
    console.log("recargando los random");
    cargarAleatorio();
 }

 //otra forma de cargar eventos
 let boton2=document.getElementById("btn2");
 boton2.onclick=accion2;

 //generar un array de componentes html
 const listaElementosli=document.getElementsByTagName("li");
 console.log(listaElementosli);
 function accion2(){
    console.log("entro en el segundo evento");
    for(let item of listaElementosli){
        item.textContent=Math.round(Math.random()*100);
    }
 }

 let boton3=document.getElementById("btn3");
 boton3.onclick=accion3;

 function accion3(){
    console.log("entro en accion3")
    for(let item of listaElementosli){
        let numero=Math.round(Math.random()*1000);
        item.textContent=numero;
        if(numero>500){
            item.style.color="Red";
        }else{
            item.style.color="Blue";
        }
    }
 }

}