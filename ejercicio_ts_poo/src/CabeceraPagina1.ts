export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }

    alinearTitulo(align: 'centro' | 'derecha' | 'izquierda'): void {
        console.log(`El título aparecerá alineado a: ${align}`);
    }

    imprimirPropiedades(): void {
        this.obtenerPropiedades();
    }
}
