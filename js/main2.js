/**
 * SUPERMERCADO
 * somos una cajera que atiende a un cliente
 * el cliente empieza a pasar productos por la caja
 * la cajera debe registrar de cada producto:
 *  - precio
 *  - descuento
 * la cajera debe preguntar al cliente si ya terminó de pasar productos.
 *  si ya terminó, entonces le debe decir el total de la cuenta.
 * adicional:
 *  si el producto tiene descuento, debe calcular el descuento
 */

let seguir = true;
let pregunta = false;
let precioProducto = 0;
let descuento=0;
let total =0;
let precioConDescuento=0;
let bolsa
let valorBolsa=200;
let totalSinDescuento=0;
for (let i = 1; seguir; i++) {
    console.log("pasa producto numero "+i);

    precioProducto = parseInt(prompt("ingrese el precio del producto "+i));
    totalSinDescuento= totalSinDescuento+ precioProducto;

    descuento = parseInt(prompt("ingrese porcentaje de descuento del producto "+i));
    precioConDescuento=precioProducto - (precioProducto*descuento)/100;

    total = total + precioConDescuento;

    pregunta = prompt("terminó?");

    if (pregunta=="s"){
        seguir=false;
        console.log("termina");
    }
}
bolsa = prompt("quiere bolsa? cuesta $"+valorBolsa);
if (bolsa=='s') {
    total = total + 200;
}
console.log("el total sin descuento es", totalSinDescuento);
console.log("el total con descuento:",total);