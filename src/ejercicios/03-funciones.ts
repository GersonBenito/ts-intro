/*
    ===== Código de TypeScript =====
*/

// funcion es5
function sumar(a: number, b: number): number { //retornar numeros

    return a + b;

}

// funcion es6
const sumarNumeros = (a: number, b: number): number => {
    return a + b;
}

// parametros opciones y por defectos
const multiplicar = (numero1: number, numero2?: number, base: number = 2): number =>{
    return numero1 * base;
}

const resultado = multiplicar(5, 0, 10);
console.log(resultado);


// funciones con objetos como argumento
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

// la funcion no retorna nada, debido a eso se le coloca que es de tipo void
const currar = (personaje: PersonajeLOR, curarX: number): void =>{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Gerson Benito',
    pv: 50,
    mostrarHp(){
        console.log('puntos de vida: ', this.pv); //hace referencia al objeto con el this
    }
}

currar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
