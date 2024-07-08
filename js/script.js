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

// Funzione per generare la griglia
function generateGrid() {
    // Pulisce il contenitore della griglia
    gridContainer.innerHTML = '';
    bombe = generaBombe(16, 100);
    punteggio = 0;

    console.log('Bombe generate: ', bombe); // Per debugging

    // Ciclo per creare 100 celle
    for (let i = 1; i <= 100; i++) {
        // Crea un elemento div per la cella
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;
}