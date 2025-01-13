// File: 00.05-ventilazione.js
// Descrizione: Gestione delle funzionalità della ventilazione, con miglioramenti per robustezza e usabilità.

import * as common from './00.01-common.js';

export function initVentilazione() {
    const toggleVentilazioneButton = document.getElementById('toggle-ventilazione');
    const ventilazioneParamInput = document.getElementById('ventilazione-param');

    if (!toggleVentilazioneButton) {
        console.error('Pulsante di accensione/spegnimento della ventilazione non trovato.');
        return;
    }

    if (!ventilazioneParamInput) {
        console.error('Input per il parametro di ventilazione non trovato. Verifica che l'ID sia corretto.');
        return;
    }

    // Gestione del pulsante di accensione/spegnimento
    toggleVentilazioneButton.addEventListener('click', () => {
        const isOn = toggleVentilazioneButton.classList.toggle('ACCESO');
        toggleVentilazioneButton.innerHTML = `<i class="fas fa-power-off"></i> ${isOn ? 'ACCESA' : 'SPENTA'}`;
        common.updateLog(`VENTILAZIONE ${isOn ? 'accesa' : 'spenta'}`);
    });

    // Gestione dell'input del parametro
    ventilazioneParamInput.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (!['temperature', 'humidity'].includes(selectedValue)) {
            console.error(`Valore non valido per il parametro della ventilazione: ${selectedValue}`);
            e.target.value = 'temperature'; // Valore predefinito
            return;
        }
        common.updateLog(`VENTILAZIONE reagisce a: ${selectedValue === 'temperature' ? 'Temperatura' : 'Umidità'}`);
    });
}
