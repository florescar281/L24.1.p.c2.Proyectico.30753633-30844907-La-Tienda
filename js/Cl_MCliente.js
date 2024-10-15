export class Cl_MCliente {
    constructor(cedula, producto, cantidad) {
        this.cedula = cedula;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set producto(producto) {
        this._producto = producto;
    }

    get producto() {
        return this._producto;
    }

    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }

    get cantidad() {
        return this._cantidad;
    }

    TotalPagar({producA, producB, producC}) {
        if (this.producto == "A") {
            return this.cantidad * producA;
        } else if (this.producto == "B") {
            return this.cantidad * producB;
        } else if (this.producto == "C") {
            return this.cantidad * producC;
        } else {
            return 0;
        }
    }
}