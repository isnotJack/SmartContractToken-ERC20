const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("notJToken contract", function() {
  // global vars
  let Token;
  let notJToken;
  let owner;
  let addr1;
  let addr2;
  let tokenCap = 100000000;
  let tokenBlockReward = 50;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("notJToken");
    [owner, addr1, addr2] = await hre.ethers.getSigners();

    notJToken = await Token.deploy(tokenCap, tokenBlockReward);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await notJToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await notJToken.balanceOf(owner.address);
      expect(await notJToken.totalSupply()).to.equal(ownerBalance);
    });

  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await notJToken.transfer(addr1.address, 50);
      const addr1Balance = await notJToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await notJToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await notJToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

  });
  
});