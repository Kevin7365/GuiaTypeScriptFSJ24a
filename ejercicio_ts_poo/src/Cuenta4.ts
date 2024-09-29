export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipo: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipo: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente: $${monto}. Saldo actual: $${this.cantidad}`);
        }
    }

    retirar(valor: number): void {
        if (this.cantidad <= 0) {
            console.log("No hay saldo en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00.");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipo}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}

