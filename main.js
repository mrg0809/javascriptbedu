let buscar;
let nombre;
let apellido;
let telefono;
let domicilio;
let telcasa;
let email;
let nuevo;
const registro = [];

class Persona {
    constructor(nombre, apellido, telefono, domicilio, telcasa, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.domicilio = domicilio;
        this.telcasa = telcasa;
        this.email = email;
    }
    
    imprimir(){
        console.log(` Nombre: ${this.nombre} ${this.apellido}/n Telefono: ${this.telefono}/n Domicilio: ${this.domicilio}/n Email: ${this.email}`);
    }
    
    agregar(){
        
    }
    
    filtrar(){

    }
}


do{
    opcion = Number(prompt(' 1. Agregar contacto. \n 2. Buscar contacto. \n 3. Eliminar contacto. \n 4. Modificar contacto.'))
    switch(opcion){
        case 1: 
            nombre = prompt('Nombre:');
            apellido = prompt('Apellido:');
            telefono = prompt('Telefono:');
            domicilio = prompt('Domicilio:');
            telcasa = prompt('Tel Casa:');
            email = prompt('Email:');
            nuevo = new Persona(nombre, apellido, telefono, domicilio, telcasa, email);
            registro.push(nuevo);
            break;

        case 2:
            buscar = prompt('Escribe el Nombre que quieres buscar:');
            var resultado = registro.filter(x => x.nombre == buscar);
            if(resultado.length < 1){
                console.log('No hay coincidencias.');
            }
            else{
                console.log(resultado);
            }
            break;

        case 3:

        case 4:

        default:
            break;
    }
} while(opcion >= 1 && opcion <= 4)