// File: 00.02-frigo.js
// Descrizione: Gestione delle funzionalità del frigo, con miglioramenti per una gestione più robusta.

import * as common from './00.01-common.js';
import { updateChart } from './00.06-graphModule.js';

export function initFrigo() {
    const toggleFridgeButton = document.getElementById('toggle-fridge');
    const fridgeTminInput = document.getElementById('simulator-tmin');
    const fridgeTmaxInput = document.getElementById('simulator-tmax');

    if (!toggleFridgeButton) {
        console.error('Pulsante di accensione/spegnimento del frigo non trovato.');
        return;
    }

    if (!fridgeTminInput || !fridgeTmaxInput) {
        console.error('Input Tmin o Tmax del frigo non trovato. Verifica che gli ID siano corretti.');
        return;
    }

    // Gestione del pulsante di accensione/spegnimento
    toggleFridgeButton.addEventListener('click', () => {
        const isOn = toggleFridgeButton.classList.toggle('ACCESO');
        toggleFridgeButton.innerHTML = `<i class="fas fa-power-off"></i> ${isOn ? 'ACCESO' : 'SPENTO'}`;
        common.updateLog(`FRIGO ${isOn ? 'acceso' : 'spento'}`);
    });

    // Gestione degli input Tmin e Tmax
    fridgeTminInput.addEventListener('change', (e) => {
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue) || newValue < 0 || newValue > 99.99) {
            console.error(`Valore non valido per Tmin: ${e.target.value}`);
            e.target.value = e.target.defaultValue;
            return;
        }
        common.updateLog(`FRIGO Tmin aggiornato a: ${newValue}`);
        updateChart(/* aggiorna i dati pertinenti */);
    });

    fridgeTmaxInput.addEventListener('change', (e) => {
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue) || newValue < 0 || newValue > 99.99) {
            console.error(`Valore non valido per Tmax: ${e.target.value}`);
            e.target.value = e.target.defaultValue;
            return;
        }
        common.updateLog(`FRIGO Tmax aggiornato a: ${newValue}`);
        updateChart(/* aggiorna i dati pertinenti */);
    });
}
