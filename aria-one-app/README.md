# ARIA ONE Universe - KEYX Token DApp

A decentralized application (DApp) for the KEYX token built on Ethereum and Base networks.

## 🚀 Project Structure

```
aria-one-app/
│
├── public/
│   ├── icons/              # KEYX brand icons and logos
│   ├── banners/            # Banner images
│   ├── animation/          # Animation assets
│   ├── favicon.svg         # Site favicon
│   └── index.html          # HTML template
│
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── contracts/          # Smart contracts
│   │   ├── KeyX.sol        # KEYX ERC-20 token contract
│   │   └── deployment/     # Deployment scripts
│   ├── hooks/              # Custom React hooks
│   └── styles/             # CSS stylesheets
│
├── hardhat.config.js       # Hardhat configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Smart Contracts**: Solidity, Hardhat, OpenZeppelin
- **Frontend**: React, ethers.js
- **Networks**: Ethereum Sepolia, Base Mainnet, Base Sepolia

## 📦 Installation

```bash
npm install
```

## 🔧 Available Scripts

### Smart Contract Development

```bash
# Compile contracts
npm run compile

# Run tests
npm test

# Start local Hardhat node
npm run node

# Deploy to networks
npm run deploy:local
npm run deploy:sepolia
npm run deploy:base
npm run deploy:baseSepolia
```

### Frontend Development

```bash
# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Network Configuration

The project is configured for the following networks:

- **Sepolia Testnet**: Ethereum testnet
- **Base Mainnet**: Layer 2 mainnet (Chain ID: 8453)
- **Base Sepolia**: Base testnet (Chain ID: 84532)

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue in the repository.
