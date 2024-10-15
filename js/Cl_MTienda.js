export class Cl_MTienda {
    constructor() {
        this.acumTotalPagar = 0;
        this.auxNombreMasVendido = "";
        this.acumTotalVendidoA = 0;
        this.acumTotalVendidoB = 0;
        this.acumTotalVendidoC = 0;
        this.mayor = 0;
    }

    procesarCliente(cliente){
        this.acumTotalPagar += cliente.TotalPagar();

        if (cliente.producto == "A"){
            this.acumTotalVendidoA += cliente.cantidad;
        } else if (cliente.producto == "B"){
            this.acumTotalVendidoB += cliente.cantidad;
        } else if (cliente.producto == "C"){
            this.acumTotalVendidoC += cliente.cantidad;
        }

        if (this.acumTotalVendidoA > this.mayor){
            this.mayor = this.acumTotalVendidoA;
            this.auxNombreMasVendido = "A";
        }
        if (this.acumTotalVendidoB > this.mayor){
            this.mayor = this.acumTotalVendidoB;
            this.auxNombreMasVendido = "B";
        }
        if (this.acumTotalVendidoC > this.mayor){
            this.mayor = this.acumTotalVendidoC;
            this.auxNombreMasVendido = "C";
        }
    }

    masVendido(){
        return this.auxNombreMasVendido;
    }

    totalVendido(){
        return this.acumTotalPagar;
    }
}