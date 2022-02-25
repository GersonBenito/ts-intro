/*
    ===== Código de TypeScript =====
*/
let habilidades: (string | number | boolean)[] = ['Bash','Countes', 100, true]; // el arreglo puede ser de tipo string o numerico o booleano

let habilidad: string[] = ['Bash', 'Counter', 'Healing']; // arreglo de tipo string

// creando una interfaz para tener nuestro propio modelo de datos 
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // la propieda es opcional
}

const personaje: Personaje = {
    nombre: 'Gerson Benito',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);

