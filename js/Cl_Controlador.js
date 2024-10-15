import { Cl_MTienda } from "./Cl_MTienda.js";
import { Cl_VTienda } from "./Cl_VTienda.js";
import { Cl_MCliente } from "./Cl_MCliente.js";
import { Cl_VCliente } from "./Cl_VCliente.js";

export class Cl_Controlador {
    constructor() {
        this.MTienda = new Cl_MTienda();
        this.VTienda = new Cl_VTienda(this);
        this.VCliente = new Cl_VCliente(this);
        this.mostrarTienda();
        this.VTienda.consultarPrecios();
    }

    mostrarTienda() {
        this.VTienda.mostrar();
        this.VCliente.ocultar();
    }

    mostrarCliente() {
        this.VTienda.ocultar();
        this.VCliente.mostrar();
    }

    ingresarCliente({cedula, producto, cantidad}) {
        let preciosProductos = this.MTienda.preciosProductos();
        let cliente = new Cl_MCliente(cedula, producto, cantidad);  
        cliente.TotalPagar({preciosProductos});
        this.MTienda.procesarCliente(cliente);
        this.VTienda.mostrarReporte({
            cedula: cliente._cedula, 
            producto: cliente._producto, 
            cantidad: cliente._cantidad, 
            totalPagar: cliente.TotalPagar(), 
            masVendido: this.MTienda.masVendido(), 
            totalVendido: this.MTienda.totalVendido()
        });
        this.mostrarTienda();
    }

}