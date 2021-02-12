const clases = ['orange', 'green', 'pink', 'brown', 'grey'];

function colorAleatorio(id) {
    const boton = document.getElementById(id);
    const color = Math.floor(Math.random() * (clases.length - 0 + 1) ) + 0;
    boton.classList.add(clases[color]);
}






