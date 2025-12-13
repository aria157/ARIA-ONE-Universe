const { ethers } = require("ethers");

const privateKey = "bb442aac0eaf633368d4936021808fedf86c6cd080c00956db4d7d52ad11a281";
const wallet = new ethers.Wallet(privateKey);

console.log("Owner Address:", wallet.address);
console.log("\nABI-Encoded Constructor Argument:");
console.log(ethers.AbiCoder.defaultAbiCoder().encode(["address"], [wallet.address]).slice(2));
