# 🔐 KEYX Token Verification Guide for BaseScan

## Contract Information

**Contract Address:** `0x54549cde662a3152DBAbc9e2f05e988A31C05e18`  
**Network:** Base Sepolia Testnet  
**Token Name:** ARIA KEYX  
**Token Symbol:** KEYX  
**Initial Supply:** 1,370,000 KEYX

---

## Step-by-Step Verification Process

### 1. Compiler Settings

**Compiler Type:** Solidity (Single file)  
**Compiler Version:** `v0.8.20+commit.a1b79de6`  
**Open Source License:** MIT

### 2. Optimization Settings

**Optimization:** Yes  
**Runs:** 200 (default)

### 3. Constructor Arguments (ABI-encoded)

You'll need to provide the constructor argument (owner address). 

**Format:** ABI-encoded address

If your owner address was, for example: `0xYourAddressHere`

The ABI-encoded version is: `000000000000000000000000` + `YourAddressHere` (without 0x)

---

## Option A: Using Flattened Contract (Recommended)

Since your contract uses OpenZeppelin imports, you need to flatten it first.

### Flatten with Hardhat:

```bash
cd aria-one-app
npx hardhat flatten src/contracts/KeyX.sol > KeyX-flattened.sol
```

This creates a single file with all imports resolved.

---

## Option B: Direct Source Code (For Manual Entry)

If BaseScan supports multi-file verification, you can upload:

1. **Main contract:** `KeyX.sol`
2. **Dependencies:** OpenZeppelin contracts (auto-resolved by BaseScan)

---

## Quick Verification Steps

### On BaseScan Verify Page:

1. **Contract Address:** Paste `0x54549cde662a3152DBAbc9e2f05e988A31C05e18`

2. **Compiler Type:** Select "Solidity (Single file)"

3. **Compiler Version:** Select `v0.8.20+commit.a1b79de6`

4. **License:** Select "MIT"

5. **Optimization:** Yes (Enabled)

6. **Runs:** 200

7. **Enter the Solidity Contract Code:**
   - Paste flattened contract (from hardhat flatten command)
   - OR paste original if BaseScan auto-resolves imports

8. **Constructor Arguments (ABI-encoded):**
   - Enter your owner address in ABI-encoded format
   - Example: If owner is `0x1234...5678`, encode as:
     `0000000000000000000000001234567890123456789012345678901234567890`

9. **Click "Verify and Publish"**

---

## Troubleshooting

### Error: "Compiler version mismatch"
✅ Make sure you select exactly `v0.8.20`

### Error: "Bytecode doesn't match"
✅ Check optimization settings (should be Yes with 200 runs)
✅ Verify constructor arguments are correctly ABI-encoded

### Error: "Import not found"
✅ Use flattened contract instead
✅ Run: `npx hardhat flatten src/contracts/KeyX.sol`

---

## Alternative: Use Hardhat Verify Plugin

**Easiest method:**

```bash
cd aria-one-app
npm install --save-dev @nomicfoundation/hardhat-verify

# Add to hardhat.config.js:
# etherscan: {
#   apiKey: {
#     baseSepolia: "YOUR_BASESCAN_API_KEY"
#   }
# }

# Then verify:
npx hardhat verify --network baseSepolia 0x54549cde662a3152DBAbc9e2f05e988A31C05e18 "OWNER_ADDRESS_HERE"
```

---

## Next Steps After Verification

Once verified, your contract will show:
✅ Green checkmark on BaseScan
✅ "Contract" tab with readable source code
✅ "Read Contract" and "Write Contract" tabs
✅ Full transparency for users and DEXs

---

## Need Help?

Run this to flatten your contract right now:

```bash
cd aria-one-app
npx hardhat flatten src/contracts/KeyX.sol > KeyX-flattened.sol
```

Then paste the contents of `KeyX-flattened.sol` into BaseScan!

---

**You're one click away from full verification! 🚀**
