# SmartContractToken-ERC20

# notJToken Project

Questo progetto è un esempio di contratto ERC20 che include un limite massimo (cap) e una ricompensa per blocco (block reward). Utilizza OpenZeppelin per le implementazioni standard di ERC20 e Hardhat per la gestione dello sviluppo e del testing.

## Prerequisiti

Assicurati di avere installato [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/get-npm).

## Installazione

1. Inizializza un nuovo progetto npm:
    ```bash
    npm init
    ```

2. Installa Hardhat come dipendenza di sviluppo:
    ```bash
    npm i --save-dev hardhat
    ```

3. Inizializza Hardhat nel progetto:
    ```bash
    npx hardhat init
    ```

4. Installa i contratti OpenZeppelin:
    ```bash
    npm i @openzeppelin/contracts
    ```

5. Compila i contratti:
    ```bash
    npx hardhat compile
    ```

6. Installa dotenv per la gestione delle variabili d'ambiente:
    ```bash
    npm i dotenv
    ```

## Struttura del Progetto

Il progetto contiene i seguenti file e directory principali:

- `contracts/`: contiene i contratti Solidity.
  - `notJToken.sol`: il contratto principale ERC20 con cap e block reward.
- `scripts/`: script per distribuire il contratto.
- `test/`: contiene i test per il contratto.
  - `notJToken.js`: script di test per il contratto `notJToken`.

## Contratto notJToken

Il contratto `notJToken` è un'implementazione di un token ERC20 che include:
- Un cap (limite massimo) sulla fornitura totale di token.
- Una ricompensa per blocco che viene assegnata ai miner.

### Distribuzione del Contratto

Per distribuire il contratto, puoi utilizzare uno script di distribuzione in `scripts/deploy.js`. Assicurati di configurare le variabili d'ambiente nel file `.env` se necessario.

### Test

Il progetto include test scritti con Chai e Hardhat. Per eseguire i test, utilizza il comando:
```bash
npx hardhat test
