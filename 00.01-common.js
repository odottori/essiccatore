// File: 00.01-common.js
// Descrizione: Funzioni comuni utilizzate in vari moduli.

export function updateLog(message) {
    const logContainer = document.getElementById('log-container');
    if (!logContainer) {
        console.error('Log container non trovato. Verifica che l'ID "log-container" esista nell'HTML.');
        return;
    }

    const logEntry = document.createElement('p');
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll
}

export function setupCommonEvents() {
    // Configura eventi comuni, ad esempio pulsanti di reset
    const resetIcons = document.querySelectorAll('.reset-icon');
    if (resetIcons.length === 0) {
        console.warn('Nessuna icona di reset trovata. Verifica che gli elementi con la classe "reset-icon" siano presenti.');
    }

    resetIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (input) {
                input.value = input.defaultValue;
                updateLog(`Valore di ${targetId} ripristinato`);
            } else {
                console.error(`Elemento con ID "${targetId}" non trovato.`);
            }
        });
    });

    // Pulisci Log
    const clearLogButton = document.getElementById('clear-log');
    if (clearLogButton) {
        clearLogButton.addEventListener('click', () => {
            const logContainer = document.getElementById('log-container');
            if (logContainer) {
                logContainer.innerHTML = '<p>Log vuoto...</p>';
                updateLog('Log pulito');
            } else {
                console.error('Log container non trovato per la pulizia.');
            }
        });
    } else {
        console.warn('Bottone "Pulisci Log" non trovato.');
    }

    // Esporta Log (simulato)
    const exportLogButton = document.getElementById('export-log');
    if (exportLogButton) {
        exportLogButton.addEventListener('click', () => {
            const logEntries = document.querySelectorAll('#log-container p');
            if (logEntries.length === 0) {
                console.warn('Nessun log da esportare.');
                return;
            }

            let logText = '';
            logEntries.forEach(entry => {
                logText += entry.textContent + '\n';
            });
            console.log('Log esportato:\n', logText); // Simula l'esportazione
            updateLog('Log esportato');
        });
    } else {
        console.warn('Bottone "Esporta Log" non trovato.');
    }
}
