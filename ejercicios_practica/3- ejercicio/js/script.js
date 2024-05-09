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

const bot1 = document.getElementById("boton1");
bot1.addEventListener("click", function() {
    if(bot1.classList.contains('fuego'))
        bot1.classList.remove("fuego")
    else
        (bot1.classList.add("fuego"));
});

const bot2 = document.getElementById("boton2")
bot2.addEventListener("click", function() {
    if(bot2.classList.contains('fuego'))
        bot2.classList.remove("fuego")
    else
        (bot2.classList.add("fuego"));
});

const bot3 = document.getElementById("boton3")
bot3.addEventListener("click", function() {
    if(bot3.classList.contains('fuego'))
        bot3.classList.remove("fuego")
    else
        (bot3.classList.add("fuego"));
});

