const { ethers } = require("ethers");

// ⚠️ IMPORTANT: This script uses your private key
// Make sure this file is in .gitignore and NEVER share it!

async function sendKeyx() {
  try {
    console.log("\n🔑 KEYX Token Transfer Tool\n");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Configuration
    const KEYX_ADDRESS = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";
    const PRIVATE_KEY = "bb442aac0eaf633368d4936021808fedf86c6cd080c00956db4d7d52ad11a281";
    
    // Connect to Base Mainnet
    const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    
    console.log(`💎 Your Wallet: ${wallet.address}\n`);
    
    // KEYX Contract
    const keyxABI = [
      "function transfer(address to, uint256 amount) returns (bool)",
      "function balanceOf(address owner) view returns (uint256)",
      "function symbol() view returns (string)"
    ];
    
    const keyxContract = new ethers.Contract(KEYX_ADDRESS, keyxABI, wallet);
    
    // Check current balance
    const balance = await keyxContract.balanceOf(wallet.address);
    const symbol = await keyxContract.symbol();
    console.log(`💰 Current Balance: ${ethers.formatEther(balance)} ${symbol}\n`);
    
    // ========================================
    // 🎯 CONFIGURE YOUR TRANSFERS HERE:
    // ========================================
    
    const transfers = [
      // Example transfers - EDIT THESE WITH YOUR ADDRESSES AND AMOUNTS
      {
        to: "0xYOUR_PRIVATE_WALLET_ADDRESS_1",
        amount: "100000", // 100,000 KEYX
        label: "Cold Storage Wallet"
      },
      {
        to: "0xYOUR_PRIVATE_WALLET_ADDRESS_2",
        amount: "50000", // 50,000 KEYX
        label: "Hot Wallet"
      },
      // Add more transfers as needed
    ];
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    console.log("📋 Planned Transfers:\n");
    
    let totalToSend = 0;
    transfers.forEach((transfer, index) => {
      console.log(`${index + 1}. Send ${transfer.amount} ${symbol} to ${transfer.label}`);
      console.log(`   Address: ${transfer.to}\n`);
      totalToSend += parseFloat(transfer.amount);
    });
    
    console.log(`📊 Total to send: ${totalToSend.toLocaleString()} ${symbol}`);
    console.log(`💼 Remaining: ${(parseFloat(ethers.formatEther(balance)) - totalToSend).toLocaleString()} ${symbol}\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Safety check
    if (totalToSend > parseFloat(ethers.formatEther(balance))) {
      console.log("❌ ERROR: Not enough KEYX balance for all transfers!\n");
      return;
    }
    
    // Check if addresses look valid
    const invalidTransfers = transfers.filter(t => !t.to.startsWith("0x") || t.to.length !== 42);
    if (invalidTransfers.length > 0) {
      console.log("❌ ERROR: Some addresses look invalid. Please check your configuration.\n");
      console.log("⚠️  Make sure to replace 0xYOUR_PRIVATE_WALLET_ADDRESS with real addresses!\n");
      return;
    }
    
    console.log("⏳ Starting transfers...\n");
    
    // Execute transfers
    for (let i = 0; i < transfers.length; i++) {
      const transfer = transfers[i];
      console.log(`\n[${i + 1}/${transfers.length}] Sending ${transfer.amount} ${symbol} to ${transfer.label}...`);
      
      try {
        const amountWei = ethers.parseEther(transfer.amount);
        const tx = await keyxContract.transfer(transfer.to, amountWei);
        
        console.log(`   📤 Transaction sent: ${tx.hash}`);
        console.log(`   ⏳ Waiting for confirmation...`);
        
        const receipt = await tx.wait();
        
        console.log(`   ✅ Confirmed in block ${receipt.blockNumber}`);
        console.log(`   🔗 BaseScan: https://basescan.org/tx/${tx.hash}`);
        
      } catch (error) {
        console.log(`   ❌ Failed: ${error.message}`);
      }
    }
    
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Check final balance
    const newBalance = await keyxContract.balanceOf(wallet.address);
    console.log(`✅ All transfers complete!`);
    console.log(`💰 New Balance: ${ethers.formatEther(newBalance)} ${symbol}\n`);
    
  } catch (error) {
    console.error("\n❌ Error:", error.message);
  }
}

// Uncomment the line below to run the script
// sendKeyx();

console.log("\n⚠️  IMPORTANT INSTRUCTIONS:\n");
console.log("1. Edit the 'transfers' array in this file");
console.log("2. Replace 0xYOUR_PRIVATE_WALLET_ADDRESS with your real wallet addresses");
console.log("3. Set the amounts you want to send");
console.log("4. Uncomment the last line: sendKeyx();");
console.log("5. Run: node scripts/send-keyx.js\n");
console.log("⚠️  Make sure you have enough ETH for gas fees on Base!\n");
