/**
 * De un cajero de un supermercado se tiene nombre, monto de las ventas
 * y sueldo base. Calcule la comisión que recibirá si las ventas superan
 * los 500$, que será del 5% de sus ventas. Se requiere un programa que
 * muestre el nombre del empleado, el monto de la comisión a recibir y
 * el sueldo final.
 */
import Cl_cajero from "./Cl_cajero.js";
import Cl_iCajero from "./Cl_iCajero.js";

let cajero = new Cl_cajero(),
  iCajero = new Cl_iCajero(),
  n = iCajero.leerNombre(),
  v = iCajero.leerMonto(),
  sb = iCajero.leerSueldo(),
  salida = document.getElementById("salida");
cajero = new Cl_cajero(n, v, sb);

salida.innerHTML = iCajero.reportar(cajero.nombre, cajero.montoComision(), cajero.sueldoFinal())    