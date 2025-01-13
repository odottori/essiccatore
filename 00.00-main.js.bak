// File: 00.00-main.js
// Descrizione: Script principale per la simulazione stagionale e il controllo dell'essiccatore.

// Funzione per ottenere i range stagionali di temperatura e umidità
function getSeasonalRanges() {
    const month = new Date().getMonth(); // 0 = Gennaio, 11 = Dicembre
    let ranges = {};

    if ([11, 0, 1].includes(month)) { // Inverno
        ranges = { tempMin: 8, tempMax: 15, humMin: 70, humMax: 85 };
    } else if ([2, 3, 4].includes(month)) { // Primavera
        ranges = { tempMin: 10, tempMax: 20, humMin: 60, humMax: 75 };
    } else if ([5, 6, 7].includes(month)) { // Estate
        ranges = { tempMin: 18, tempMax: 25, humMin: 50, humMax: 65 };
    } else if ([8, 9, 10].includes(month)) { // Autunno
        ranges = { tempMin: 12, tempMax: 18, humMin: 65, humMax: 80 };
    }

    return ranges;
}

// Funzione per aggiornare i valori della cantina
function updateCantinaValues() {
    const cantinaTempInput = document.getElementById('cantina-temp');
    const cantinaHumidityInput = document.getElementById('cantina-humidity');

    if (!cantinaTempInput || !cantinaHumidityInput) {
        console.error("Elementi della cantina non trovati. Verifica che gli ID siano corretti.");
        return;
    }

    // Ottieni gli intervalli stagionali
    const ranges = getSeasonalRanges();

    // Genera valori casuali basati sugli intervalli stagionali
    const randomTemp = (Math.random() * (ranges.tempMax - ranges.tempMin) + ranges.tempMin).toFixed(1);
    const randomHumidity = (Math.random() * (ranges.humMax - ranges.humMin) + ranges.humMin).toFixed(1);

    cantinaTempInput.removeAttribute('disabled');
    cantinaHumidityInput.removeAttribute('disabled');

    cantinaTempInput.value = randomTemp;
    cantinaHumidityInput.value = randomHumidity;

    cantinaTempInput.setAttribute('disabled', true);
    cantinaHumidityInput.setAttribute('disabled', true);

    console.log(`Valori stagionali aggiornati: Temp: ${randomTemp}°C, Umidità: ${randomHumidity}%`);
}

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

// Funzione per simulare l'essiccatore
function simulateEssiccatore() {
    const simulatorToggle = document.getElementById('toggle-fridge-simulator');
    const essiccatoreTempInput = document.getElementById('current-temp');
    const essiccatoreHumidityInput = document.getElementById('current-humidity');
    const cantinaTemp = parseFloat(document.getElementById('cantina-temp').value);
    const cantinaHumidity = parseFloat(document.getElementById('cantina-humidity').value);
    const heatingStep = parseFloat(document.getElementById('temp-increase').value); // Step in gradi
    const heatingTimeStep = parseFloat(document.getElementById('heating-time-step').value) * 1000; // Step in ms

    if (!simulatorToggle || simulatorToggle.textContent.includes("SPENTO")) {
        console.log("Simulatore disattivato.");
        return;
    }

    if (!essiccatoreTempInput || !essiccatoreHumidityInput) {
        console.error("Elementi dell'essiccatore non trovati. Verifica che gli ID siano corretti.");
        return;
    }

    let essiccatoreTemp = parseFloat(essiccatoreTempInput.value);
    let essiccatoreHumidity = parseFloat(essiccatoreHumidityInput.value);

    // Simula il riscaldamento dell'essiccatore
    const heatingInterval = setInterval(() => {
        if (essiccatoreTemp < cantinaTemp) {
            essiccatoreTemp = Math.min(essiccatoreTemp + heatingStep, cantinaTemp);
            essiccatoreTempInput.value = essiccatoreTemp.toFixed(1);
        } else {
            clearInterval(heatingInterval);
        }
    }, heatingTimeStep);

    // Sincronizza l'umidità dell'essiccatore con la cantina
    essiccatoreHumidityInput.value = cantinaHumidity.toFixed(1);

    console.log(`Essiccatore aggiornato: Temp: ${essiccatoreTemp}°C, Umidità: ${essiccatoreHumidity}%`);
}

// Funzione per simulare il frigo
function simulateFrigo() {
    const fridgeToggle = document.getElementById('toggle-fridge');
    const fridgeLed = document.getElementById('fridge-led');
    const essiccatoreTempInput = document.getElementById('current-temp');
    const coolingStep = parseFloat(document.getElementById('temp-decrease').value); // Step in gradi
    const coolingTimeStep = parseFloat(document.getElementById('cooling-time-step').value) * 1000; // Step in ms

    if (!fridgeToggle || !essiccatoreTempInput || !fridgeLed) {
        console.error("Elementi del frigo non trovati. Verifica che gli ID siano corretti.");
        return;
    }

    let essiccatoreTemp = parseFloat(essiccatoreTempInput.value);
    const minTemp = parseFloat(document.getElementById('simulator-tmin').value); // Temp minima dell'essiccatore

    if (fridgeToggle.textContent.includes("SPENTO")) {
        fridgeLed.style.backgroundColor = "gray"; // Frigo disattivato
        console.log("Frigo spento.");
        return;
    }

    if (essiccatoreTemp > minTemp) {
        fridgeLed.style.backgroundColor = "green"; // Compressore acceso
        const coolingInterval = setInterval(() => {
            if (essiccatoreTemp > minTemp) {
                essiccatoreTemp = Math.max(essiccatoreTemp - coolingStep, minTemp);
                essiccatoreTempInput.value = essiccatoreTemp.toFixed(1);
            } else {
                clearInterval(coolingInterval);
                fridgeLed.style.backgroundColor = "red"; // Compressore spento
            }
        }, coolingTimeStep);
    } else {
        fridgeLed.style.backgroundColor = "red"; // Compressore spento
    }

    console.log(`Frigo aggiornato: Temp: ${essiccatoreTemp}°C`);
}

// Funzione di inizializzazione globale
function initializeApp() {
    console.log("Applicazione inizializzata.");
    updateDateTime(); // Aggiorna la data e l'ora correnti
    updateCantinaValues(); // Aggiorna i valori della cantina

    setInterval(() => {
        updateDateTime();
        updateCantinaValues();
        simulateEssiccatore();
        simulateFrigo();
    }, 5000); // Aggiorna ogni 5 secondi
}

document.addEventListener('DOMContentLoaded', initializeApp);
