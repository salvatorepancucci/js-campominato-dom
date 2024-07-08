// Seleziona il bottone e il contenitore della griglia dal DOM
const generateGridButton = document.getElementById('generateGrid');
const gridContainer = document.getElementById('gridContainer');

// Funzione per generare la griglia
function generateGrid() {
    // Pulisce il contenitore della griglia
    gridContainer.innerHTML = '';

    // Ciclo per creare 100 celle
    for (let i = 1; i <= 100; i++) {
        // Crea un elemento div per la cella
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;

        // Aggiunge un listener per il click sulla cella
        cell.addEventListener('click', () => {
            cell.classList.add('blue'); // Colora la cella di azzurro
            console.log(`Cella cliccata: ${i}`); // Stampa il numero della cella in console
        });

        // Aggiunge la cella al contenitore della griglia
        gridContainer.appendChild(cell);
    }
}

// Aggiunge un listener per il click sul bottone che genera la griglia
generateGridButton.addEventListener('click', generateGrid);