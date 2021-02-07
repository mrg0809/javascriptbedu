let lista = [];
let opcion = 1;
while (opcion >= 1 && opcion <= 4){
    opcion = Number(prompt('1 AGREGAR\n 2 ELIMINAR\n 3 BUSCAR ELEMENTO\n 4 IMPRIMIR LISTA\n Salir(Cualquier otro valor)'))
    switch(opcion){
        case 1:
            lista.push(prompt('Que elemento deseas agregar?'));
            break;
        case 2:
            lista.splice(lista.lastIndexOf(prompt('Que elemento deseas eliminar')),1)
            break;
        case 3:
            if(lista.indexOf(prompt('Que elemento deseas saber si existe:')) == -1){
                console.log('NO EXISTE');
            }
            else{
                console.log('SI EXISTE');
            }
            break;
        case 4:
            console.log(lista.toString());
            break;
        default:
            break;

    }
}
alert('FIN');
