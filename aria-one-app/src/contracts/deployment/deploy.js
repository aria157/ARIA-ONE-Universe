const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const KeyX = await hre.ethers.getContractFactory("AriaKeyX");
  const keyx = await KeyX.deploy(owner.address);

  await keyx.waitForDeployment();
  console.log("ARIA KEYX deployed at:", await keyx.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
