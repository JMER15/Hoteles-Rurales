/**
 * 
 * @author josemi
 */

document.addEventListener("DOMContentLoaded", function () {

    let button = document.getElementById("filtro");
    let oculto = document.getElementById("filtrado");

    button.addEventListener("click", function () {

        if (oculto.style.display === "none") {
            oculto.style.display = "flex";
        } else {
            oculto.style.display = "none";
        }

    });

    let anadir = document.getElementById("boton");
    let oculto2 = document.getElementById("añadir-huespedes");

    anadir.addEventListener("click", function () {

        if (oculto2.style.display === "none") {
            oculto2.style.display = "flex";
        } else {
            oculto2.style.display = "none";
        }

    });
    
});