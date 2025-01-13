// File: 00.00-main.js
// Descrizione: File principale per l'inizializzazione dell'applicazione e la gestione dei dati della cantina.

// Funzione per aggiornare la data e l'ora correnti
function updateDateTime() {
    const dataOraInput = document.getElementById('data-ora');
    if (dataOraInput) {
        // Rimuovi l'attributo disabled temporaneamente
        dataOraInput.removeAttribute('disabled');

        const now = new Date();
        const formattedDateTime = now.toLocaleString('it-IT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        dataOraInput.value = formattedDateTime;

        // Riabilita l'attributo disabled
        dataOraInput.setAttribute('disabled', true);

        console.log(`Data e ora aggiornate: ${formattedDateTime}`);
    } else {
        console.error("Elemento 'data-ora' non trovato. Verifica che l'ID sia corretto.");
    }
}

// Funzione per aggiornare i valori della cantina
function updateCantinaValues() {
    const cantinaTempInput = document.getElementById('cantina-temp');
    const cantinaHumidityInput = document.getElementById('cantina-humidity');

    if (!cantinaTempInput || !cantinaHumidityInput) {
        console.error("Elementi della cantina non trovati. Verifica che gli ID siano corretti.");
        return;
    }

    // Rimuovi l'attributo disabled temporaneamente
    cantinaTempInput.removeAttribute('disabled');
    cantinaHumidityInput.removeAttribute('disabled');

    // Valori fissi per il debug (sostituirli con la logica della stagione in seguito)
    const randomTemp = 18.5; // Valore fisso per il debug
    const randomHumidity = 65.0; // Valore fisso per il debug

    // Assegna i valori ai campi di input
    cantinaTempInput.value = randomTemp;
    cantinaHumidityInput.value = randomHumidity;

    // Riabilita l'attributo disabled
    cantinaTempInput.setAttribute('disabled', true);
    cantinaHumidityInput.setAttribute('disabled', true);

    console.log(`Valori della cantina aggiornati: Temp: ${randomTemp}°C, Umidità: ${randomHumidity}%`);
}

// Funzione di inizializzazione globale
function initializeApp() {
    console.log("Applicazione inizializzata.");
    updateDateTime(); // Aggiorna la data e l'ora correnti
    updateCantinaValues(); // Aggiorna i valori della cantina

    // Simula l'aggiornamento dei dati ogni 5 secondi (per testing)
    setInterval(() => {
        updateDateTime();
        updateCantinaValues();
    }, 5000);
}

// Avvia l'applicazione
document.addEventListener('DOMContentLoaded', initializeApp);
