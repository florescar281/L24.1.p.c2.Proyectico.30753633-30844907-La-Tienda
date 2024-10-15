export class Cl_VCliente {
    constructor(controlador) {
        this.cedCliente = document.getElementById("Cedula");
        this.prodCliente = document.getElementById("Producto");
        this.canProduct = document.getElementById("Cantidad");
        this.seccionCliente = document.getElementById("sectionCliente");
        this.ingresarProduct = document.getElementById("btnIngresarCliente");

        this.ingresarProduct.addEventListener.onclick = () => {
            controlador.ingresarCliente(
                cedula = this.cedCliente.value,
                producto = this.prodCliente.value,
                cantidad = this.canProduct.value
            );

            this.ocultar();
        }
    }

    ocultar() {
        this.seccionCliente.hidden = true;
    }

    mostrar() {
        this.seccionCliente.hidden = false;
    }
}