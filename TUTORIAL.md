# Counter DApp Tutorial (Step by Step)

## 1. Clone & Install
```bash
git clone <repo-url>
cd Counter_Dapp
npm install
```

## 2. Start Hardhat Node
```bash
npm run dev
```
This launches a local JSON-RPC network with funded accounts.

## 3. Compile Contracts
```bash
npm run build:sol
```
Artifacts go to `artifacts/`.

## 4. Run Tests
```bash
npm test
```
Should show all passing.

## 5. Deploy Locally
Open a new terminal:
```bash
npm run deploy
```
Copy the printed address.

## 6. Set Frontend Address
In your browser devtools console:
```js
localStorage.setItem('counterAddress', '0x...');
```

## 7. Serve Frontend
```bash
npx serve .
```
Visit the served `counter.html` page. Click + / - and watch logs.

## 8. Event Watching
Open DevTools console; increment/decrement to see events.

## 9. Extending
- Add access control
- Add batch operations
- Port to React
- Write subgraph for events

## 10. Deploy to Testnet
Create `.env` with an RPC + PRIVATE_KEY then add a network in `hardhat.config.js` like:
```js
sepolia: { url: process.env.SEPOLIA_URL, accounts: [process.env.PRIVATE_KEY] }
```
Then:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Troubleshooting
- Delete `hh-cache` if weird behavior
- Reset MetaMask account if nonce issues
- Ensure correct contract address stored in localStorage
