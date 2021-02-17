/*
var button = document.querySelector("button");

  button.addEventListener("mousedown", function(event) {
    if (event.button == 0) {
      console.log("Boton 1");
    } else if (event.button == 1) {
      conole.log("Middle bustton");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });
  */

// Falta que funcione en todos los botones
const boton = document.querySelector(".boton");
boton.addEventListener("mousedown", () => {
    console.log(boton.parentNode);
    const nuevoelemento = document.createElement('h1');
    nuevoelemento.innerHTML = "Soy NUEVO";
    document.body.appendChild(nuevoelemento);
});




