'use strict';

function cambiarUrl(){
    //Cambiarle la direccion de la imagen con el parametro de img
    let img = document.getElementById("img");
    img.setAttribute("src", "../assets/img/img" + url + ".jpg");
}
