## Pseudo-code

1. **Selezionare gli Elementi del DOM**:
   - Seleziona il bottone (`generateGridButton`) che attiverà la generazione della griglia.
   - Seleziona il contenitore (`gridContainer`) dove verrà visualizzata la griglia.

2. **Funzione per Generare la Griglia**:
   - **Pulire la Griglia Esistente**:
     - Prima di generare una nuova griglia, pulisce il `gridContainer` per rimuovere eventuali celle esistenti.
   - **Creare le Celle**:
     - Ciclo da 1 a 100 per creare 100 celle.
     - Per ogni iterazione:
       - Crea un nuovo elemento `div` che rappresenta una cella.
       - Assegna la classe `cell` al `div`.
       - Imposta il contenuto della cella al numero dell'iterazione corrente.
       - Aggiunge un event listener per il click sulla cella:
         - Cambia il colore di sfondo della cella in azzurro aggiungendo la classe `blue`.
         - Registra il numero della cella nella console.
       - Aggiunge la cella al `gridContainer`.

3. **Aggiungere Event Listener al Bottone**:
   - Aggiunge un event listener per il click sul `generateGridButton` che chiama la funzione `generateGrid` quando cliccato.