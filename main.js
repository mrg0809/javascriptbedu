let buscar;
let registrar = new Lista();

do{
    opcion = Number(prompt(' 1. Agregar contacto. \n 2. Buscar contacto. \n 3. Eliminar contacto. \n 4.Modificar contacto.'))
    switch(opcion){
        case 1: 
            let nombre = prompt('Nombre:');
            let apellido = prompt('Apellido:');
            let telefono = prompt('Telefono:');
            let domicilio = prompt('Domicilio:');
            let telcasa = prompt('Tel Casa:');
            let email = prompt('Email:');
            let nuevo = new Datos(nombre, apellido, telefono, domicilio, telcasa, email);
            registrar.agregaRegistro(nuevo);
            break;

        case 2:
            buscar = prompt('Escribe el Nombre que quieres buscar:');
            registrar.buscar(buscar);
            break;

        case 3:

        case 4:

        default:
            break;
    }
} while(opcion >= 1 && opcion <= 4)