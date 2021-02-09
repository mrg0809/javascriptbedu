class Datos extends Nombre {
    constructor(nombre, apellido, telefono, domicilio, telcasa, email){
        super(nombre, apellido);
        this.telefono = telefono;
        this.domicilio = domicilio;
        this.telcasa = telcasa;
        this.email = email;
    }
    imprimir(){
        console.log(` Nombre: ${this.nombre} ${this.apellido}/n Telefono: ${this.telefono}/n Domicilio: ${this.domicilio}/n Email: ${this.email}`);
    }
}
