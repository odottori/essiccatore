// File: updated_main.js
// Descrizione: File principale per l'inizializzazione dell'applicazione e la gestione dei dati della cantina.

// Funzione per aggiornare la data e l'ora correnti
function updateDateTime() {
    const dataOraInput = document.getElementById('data-ora');
    if (dataOraInput) {
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

    if (cantinaTempInput && cantinaHumidityInput) {
        cantinaTempInput.removeAttribute('disabled');
        cantinaHumidityInput.removeAttribute('disabled');

        const randomTemp = (18 + Math.random() * 2).toFixed(1); // Valore casuale tra 18.0 e 20.0
        const randomHumidity = (65 + Math.random() * 5).toFixed(1); // Valore casuale tra 65.0 e 70.0

        cantinaTempInput.value = randomTemp;
        cantinaHumidityInput.value = randomHumidity;

        cantinaTempInput.setAttribute('disabled', true);
        cantinaHumidityInput.setAttribute('disabled', true);

        console.log(`Valori della cantina aggiornati: Temp: ${randomTemp}°C, Umidità: ${randomHumidity}%`);
    } else {
        console.error("Elementi della cantina non trovati. Verifica che gli ID siano corretti.");
    }
}

// Funzione di inizializzazione globale
function initializeApp() {
    console.log("Applicazione inizializzata.");
    updateDateTime(); // Aggiorna la data e l'ora correnti
    updateCantinaValues(); // Aggiorna i valori della cantina

    setInterval(() => {
        updateDateTime();
        updateCantinaValues();
    }, 5000); // Aggiorna ogni 5 secondi
}

document.addEventListener('DOMContentLoaded', initializeApp);
