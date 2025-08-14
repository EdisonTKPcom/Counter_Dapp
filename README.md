# Counter DApp 🚀

<p align="center">
    <a href="#" target="_blank"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" /></a>
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
    <img alt="Built with Solidity" src="https://img.shields.io/badge/Solidity-^0.8.x-363636" />
    <img alt="ethers.js" src="https://img.shields.io/badge/ethers.js-6.x-purple" />
</p>

> Minimal, audited-style example of a production-ready Counter smart contract + vanilla frontend. Fork it, learn from it, and build on it.

If this project helps you learn Web3 or speeds up a hackathon prototype:

👉 Please **Star** the repo (it really helps!)  
👉 Consider **Forking** to extend it  
👉 Follow the author for more templates & patterns  
👉 Support via sponsorship (see below) 💖
## ✨ Features

- Clean, modern Solidity ^0.8.x contract (`Counter`) with events
- Gas-optimized increment/decrement using `unchecked` blocks where safe
- Backward compatibility layer (`incr`, `decr`, `display`) for older tutorials

## 🛠 Getting Started
### Compile the Smart Contract

```bash
npm run build:sol
```

Artifacts land in `artifacts/` (Hardhat JSON + ABI + bytecode).
If you previously used the legacy solc script, you can delete the old `build/` folder.
### Deploy the Contract

Start a local Hardhat node in a separate terminal: `npm run dev` (defaults to `http://localhost:8545`).

```bash
npm run deploy
```

Copy the deployed address printed in the console, then in the browser devtools run:

```js
localStorage.setItem('counterAddress', '0xYOUR_DEPLOYED_ADDRESS');
```

Reload `counter.html`.
### Run the Frontend

Serve the static files (any simple server works):

```bash
npx serve .
```

Open `http://localhost:3000/counter.html` (or whichever port `serve` prints). MetaMask will prompt for account access.
## 🧪 Testing

Run the included Hardhat test suite:

```bash
npm test
```

It validates:
- Initial count = 0
- Increment -> 1
- Decrement -> 0
- Revert on decrement at zero
## 📜 Smart Contract Details

Core public interface:

```solidity
function getCount() external view returns (uint256);
function increment() external;
function decrement() external; // reverts if already zero
```

Events:

```solidity
event Incremented(uint256 newValue);
event Decremented(uint256 newValue);
```

Legacy compatibility (still callable): `incr()`, `decr()`, `display()`.
## 🚀 Extending Ideas

- Add ownership (e.g. OpenZeppelin Ownable) restricting decrement
- Add batch increment function
- Expose events via a small Graph / subgraph
- Wrap UI with React / Next.js
- Convert to ERC20-like supply model for learning

Open an issue to discuss ideas—collaboration welcome.

## 🤝 Contributing

1. Fork
2. Create a feature branch: `git checkout -b feat/your-idea`
3. Commit changes: `git commit -m 'feat: add your idea'`
4. Push: `git push origin feat/your-idea`
5. Open a Pull Request

Please run `npm test` before submitting.

## ❤️ Support / Sponsor

If you find this helpful, you can:

- Star & share the repo
- Follow for more templates
- Sponsor coffee / development time (add your preferred platform link here)

Your support accelerates more open-source learning repos.
## 📦 Dependencies

- `ethers.js`: Contract interaction
- `hardhat`: Development environment
- `solc` (via Hardhat): Compilation
## 📄 License

MIT — free to use. See [LICENSE](LICENSE) (add file if missing).

---

Made with ❤️ for the Web3 community. If you build something cool with this, drop a link in Issues.

<!-- Legacy detailed tutorial content removed for brevity; see TUTORIAL.md for a full step-by-step guide. -->
