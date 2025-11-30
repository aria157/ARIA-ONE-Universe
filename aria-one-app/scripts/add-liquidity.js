const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
    console.log("\n🚀 ADDING LIQUIDITY TO UNISWAP V2 ON BASE MAINNET...\n");

    // Your KEYX contract address
    const KEYX_ADDRESS = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";
    
    // Uniswap V2 Router on Base
    const UNISWAP_V2_ROUTER = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24";
    
    // WETH on Base
    const WETH_ADDRESS = "0x4200000000000000000000000000000000000006";
    
    // Amounts - OPTION 2: Medium pool (~$37 liquidity)
    const ETH_AMOUNT = ethers.parseEther("0.008");      // 0.008 ETH (~$37 AUD)
    const KEYX_AMOUNT = ethers.parseEther("240");       // 240 KEYX
    
    const [deployer] = await ethers.getSigners();
    console.log("✅ Wallet:", deployer.address);
    
    // Get KEYX contract
    const keyx = await ethers.getContractAt("AriaKeyX", KEYX_ADDRESS);
    console.log("✅ KEYX Contract loaded");
    
    // Get Router contract
    const routerABI = [
        "function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)"
    ];
    const router = await ethers.getContractAt(routerABI, UNISWAP_V2_ROUTER);
    console.log("✅ Uniswap V2 Router loaded");
    
    // Step 1: Approve KEYX spending
    console.log("\n📝 Step 1: Approving KEYX...");
    const approveTx = await keyx.approve(UNISWAP_V2_ROUTER, KEYX_AMOUNT);
    await approveTx.wait();
    console.log("✅ KEYX approved!");
    
    // Step 2: Add liquidity
    console.log("\n💰 Step 2: Adding liquidity...");
    console.log(`   ETH: ${ethers.formatEther(ETH_AMOUNT)}`);
    console.log(`   KEYX: ${ethers.formatEther(KEYX_AMOUNT)}`);
    
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
    
    const liquidityTx = await router.addLiquidityETH(
        KEYX_ADDRESS,
        KEYX_AMOUNT,
        0, // amountTokenMin (0 for first pool)
        0, // amountETHMin (0 for first pool)
        deployer.address,
        deadline,
        { value: ETH_AMOUNT }
    );
    
    console.log("⏳ Waiting for confirmation...");
    const receipt = await liquidityTx.wait();
    console.log("✅ Liquidity added!");
    
    console.log("\n🎉 SUCCESS!");
    console.log(`   Transaction: ${receipt.hash}`);
    console.log(`   View on BaseScan: https://basescan.org/tx/${receipt.hash}`);
    console.log("\n✅ KEYX is now tradeable on Uniswap V2!");
    console.log(`   Swap: https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=${KEYX_ADDRESS}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
