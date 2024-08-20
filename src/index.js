//construyendo observable
import { Observable, fromEvent } from "rxjs";
//Para identificar las variables  que son observables se define  con un $
//se genera una  instancia de  un  observable 
const onbservableAlfa$ = new Observable(
    susbcriber => {
        //aqui hice  un susbcriber  que genera  una serie de números
        susbcriber.next(1);
        susbcriber.next(2);
        susbcriber.next(3);
        //complete finaliza el envio de valores
        susbcriber.complete();
        susbcriber.next("Hola");
     
        susbcriber.next({
            name: "Martha"
        }); 
        susbcriber.next (["Naranja", "Manazanas", "Pepinos"])
  
    }); 

/* aqui voy a  crear  un observador 
que revisara los valores  de mi anterior  observador 
 */

const observador = {
    next: (value) => {
        console.log("Valores recibidos :",value)
     }, 
    complete: (complete) => {
        console.log("Observable completado",complete)
  
    },
    error: (error) => {
        console.log('Error recibido'); 
        console.warn(error); 
    }
}

/*aqui  voy a crear  un susbscripción para
 el observable  emita  valores al observador 
*/

onbservableAlfa$.subscribe(observador); 

/* Eventos */


//MOuse move 
const mouseMove$ = fromEvent(document, 'mousemove'); 

//observador mouse  
const observableMOuse = {
    next: (event) => {
        console.log('Mouse','x',event.x, 'y',event.y);  
    }
}
mouseMove$.subscribe(observableMOuse)
