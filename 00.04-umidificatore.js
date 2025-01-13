// File: 00.04-umidificatore.js
// Descrizione: Gestione delle funzionalità dell'umidificatore, con ottimizzazioni per la robustezza.

import * as common from './00.01-common.js';

export function initUmidificatore() {
    const toggleUmidificatoreButton = document.getElementById('toggle-umidificatore');
    const portataUmidificatoreInput = document.getElementById('portata-umidificatore');

    if (!toggleUmidificatoreButton) {
        console.error('Pulsante di accensione/spegnimento dell'umidificatore non trovato.');
        return;
    }

    if (!portataUmidificatoreInput) {
        console.error('Input per la portata dell'umidificatore non trovato. Verifica che l'ID sia corretto.');
        return;
    }

    // Gestione del pulsante di accensione/spegnimento
    toggleUmidificatoreButton.addEventListener('click', () => {
        const isOn = toggleUmidificatoreButton.classList.toggle('ACCESO');
        toggleUmidificatoreButton.innerHTML = `<i class="fas fa-power-off"></i> ${isOn ? 'ACCESO' : 'SPENTO'}`;
        common.updateLog(`UMIDIFICATORE ${isOn ? 'acceso' : 'spento'}`);
    });

    // Gestione dell'input della portata
    portataUmidificatoreInput.addEventListener('change', (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue) || newValue < 50 || newValue > 500) {
            console.error(`Valore non valido per la portata dell'umidificatore: ${e.target.value}`);
            e.target.value = e.target.defaultValue;
            return;
        }
        common.updateLog(`Portata UMIDIFICATORE aggiornata a: ${newValue} ml/h`);
    });
}
