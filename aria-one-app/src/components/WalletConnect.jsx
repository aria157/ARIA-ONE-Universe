import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { FiLogOut } from "react-icons/fi";
import "./WalletConnect.css";

function WalletConnect({ onAccountChange, account, balance }) {
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkIfWalletConnected();
    
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return;
      
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        onAccountChange(accounts[0]);
        await checkNetwork();
      }
    } catch (err) {
      console.error("Error checking wallet connection:", err);
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      onAccountChange(null);
      setError("Please connect your wallet");
    } else {
      onAccountChange(accounts[0]);
      setError("");
    }
  };

  const checkNetwork = async () => {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      const baseChainId = "0x2105"; // Base Mainnet = 8453 in hex
      
      if (chainId !== baseChainId) {
        setError("Please switch to Base Mainnet");
        await switchToBase();
      }
    } catch (err) {
      console.error("Error checking network:", err);
    }
  };

  const switchToBase = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x2105" }], // Base Mainnet
      });
      setError("");
    } catch (switchError) {
      // If Base is not added to MetaMask, add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: "0x2105",
              chainName: "Base Mainnet",
              nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18
              },
              rpcUrls: ["https://mainnet.base.org"],
              blockExplorerUrls: ["https://basescan.org"]
            }]
          });
          setError("");
        } catch (addError) {
          setError("Failed to add Base network");
        }
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("Please install MetaMask to use this dApp");
      return;
    }

    try {
      setConnecting(true);
      setError("");
      
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      
      onAccountChange(accounts[0]);
      await checkNetwork();
      
    } catch (err) {
      setError("Failed to connect wallet");
      console.error(err);
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    onAccountChange(null);
    setError("");
  };

  const addTokenToWallet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0x54549cde662a3152DBAbc9e2f05e988A31C05e18",
            symbol: "KEYX",
            decimals: 18,
          },
        },
      });
    } catch (err) {
      console.error("Error adding token:", err);
    }
  };

  const formatAddress = (addr) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  if (!account) {
    return (
      <div className="wallet-connect-container">
        <div className="wallet-connect-card">
          <h3 className="wallet-connect-title">Connect Your Wallet</h3>
          <p className="wallet-connect-subtitle">
            Connect to view your KEYX balance and trade
          </p>
          
          {error && <div className="wallet-error">{error}</div>}
          
          <button 
            onClick={connectWallet} 
            className="wallet-connect-btn"
            disabled={connecting}
          >
            {connecting ? "Connecting..." : "Connect MetaMask"}
          </button>

          {!window.ethereum && (
            <a 
              href="https://metamask.io/download/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="wallet-install-link"
            >
              Install MetaMask
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="wallet-connected-container">
      <div className="wallet-connected-card">
        <div className="wallet-info">
          <div className="wallet-status">
            <div className="wallet-status-dot"></div>
            <span>Connected to Base Mainnet</span>
          </div>
          
          <div className="wallet-address">
            <span className="wallet-label">Address:</span>
            <span className="wallet-value">{formatAddress(account)}</span>
          </div>

          <div className="wallet-balance">
            <span className="wallet-label">KEYX Balance:</span>
            <span className="wallet-value">{balance} KEYX</span>
          </div>

          {error && <div className="wallet-error">{error}</div>}

          <div className="wallet-actions">
            <button onClick={addTokenToWallet} className="wallet-action-btn">
              Add KEYX to MetaMask
            </button>
            <button onClick={disconnectWallet} className="wallet-disconnect-btn">
              <FiLogOut /> Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;
