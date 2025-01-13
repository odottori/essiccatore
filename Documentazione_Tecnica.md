# Documentazione Tecnica del Sistema Essiccatore per Salumi

## Algoritmi di Simulazione
### Simulazione della Temperatura e Umidità
- **Temperatura**: La temperatura viene simulata incrementando il valore corrente di 0.1°C ogni 5 secondi.
- **Umidità**: L'umidità viene simulata decrementando il valore corrente di 0.1% ogni 5 secondi.
- **Cantina**: La temperatura e l'umidità della cantina vengono simulate con incrementi/decrementi più piccoli (0.05°C e 0.05% ogni 5 secondi).

### Simulazione della Stagionalità
- I valori della cantina vengono generati in base alla stagione corrente, con intervalli predefiniti per temperatura e umidità.

## Struttura del Codice
### File JavaScript
- **00.00-main.js**: File principale che inizializza l'applicazione e gestisce il flusso generale.
- **00.01-common.js**: Funzioni comuni utilizzate da più moduli.
- **00.02-frigo.js**: Gestione delle funzionalità del FRIGO.
- **00.03-deumidificatore.js**: Gestione delle funzionalità del DEUMIDIFICATORE.
- **00.04-umidificatore.js**: Gestione delle funzionalità dell'UMIDIFICATORE.
- **00.05-ventilazione.js**: Gestione delle funzionalità della VENTILAZIONE.
- **00.06-graphModule.js**: Gestione del grafico di temperatura e umidità.

### Funzioni Principali
- **initializeApp()**: Inizializza l'applicazione, configurando eventi comuni, grafico e dispositivi.
- **updateGraphData()**: Aggiorna i dati del grafico con i valori correnti di temperatura e umidità.
- **updateCantinaValues()**: Aggiorna i valori della cantina in base alla stagione corrente.

## Configurazione Hardware
### Sensori
- **Sensore per la Cantina**: Collocato in un punto rappresentativo della cantina.
- **Sensori per la Scatola FRIGO**: Due sensori posizionati in punti strategici.

### Dispositivi Controllati
- **Frigo**: Mantiene la temperatura entro un intervallo specifico.
- **Umidificatore**: Aumenta l'umidità quando scende sotto una soglia minima.
- **Deumidificatore**: Riduce l'umidità quando supera una soglia massima.
- **Ventilatore**: Mantiene un flusso d'aria costante.

### Unità Centrale (Theremino DIL-V5)
- **16 ingressi analogici**: Sufficienti per gestire i 3 sensori.
- **16 uscite digitali**: Sufficienti per gestire i 4 relè.

## Estensibilità
Il sistema può essere esteso aggiungendo nuovi dispositivi o migliorando gli algoritmi di simulazione.