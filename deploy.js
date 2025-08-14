const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");
// Expect artifacts produced by `npm run build:sol`
// Using Counter contract artifacts
const bytecode = fs.readFileSync("build/counter_sol_Counter.bin");
const abi = JSON.parse(fs.readFileSync("build/counter_sol_Counter.abi"));
(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];
  const myContract = new web3.eth.Contract(abi);
  try {
    const deployment = await myContract
      .deploy({ data: bytecode.toString() })
      .send({ from: myWalletAddress, gas: 3_000_000 });
    console.log("Counter contract deployed at:", deployment.options.address);
  } catch (err) {
    console.error("Deployment failed", err);
  }
})();
