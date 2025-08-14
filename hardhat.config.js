require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './hh-cache',
    artifacts: './artifacts'
  },
  networks: {
    hardhat: {},
  }
};
