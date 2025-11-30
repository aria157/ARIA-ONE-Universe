const { ethers } = require("ethers");

async function checkAddress() {
  try {
    const address = "0x6cf3f9c7ab05fc40713bd0a7886681db92eac5a2";
    
    console.log("\n🔍 Checking Wallet Address...\n");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    console.log(`📍 Address: ${address}\n`);
    
    // Connect to Base Mainnet
    const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
    
    // Check ETH balance
    const ethBalance = await provider.getBalance(address);
    console.log(`💰 ETH Balance: ${ethers.formatEther(ethBalance)} ETH\n`);
    
    // Check KEYX balance
    const keyxAddress = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";
    const keyxABI = [
      "function balanceOf(address owner) view returns (uint256)",
      "function symbol() view returns (string)"
    ];
    
    const keyxContract = new ethers.Contract(keyxAddress, keyxABI, provider);
    const keyxBalance = await keyxContract.balanceOf(address);
    const symbol = await keyxContract.symbol();
    
    console.log(`🔑 ${symbol} Balance: ${ethers.formatEther(keyxBalance)} ${symbol}\n`);
    
    // Check if address has any transaction history
    const txCount = await provider.getTransactionCount(address);
    console.log(`📊 Transaction Count: ${txCount}\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    if (txCount === 0 && parseFloat(ethers.formatEther(ethBalance)) === 0) {
      console.log("✅ This is a FRESH wallet (never used on Base)\n");
      console.log("   Safe to send KEYX - it will work with any Base-compatible wallet!\n");
    } else if (txCount > 0) {
      console.log("✅ This wallet is ACTIVE on Base Mainnet\n");
      console.log("   Safe to send KEYX!\n");
    } else {
      console.log("⚠️  This wallet has ETH but no transactions yet\n");
      console.log("   Safe to send KEYX!\n");
    }
    
    console.log(`🔗 View on BaseScan: https://basescan.org/address/${address}\n`);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

checkAddress();
