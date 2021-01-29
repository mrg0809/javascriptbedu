/*var edad = 18;
var limite = 20;
var ciudad = "cdmx";

if(edad>=limite && ciudad=="cdmx") {
    console.log("Puedes votar")}
   else {
        console.log("no puedes votar.");
    }
*/
/*let autor = 'Miguel de Cervantes';

switch(autor) {
    case 'Miguel de Cervantes':
        console.log('Don Quijote');
        break;
    case 'Juan Rulfo':
        console.log('el gallo de oro');
        break;
    case 'Gabriel Garcia Marquez':
        console.log('Cien anos de soledad');
        break;
    default:
        console.log('No existe')
        break;
}*/

/*var fin=100;
var inicio;
var divisor=2;

for(inicio=0; inicio<fin; inicio++){
    if(inicio%divisor==0){
        console.log(inicio);
    }
}
*/

var numero=100;
var isPrime = true;

while(numero>0){
    for (var i = 2; i <= numero; i++) {
        if (numero % i === 0 && i !== numero) {
          isPrime = false;
        }
        numero--;
      }
      if(isPrime) {
        console.log(counter);
      }
}