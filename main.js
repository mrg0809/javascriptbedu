/*let Person = function(name, age, gender, tel) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.tel = tel;

    this.presenta = () => {
        alert(`Nombre: ${name}, Edad: ${age}, Genero: ${gender}, Tel: ${tel}`)
    }
    }

let Juan = new Person('Marcelo', 39, 'M', 6643654383);
let Jose = new Person('Juan', 38, 'M', 3310040321);

let buscar = prompt('Buscar nombre:');*/

let lista = [];

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, grado, grupo){
        super(nombre, edad);
        this.grado = grado;
        this.grupo = grupo;
    }
}

function Agregar(){
    let respuesta = 'Y';
    while(respuesta=='Y'){
        let nombre = prompt('Nombre:');
        let edad = prompt('Edad:');
        let grado = prompt('Grado:');
        let grupo = prompt('Grupo:');
        let nuevo = new Alumno(nombre, edad, grado, grupo);
        lista.push(nuevo);
        respuesta = prompt('Deseas agregar un nuevo Alumno? Y/N');
    }
}

Agregar();
/*
let update=Object.assign(...lista.map(item=> ({[item.name.charAt(0).toUpperCase() + item.name.slice(1)]:item.total})))

console.log(update);*/

    lista.forEach((element) => {
        let nombre = element.nombre;
        let edad = element.edad;
        let grado = element.grado;
        let grupo = element.grupo;
        console.log(`Nombre: ${nombre}. Edad: ${edad}. Grado: ${grado}. Grupo: ${grupo}.`);
    })



