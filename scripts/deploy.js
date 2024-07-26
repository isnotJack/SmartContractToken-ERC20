const hre = require("hardhat");

async function main() {
  const notJToken = await hre.ethers.getContractFactory("notJToken");
  const notjToken = await notJToken.deploy(100000000, 50);

  await notjToken.deployed();

  console.log("Ocean Token deployed: ", notjToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});