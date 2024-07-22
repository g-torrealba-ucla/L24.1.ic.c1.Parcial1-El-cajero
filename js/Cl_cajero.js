export default class Cl_cajero {
  constructor(nombre, montoVentas, sueldoBase) {
    this.nombre = nombre;
    this.montoVentas = montoVentas;
    this.sueldoBase = sueldoBase;
  }

  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set montoVentas(m) {
    this._montoVentas = +m;
  }
  get montoVentas() {
    return this._montoVentas;
  }
  set sueldoBase(s) {
    this._sueldoBase = +s;
  }
  get sueldoBase() {
    return this._sueldoBase;
  }
  montoComision() {
    if (this.montoVentas > 500) return this.montoVentas * 0.05;
    else return 0;
  }
  sueldoFinal() {
    return this.sueldoBase + this.montoComision();
  }
}
