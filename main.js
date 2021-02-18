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
            //Se filtra y se muestran resultados de busqueda
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
            //Obtengo los index de los elementos que coincidan con la busqueda para preguntar cual borrar.
            buscar = prompt('Escribe el Nombre que deseas borrar:');
            var index = registro.map((e, i) => e.nombre == buscar ? i : undefined).filter(x => x);
            if(index.length > 1){
                //Muestra resultados si estan repetidos para escoger cual borrar.
                console.log(registro.map((e, i) => e.nombre == buscar ? e : undefined).filter(x => x));
                let borrar = prompt('Cual deseas borrar? (1,2,3...)');
                registro.splice(index[borrar], 1);
            }
            else if (index.length == 1){
                registro.splice(index[0], 1);
                alert('Contacto Borrado.');
            }
            else {
                alert('No hay coincidencias.')
            }
            break;

        case 4:

        default:
            break;
    }
} while(opcion >= 1 && opcion <= 4)