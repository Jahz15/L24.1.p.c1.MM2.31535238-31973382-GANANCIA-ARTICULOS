/**Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de 
artículos con precio superior a 65$ 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)  */
import Cl_tienda from "./Cl_tienda.js";
import Cl_articulos from "./Cl_articulos.js";

let tienda = new Cl_tienda();

let a1 = new Cl_articulos(888, 10, 15);
let a2 = new Cl_articulos(777, 20, 25);
let a3 = new Cl_articulos(999, 15, 25);
let a4 = new Cl_articulos(666, 25, 35);
let a5 = new Cl_articulos(111, 50, 70);
let a6 = new Cl_articulos(333, 40, 50);
let a7 = new Cl_articulos(444, 80, 100);
let a8 = new Cl_articulos(222, 5, 10);

tienda.procesarArticulos(a1);
tienda.procesarArticulos(a2);
tienda.procesarArticulos(a3);
tienda.procesarArticulos(a4);
tienda.procesarArticulos(a5);
tienda.procesarArticulos(a6);
tienda.procesarArticulos(a7);
tienda.procesarArticulos(a8);

let salida = document.getElementById("salida");

salida.innerHTML = `
Promedio de los precios de venta: ${tienda.calcPromedio()}<br>
Cantidad de articulos con precio superior a 65$: ${tienda.contMayores}<br>`