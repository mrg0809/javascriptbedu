let lista = [];
let buscar;

class Contacto{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Datos extends Contacto {
    constructor(nombre, apellido, telefono, domicilio, telcasa, email){
        super(nombre, apellido);
        this.telefono = telefono;
        this.domicilio = domicilio;
        this.telcasa = telcasa;
        this.email = email;
    }
    imprimir(){
        console.log();
    }
}


opcion = Number(prompt(' 1. Agregar contacto. \n 2. Buscar contacto. \n 3. Eliminar contacto. \n 4.Modificar contacto.'))
do{
    switch(opcion){
        case 1: 
            let nombre = prompt('Nombre:');
            let apellido = prompt('Apellido:');
            let telefono = prompt('Telefono:');
            let domicilio = prompt('Domicilio:');
            let telcasa = prompt('Tel Casa:');
            let email = prompt('Email:');
            let nuevo = new Datos(nombre, apellido, telefono, domicilio, telcasa, email);
            lista.push(nuevo);
            break;

        case 2:
            buscar = prompt('Escribe el Nombre que quieres buscar:');
            let resultado = lista.filter(buscar);
            console.log(resultado);
            break;

        case 3:

        case 4:

        default:
            break;
    }
} while(opcion >= 1 && opcion <= 4)