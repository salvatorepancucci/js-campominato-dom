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

        // Aggiunge un listener per il click sulla cella
        cell.addEventListener('click', () => {
            if (bombe.includes(i)) {
                cell.classList.add('red'); // Colora la cella di rosso
                alert(`Hai calpestato una bomba! Punteggio: ${punteggio}`);
                disableGrid();
            } else {
                if (!cell.classList.contains('blue')) {
                    cell.classList.add('blue'); // Colora la cella di azzurro
                    punteggio++;
                    if (punteggio === 84) {
                        alert(`Complimenti! Hai vinto! Punteggio: ${punteggio}`);
                        disableGrid();
                    }
                }
            }
            console.log(`Cella cliccata: ${i}`); // Stampa il numero della cella in console
        });

       // Aggiunge la cella al contenitore della griglia
       gridContainer.appendChild(cell);
    } 
}

// Disabilita la griglia dopo la fine della partita
function disableGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}

// Aggiunge un listener per il click sul bottone che genera la griglia
generateGridButton.addEventListener('click', generateGrid);