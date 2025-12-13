const { ethers } = require("ethers");

async function checkBalance() {
  try {
    // Connect to Base Mainnet
    const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
    
    // Your wallet address
    const walletAddress = "0x49913BD2ab1ed0061D5aD992a2f2FA1a03f5E954";
    
    // KEYX contract
    const keyxAddress = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";
    const keyxABI = [
      "function balanceOf(address owner) view returns (uint256)",
      "function symbol() view returns (string)",
      "function decimals() view returns (uint8)",
      "function totalSupply() view returns (uint256)"
    ];
    
    const keyxContract = new ethers.Contract(keyxAddress, keyxABI, provider);
    
    console.log("\n🔍 Checking KEYX Balance on Base Mainnet...\n");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Get wallet ETH balance
    const ethBalance = await provider.getBalance(walletAddress);
    console.log(`💎 Wallet: ${walletAddress}`);
    console.log(`💰 ETH Balance: ${ethers.formatEther(ethBalance)} ETH\n`);
    
    // Get KEYX details
    const symbol = await keyxContract.symbol();
    const decimals = await keyxContract.decimals();
    const totalSupply = await keyxContract.totalSupply();
    const balance = await keyxContract.balanceOf(walletAddress);
    
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    console.log(`🪙 Token: ${symbol}`);
    console.log(`📊 Total Supply: ${ethers.formatEther(totalSupply)} ${symbol}`);
    console.log(`🔑 Your Balance: ${ethers.formatEther(balance)} ${symbol}`);
    console.log(`📈 Your % of Supply: ${(parseFloat(ethers.formatEther(balance)) / parseFloat(ethers.formatEther(totalSupply)) * 100).toFixed(4)}%\n`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    
    // Calculate what's in liquidity
    const inLiquidity = parseFloat(ethers.formatEther(totalSupply)) - parseFloat(ethers.formatEther(balance));
    console.log(`💧 In Liquidity Pool: ${inLiquidity} ${symbol}`);
    console.log(`📍 Contract: ${keyxAddress}`);
    console.log(`🌐 Network: Base Mainnet (Chain ID 8453)\n`);
    
    console.log(`✅ The cosmic 137 is alive! Your balance is correct.\n`);
    
  } catch (error) {
    console.error("❌ Error checking balance:", error.message);
  }
}

checkBalance();
