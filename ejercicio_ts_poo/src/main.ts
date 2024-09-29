import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {CabeceraPagina} from './CabeceraPagina1.ts'
import { Calculadora } from './Calculadora2.ts'
import { Cancion } from './Cancion3.ts'
import { Cuenta } from './Cuenta4.ts'
import { Empleado } from './Persona5.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

/**Ejercicio 1: cabecera pagina**/
const cabecera = new CabeceraPagina("Mi Página", "Azul", "Arial");
cabecera.obtenerPropiedades();
cabecera.alinearTitulo("centro");
cabecera.imprimirPropiedades();

/**Ejercicio 2: calculadora**/
const calc = new Calculadora();
console.log(calc.sumar(540, 380));
console.log(calc.restar(175, 70));
console.log(calc.multiplicar(8, 7));
console.log(calc.dividir(1500, 2));
console.log(calc.potencia(2, 14));
console.log(calc.factorial(6));

/**Ejercicio 3: cancion**/
const cancion = new Cancion("Imagine", "Rock");
cancion.setAutor("John Lennon");
cancion.mostrarDatos();

/**Ejercicio 4: Cuenta**/
const cuenta = new Cuenta("Carlos Pérez", 100, "Ahorros", "12345678");
cuenta.mostrarDatos();
cuenta.depositar(20);
cuenta.retirar(15);

/**Ejercicio 5: Persona**/
const empleado = new Empleado("Laura", "González", "Calle 123", "555-5555", 30, 1500);
empleado.mostrarDatosPersonales();
empleado.esMayorEdad();
empleado.imprimirSueldo();
