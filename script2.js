document.addEventListener("DOMContentLoaded", function () {

    let atras = document.getElementById("atras");

    atras.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "menu.html";
    });

});