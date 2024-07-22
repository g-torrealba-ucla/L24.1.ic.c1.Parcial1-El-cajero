export default class Cl_iCajero {
  leerNombre() {
    return prompt("Ingresa tu nombre");
  }
  leerMonto() {
    return prompt("Ingresa el monto de las ventas");
  }
  leerSueldo() {
    return prompt("Ingresa el sueldo base");
  }
  reportar(nombre, comision, sueldo) {
    return `El nombre del cajero es: ${nombre}
            <br>El monto de la comisión a recibir es: $${comision}
            <br>El sueldo final es: $${sueldo}`;
  }
}
