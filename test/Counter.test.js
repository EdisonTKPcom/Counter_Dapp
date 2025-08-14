const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', function () {
  let counter;
  beforeEach(async () => {
    const Counter = await ethers.getContractFactory('Counter');
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  it('starts at zero', async () => {
    expect(await counter.getCount()).to.equal(0n);
  });

  it('increments and decrements', async () => {
    await counter.increment();
    expect(await counter.getCount()).to.equal(1n);
    await counter.decrement();
    expect(await counter.getCount()).to.equal(0n);
  });

  it('reverts on underflow', async () => {
    await expect(counter.decrement()).to.be.revertedWith('Counter: already zero');
  });
});
