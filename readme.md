## Pseudo-code

4. **Passaggi logici**:
   - Selezionare il bottone e il contenitore della griglia dal DOM.
   - Definire una funzione per generare 16 numeri casuali unici (bombe) nel range 1-100.
   - Definire una funzione per generare e visualizzare la griglia.
     - Pulire il contenitore della griglia.
     - Generare i numeri delle bombe.
     - Ciclo per creare 100 celle, assegnando un numero a ciascuna.
     - Aggiungere un listener per il click su ciascuna cella.
       - Se la cella contiene una bomba, colorarla di rosso e terminare la partita.
       - Altrimenti, colorarla di azzurro e incrementare il punteggio.
       - Terminare la partita se tutte le celle non-bomba sono state rivelate.
   - Definire una funzione per disabilitare la griglia dopo la fine della partita.
   - Aggiungere un listener al bottone per generare la griglia al click.