
# Counter DApp

This project is a simple decentralized application (DApp) that uses Solidity to create a counter smart contract and JavaScript (via web3.js or ethers.js) to interact with the contract. The DApp allows users to increment or decrement the counter, and view the current count.

## Project Structure

- `build/`: Contains build artifacts (if generated) like ABI or compiled contract code.
- `.gitignore`: Defines files that should be ignored by version control (e.g., `node_modules`, build files).
- `README.md`: Project documentation.
- `counter.html`: The front-end user interface for interacting with the contract.
- `counter.sol`: The Solidity smart contract for the counter.
- `deploy.js`: The deployment script for deploying the smart contract to a blockchain (local or live).
- `package.json`: Contains project dependencies and scripts.
- `package-lock.json`: Lock file for npm dependencies.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: For running JavaScript and managing dependencies.
- **npm** or **yarn**: To install project dependencies.
- **Solidity Compiler (solc)**: To compile Solidity code.
- **Ganache** (optional): For a local Ethereum blockchain environment.
- **MetaMask**: Browser extension for Ethereum wallet.

### Install Dependencies

Run the following command to install all required dependencies:

\`\`\`bash
npm install
\`\`\`

### Compiling the Smart Contract

To compile the \`counter.sol\` smart contract, use the following command:

\`\`\`bash
npx solcjs --bin --abi --include-path node_modules/ --base-path . -o build counter.sol
\`\`\`

This command will output the binary (\`.bin\`) and ABI (\`.abi\`) files in the \`build/\` directory.

### Deploying the Contract

To deploy the smart contract to a blockchain (local or live), use the \`deploy.js\` script. Ensure that your local Ethereum environment (like Ganache) or your live network credentials are properly set in the deployment script.

\`\`\`bash
node deploy.js
\`\`\`

Once deployed, note down the contract address for interacting with it via the front-end.

### Running the DApp

The DApp front-end is provided by \`counter.html\`. You can serve the HTML file using a simple HTTP server.

\`\`\`bash
npx serve .
\`\`\`

Open the \`counter.html\` in a browser that has MetaMask installed and connected to the network where the contract is deployed.

## Interacting with the DApp

Once the contract is deployed and the DApp is running, you can perform the following actions:

- **Increment Counter**: Increment the counter by calling the \`increment\` function of the contract.
- **Decrement Counter**: Decrement the counter by calling the \`decrement\` function of the contract.
- **Get Count**: View the current value of the counter.

## Smart Contract Details

### counter.sol

The \`counter.sol\` contract is a basic Solidity smart contract that has a state variable \`count\`, and the following functions:

\`\`\`solidity
function increment() public {
    count += 1;
}

function decrement() public {
    count -= 1;
}

function getCount() public view returns (uint) {
    return count;
}
\`\`\`

## Deployment Script

### deploy.js

The \`deploy.js\` script uses web3.js (or ethers.js) to deploy the contract to a blockchain. Ensure that the script is correctly configured with your network details and account information.

## Dependencies

- \`web3.js\` or \`ethers.js\`: For interacting with Ethereum and the smart contract.
- \`solc\`: Solidity compiler for compiling the contract.
- \`Ganache\`: Local blockchain for testing (optional).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
