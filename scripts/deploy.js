const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with account:', deployer.address);
  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();
  await counter.waitForDeployment();
  console.log('Counter deployed at:', await counter.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
