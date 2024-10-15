export class Cl_VTienda {
    constructor(controlador) {
        this.tabla = document.getElementById("table");
        this.spamMasVendido = document.getElementById("spamMasVendido");
        this.spamTotalVendido = document.getElementById("spamTotalVendido");
        this.seccionTienda = document.getElementById("sectionTienda");
        this.ingresarClienteNuevo = document.getElementById("btnIngresarClienteNuevo");
        this.ingresarClienteNuevo.addEventListener("click", () => {
            controlador.mostrarCliente();
        });
        this.preciosA = " ";
        this.preciosB = " ";
        this.preciosC = " ";
    }

    consultarPrecios() {
        if (this.preciosA == " " && this.preciosB == " " && this.preciosC == " ") {
            this.preciosA = prompt("Introduce el precio del producto A");
            this.preciosB = prompt("Introduce el precio del Producto B");
            this.preciosC = prompt("Introduce el precio del Producto C");
        }
    }
    preciosProductos() {
        return {
            producA: parseFloat(this.preciosA),
            producB: parseFloat(this.preciosB),
            producC: parseFloat(this.preciosC)
        };
    }

    ocultar() {
        this.seccionTienda.hidden = true;
    }

    mostrar() {
        this.seccionTienda.hidden = false;
    }

    mostrarReporte(cedula, producto, cantidad, totalPagar, masVendido, totalVendido) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>${totalPagar}</td>
        </tr>
        `;

        this.spamMasVendido.innerHTML = `${masVendido}`;
        this.spamTotalVendido.innerHTML = `${totalVendido}`;
    }
}