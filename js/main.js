
// El lenguaje seleccionado es https//javascript.js.com

// este es un comentario de una linea...
 
/* este es un comentario
de varias lines en javascript */


// Variables y constantes

let saludo = "hola";

const nombre = "Maria";


// Tipos de datos 

let number = 12;

let number2 = 2.8;

let booleano = false;

let booleano2 = true;

let string = "silla";




// Imprimir por consola 

document.write("Hola, Javascript");

alert('hola como estas');

// Tipos de operadores

// Operador de suma
let a = 5;
let b = 4;
console.log(a+b);

// Operador de resta
let c = 4;
let d = 2;
console.log(c-d);

// Operador de multiplicacion
let f = 45;
let r = 1;
let s = 3;
console.log(f*r*s);

// Operador de division
let j = 123;
//let i = 23;
console.log(j/i);

// Operadores de incremento y decremento
let g = 3;
let k = 8;
console.log(++g);
console.log(--k)

// Operador de asignacion
let l = 45;
console.log(l);

// Operador de concatenacion
let nombre3 = 'Luna';
let saludo2 = 'Hola';
console.log(saludo2 + " " + nombre3);

// Operador no es igual 
let n = 6;
n != 4;

// Operador mayor que y mayor o igual que
let num = 8;
let num1 = 4;
console.log(num > num1);

console.log(5 >= 5 );

// Operador menor que y menor o igual que 
console.log(6 < 4);

console.log(3 <= 3);

// operadores logicos && (es y) y || (es o)

let persona = 14;
let sexo = 'f';


if(persona >= 18 && sexo == 'f'){
    console.log("puedes entrar a la discoteca")
}else{
    console.log("no puedes ingresar a la discoteca")
};

let num3 = 3;
let canasta = 0;

for (var i = 1; i <= num3; i++){
    canasta = canasta + i;
}

console.log(canasta);

prompt("ingresa un numero ")


for (var i = 10; i <= 55; i++) {
    
    if (i % 2 === 0) {
        if (i !== 16 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
