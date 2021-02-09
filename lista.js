class Lista {
    constructor() {
        this.lista = [];
    }
    
    agregaRegistro(nuevo) {
        this.lista.push(nuevo);
    }
    
    imprimir() {
        if (this.lista.length > 0){
            this.lista.forEach( nuevo => nuevo.imprimir())
        }
        else {
            console.log('No hay registros')
        }
    }
    
    buscar(buscar) {
        const resultado = this.lista.find( pregunta => this.lista.nombre == buscar);
        console.log(resultado);
    }

    modificarRegistro(){

    }
    
    eliminarRegistro(){

    }
}