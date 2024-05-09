"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:
1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR*/
document.getElementById("boton1").innerHTML = "PEGAR";
document.getElementById("boton2").innerHTML = "COPIAR";
document.getElementById("boton3").innerHTML = "CORTAR";

/* 2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "electricidad" */

const boton1 = document.getElementById("boton1");
boton1.classList.add("electricidad");
boton1.classList.contains('electricidad');
console.log(boton1.classList.contains('electricidad'));

const boton2 = document.getElementById("boton2");
boton2.classList.add("electricidad");
boton2.classList.contains('electricidad');
console.log(boton2.classList.contains('electricidad'));

const boton3 = document.getElementById("boton3");
boton3.classList.add("electricidad");
boton3.classList.contains('electricidad');
console.log(boton3.classList.contains('electricidad'));