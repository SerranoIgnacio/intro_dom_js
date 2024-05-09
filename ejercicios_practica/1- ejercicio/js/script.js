"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.  */ 
//const tituloheader = document.querySelector(".post-header");
let tituloheader = document.querySelector("title");
console.log(tituloheader.textContent);

/*2)
Cambiar título utilizando javascript por otro cualquiera.*/

let tituloPrincipal = document.querySelector("title").textContent = "Titulo diferente";
console.log(tituloPrincipal);