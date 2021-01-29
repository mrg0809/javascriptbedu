/*function saludar(saludo, name) {
    alert(saludo + ' usuario ' + name);
}
saludar('Hola', 'Pedro');*/

let figura=(prompt('Que figura es:'));

function cuadradorect(size1, size2, size3, size4) {
    return(size1+size2+size3+size4);
}

function circulo(radio){
    return(2*3.1416*radio);
}

function triangulo(size1, size2, size3) {
    return(size1+size2+size3);
}

switch (figura){

    case 'cuadrado':
        console.log(cuadradorect(4,4,4,4));
        break;

    case 'circulo':
        console.log(circulo(50));
        break;

    case 'triangulo':
        console.log(triangulo(9,2,3));
        break;

    default:
        alert("no tengo esa figura");
        break;

}

