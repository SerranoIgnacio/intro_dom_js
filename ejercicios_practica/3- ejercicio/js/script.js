"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"
Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)  */

const bot = document.querySelector(".btn");
bot.addEventListener("click", function() {
    bot.classList.add("fuego")});




