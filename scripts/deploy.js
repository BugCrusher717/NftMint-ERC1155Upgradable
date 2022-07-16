// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
//   0x49Da64F734fceD4303e6b144e89F78E22Fb99d5F
  // const Mintcontract = await hre.ethers.getContractFactory("MintAndStateTransitions");
  const Mintcontract = await hre.ethers.getContractFactory("Minting");
  const mintcontract = await Mintcontract.deploy();
  
  await mintcontract.deployed();

  console.log("Mintcontract deployed to:", mintcontract.address);
}
//0x7243f9AD22Cf7B0424d8717fB98281750FC53ec3
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
