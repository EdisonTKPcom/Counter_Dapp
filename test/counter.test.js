// Basic test script using web3 + ganache in-process
// Run with: npm test

const Ganache = require('ganache');
const Web3 = require('web3');
const fs = require('fs');
const assert = require('assert');

async function compileArtifacts() {
  // Ensure artifacts exist
  if (!fs.existsSync('build/counter_sol_Counter.bin')) {
    throw new Error('Build artifact missing. Run: npm run build:sol');
  }
}

(async () => {
  await compileArtifacts();
  const abi = JSON.parse(fs.readFileSync('build/counter_sol_Counter.abi'));
  const bytecode = fs.readFileSync('build/counter_sol_Counter.bin').toString();
  const provider = Ganache.provider();
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];

  const Contract = new web3.eth.Contract(abi);
  const instance = await Contract.deploy({ data: bytecode }).send({ from: deployer, gas: 3_000_000 });

  // Initial value should be 0
  let val = await instance.methods.getCount().call();
  assert.strictEqual(Number(val), 0, 'initial count should be 0');

  // Increment
  await instance.methods.increment().send({ from: deployer });
  val = await instance.methods.getCount().call();
  assert.strictEqual(Number(val), 1, 'count should be 1 after increment');

  // Decrement
  await instance.methods.decrement().send({ from: deployer });
  val = await instance.methods.getCount().call();
  assert.strictEqual(Number(val), 0, 'count should be 0 after decrement');

  // Underflow revert test
  let reverted = false;
  try {
    await instance.methods.decrement().send({ from: deployer });
  } catch (e) {
    reverted = true;
  }
  assert.ok(reverted, 'decrement at zero should revert');

  console.log('All counter tests passed.');
  provider.disconnect();
})().catch(err => { console.error(err); process.exit(1); });
