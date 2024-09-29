abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorEdad(): void {
        const mensaje = this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
        console.log(mensaje);
    }

    abstract mostrarDatosPersonales(): void;
}

export class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: ${this.sueldo}`);
    }

    mostrarDatosPersonales(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}

