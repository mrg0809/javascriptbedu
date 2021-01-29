/*function saludar(saludo, name) {
    alert(saludo + ' usuario ' + name);
}
saludar('Hola', 'Pedro');*/

var figura=(prompt('Que figura es:'));

function cuadradorect(size1, size2, size3, size4) {
    alert(size1+size2+size3+size4);
}

function circulo(radio){
    alert(2*3.1416*radio);
}

switch (figura){

    case 'cuadrado':
        cuadradorect(4,4,4,4);
        break;

    case 'circulo':
        circulo(50);
        break;


    default:
        alert("no tengo esa figura");
        break;

}

