// File: 00.06-graphModule.js
// Descrizione: Modulo per la gestione del grafico di temperatura e umidità, con miglioramenti per la robustezza.

import Chart from 'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.js';

let chart = null;

// Funzione per inizializzare il grafico
export function initializeChart() {
    const ctx = document.getElementById('graph-canvas');
    if (!ctx) {
        console.error('Elemento canvas per il grafico non trovato. Verifica che l'ID "graph-canvas" sia corretto nell'HTML.');
        return;
    }

    chart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: [], // Etichette temporali
            datasets: [
                {
                    label: 'Temperatura (°C)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    data: [],
                    tension: 0.4,
                },
                {
                    label: 'Umidità (%)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    data: [],
                    tension: 0.4,
                },
                {
                    label: 'Temperatura Cantina (°C)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    data: [],
                    tension: 0.4,
                },
                {
                    label: 'Umidità Cantina (%)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    data: [],
                    tension: 0.4,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute',
                        tooltipFormat: 'HH:mm:ss',
                    },
                    title: {
                        display: true,
                        text: 'Orario',
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valori Misurati',
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
    });
}

// Funzione per aggiornare il grafico
export function updateChart(temperature, humidity, cantinaTemperature, cantinaHumidity) {
    if (!chart) {
        console.error('Grafico non inizializzato. Assicurati che initializeChart() sia stato chiamato.');
        return;
    }

    const now = new Date();
    chart.data.labels.push(now.toLocaleTimeString());

    // Aggiorna i dati dei dataset
    chart.data.datasets[0].data.push(temperature);
    chart.data.datasets[1].data.push(humidity);
    chart.data.datasets[2].data.push(cantinaTemperature);
    chart.data.datasets[3].data.push(cantinaHumidity);

    // Mantieni massimo 50 punti nel grafico
    if (chart.data.labels.length > 50) {
        chart.data.labels.shift();
        chart.data.datasets.forEach(dataset => dataset.data.shift());
    }

    chart.update();
}
