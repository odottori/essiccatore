// File: 00.03-deumidificatore.js
// Descrizione: Gestione delle funzionalità del deumidificatore, con correzioni per la robustezza.

import * as common from './00.01-common.js';

export function initDeumidificatore() {
    const toggleDeumidificatoreButton = document.getElementById('toggle-deumidificatore');
    const potenzaDeumidificatoreInput = document.getElementById('potenza-deumidificatore');

    if (!toggleDeumidificatoreButton) {
        console.error('Pulsante di accensione/spegnimento del deumidificatore non trovato.');
        return;
    }

    if (!potenzaDeumidificatoreInput) {
        console.error('Input per la potenza del deumidificatore non trovato. Verifica che l'ID sia corretto.');
        return;
    }

    // Gestione del pulsante di accensione/spegnimento
    toggleDeumidificatoreButton.addEventListener('click', () => {
        const isOn = toggleDeumidificatoreButton.classList.toggle('ACCESO');
        toggleDeumidificatoreButton.innerHTML = `<i class="fas fa-power-off"></i> ${isOn ? 'ACCESO' : 'SPENTO'}`;
        common.updateLog(`DEUMIDIFICATORE ${isOn ? 'acceso' : 'spento'}`);
    });

    // Gestione dell'input della potenza
    potenzaDeumidificatoreInput.addEventListener('change', (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue) || newValue < 50 || newValue > 500) {
            console.error(`Valore non valido per la potenza del deumidificatore: ${e.target.value}`);
            e.target.value = e.target.defaultValue;
            return;
        }
        common.updateLog(`Potenza DEUMIDIFICATORE aggiornata a: ${newValue} W`);
    });
}
