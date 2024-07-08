// Seleziona il bottone e il contenitore della griglia dal DOM
const generateGridButton = document.getElementById('generateGrid');
const gridContainer = document.getElementById('gridContainer');

let bombe = [];
let punteggio = 0;

// Funzione per generare i numeri delle bombe
function generaBombe(numBombe, rangeMax) {
    const bombe = new Set();
    while (bombe.size < numBombe) {
        const num = Math.floor(Math.random() * rangeMax) + 1;
        bombe.add(num);
    }
    return Array.from(bombe);
}