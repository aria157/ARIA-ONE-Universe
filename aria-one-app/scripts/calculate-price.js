const { ethers } = require("ethers");

async function calculateKeyxPrice() {
  try {
    console.log("\n💎 KEYX Current Price Calculator\n");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Your liquidity pool amounts
    const ethInPool = 0.0001; // ETH
    const keyxInPool = 10; // KEYX
    
    // Current ETH price (approximate)
    const ethPriceUSD = 3200; // USD per ETH
    const usdToAud = 1.52; // USD to AUD conversion
    
    // Calculate KEYX price
    const keyxPriceInEth = ethInPool / keyxInPool;
    const keyxPriceInUsd = keyxPriceInEth * ethPriceUSD;
    const keyxPriceInAud = keyxPriceInUsd * usdToAud;
    
    console.log("📊 Current Liquidity Pool:\n");
    console.log(`   💧 ETH in pool: ${ethInPool} ETH`);
    console.log(`   🔑 KEYX in pool: ${keyxInPool} KEYX\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    console.log("💰 KEYX Price:\n");
    console.log(`   1 KEYX = ${keyxPriceInEth} ETH`);
    console.log(`   1 KEYX = $${keyxPriceInUsd.toFixed(2)} USD`);
    console.log(`   1 KEYX = $${keyxPriceInAud.toFixed(2)} AUD\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Your holdings value
    const yourKeyx = 1369990;
    const portfolioValueEth = yourKeyx * keyxPriceInEth;
    const portfolioValueUsd = yourKeyx * keyxPriceInUsd;
    const portfolioValueAud = yourKeyx * keyxPriceInAud;
    
    console.log("💼 Your Portfolio Value:\n");
    console.log(`   Holdings: ${yourKeyx.toLocaleString()} KEYX\n`);
    console.log(`   Worth: ${portfolioValueEth.toFixed(4)} ETH`);
    console.log(`   Worth: $${portfolioValueUsd.toFixed(2)} USD`);
    console.log(`   Worth: $${portfolioValueAud.toFixed(2)} AUD\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Market cap
    const totalSupply = 1370000;
    const marketCapUsd = totalSupply * keyxPriceInUsd;
    const marketCapAud = totalSupply * keyxPriceInAud;
    
    console.log("📈 Market Metrics:\n");
    console.log(`   Total Supply: ${totalSupply.toLocaleString()} KEYX`);
    console.log(`   Market Cap: $${marketCapUsd.toFixed(2)} USD`);
    console.log(`   Market Cap: $${marketCapAud.toFixed(2)} AUD\n`);
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Trading scenarios
    console.log("💡 Trading Scenarios (with current tiny liquidity):\n");
    
    const scenarios = [
      { amount: 100, label: "100 KEYX" },
      { amount: 1000, label: "1,000 KEYX" },
      { amount: 10000, label: "10,000 KEYX" }
    ];
    
    scenarios.forEach(scenario => {
      // Simple constant product formula (x * y = k)
      const k = ethInPool * keyxInPool;
      const newKeyxPool = keyxInPool + scenario.amount;
      const newEthPool = k / newKeyxPool;
      const ethReceived = ethInPool - newEthPool;
      const ethReceivedUsd = ethReceived * ethPriceUSD;
      const ethReceivedAud = ethReceivedUsd * usdToAud;
      const slippage = ((scenario.amount * keyxPriceInUsd - ethReceivedUsd) / (scenario.amount * keyxPriceInUsd)) * 100;
      
      console.log(`   Sell ${scenario.label}:`);
      console.log(`   → Get ${ethReceived.toFixed(6)} ETH ($${ethReceivedAud.toFixed(2)} AUD)`);
      console.log(`   → Slippage: ${slippage.toFixed(1)}%\n`);
    });
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    console.log("⚠️  Note: These prices are based on MICRO-LIQUIDITY!\n");
    console.log("To get real value, add more liquidity:");
    console.log("• 0.1 ETH + 1,000 KEYX = $0.32 per KEYX");
    console.log("• 1 ETH + 10,000 KEYX = $0.32 per KEYX");
    console.log("• More liquidity = better price stability\n");
    
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

calculateKeyxPrice();
