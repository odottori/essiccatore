# Documentazione Descrittiva del Sistema Essiccatore per Salumi

## Introduzione
Il **Sistema Essiccatore per Salumi** è un'applicazione web che simula e controlla un ambiente di essiccazione per salumi, gestendo temperatura e umidità attraverso dispositivi come il frigo, l'umidificatore, il deumidificatore e il ventilatore. Il sistema è controllato da un'unità centrale **Theremino DIL-V5**, che gestisce i dispositivi tramite relè e riceve dati da sensori di temperatura e umidità. L'interfaccia web permette il monitoraggio e il controllo remoto del sistema.

## Componenti del Sistema
### 1. Sensori
- **Sensore per la Cantina**: Monitora la temperatura e l'umidità ambientali della cantina.
- **Sensori per la Scatola FRIGO**: Due sensori posizionati strategicamente per garantire uniformità delle condizioni.

### 2. Dispositivi Controllati
- **Frigo**: Mantiene la temperatura entro un intervallo specifico.
- **Umidificatore**: Aumenta l'umidità quando scende sotto una soglia minima.
- **Deumidificatore**: Riduce l'umidità quando supera una soglia massima.
- **Ventilatore**: Mantiene un flusso d'aria costante.

### 3. Unità Centrale (Theremino DIL-V5)
- Gestisce i dispositivi tramite relè e riceve dati dai sensori.
- Comunica con l'applicazione web tramite USB.

### 4. Applicazione Web
- **Funzionalità**:
  - Visualizzazione in tempo reale della temperatura e dell'umidità.
  - Impostazione delle soglie di temperatura e umidità.
  - Controllo manuale dei dispositivi.
  - Log degli eventi e esportazione dei dati.

## Schema di Funzionamento
1. **Monitoraggio**: I sensori inviano dati in tempo reale alla Theremino DIL-V5.
2. **Elaborazione**: La Theremino elabora i dati e decide se attivare o disattivare i dispositivi.
3. **Controllo**: I relè attivano o disattivano i dispositivi per mantenere le condizioni ottimali.
4. **Visualizzazione**: L'applicazione web mostra i dati in tempo reale e permette all'utente di intervenire manualmente.

## Ridondanza e Affidabilità
- **Sensori**: Due sensori nella scatola FRIGO garantiscono affidabilità.
- **Dispositivi**: Monitoraggio dello stato e allarmi in caso di guasti.

## Conclusione
Il sistema è progettato per garantire condizioni ottimali di temperatura e umidità per l'essiccazione dei salumi, con un'interfaccia web intuitiva per il monitoraggio e il controllo.
