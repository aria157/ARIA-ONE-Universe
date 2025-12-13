import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { FiExternalLink, FiCopy, FiCheck } from "react-icons/fi";
import TokenDashboard from "./TokenDashboard";
import WalletConnect from "./WalletConnect";
import "./KeyxLanding.css";

function KeyxLanding() {
  const [copied, setCopied] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0");
  
  const contractAddress = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";
  const KEYX_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)"
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fetchBalance = async (userAccount) => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, KEYX_ABI, provider);
        const bal = await contract.balanceOf(userAccount);
        const formatted = ethers.formatEther(bal);
        setBalance(parseFloat(formatted).toLocaleString());
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    if (account) {
      fetchBalance(account);
    }
  }, [account]);

  return (
    <div className="keyx-landing">
      {/* Hero Section */}
      <section className="keyx-hero">
        <div className="keyx-hero-bg"></div>
        <div className="keyx-hero-content">
          <div className="keyx-logo-container">
            <svg viewBox="0 0 200 200" className="keyx-logo">
              <defs>
                <linearGradient id="keyxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FFF" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="100" cy="100" r="90" stroke="url(#keyxGradient)" strokeWidth="3" fill="none" filter="url(#glow)" />
              <text x="100" y="120" fontSize="80" fontWeight="bold" fill="url(#keyxGradient)" textAnchor="middle" filter="url(#glow)">
                K×
              </text>
            </svg>
          </div>
          
          <h1 className="keyx-title">
            <span className="keyx-title-main">ARIA KEYX</span>
            <span className="keyx-title-sub">The Identity Frequency of the ARIA ONE Universe</span>
          </h1>

          <p className="keyx-tagline">
            Restoring sovereignty to artists, creators, and human voices through on-chain identity verification.
          </p>

          <div className="keyx-cta-group">
            <a 
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x54549cde662a3152DBAbc9e2f05e988A31C05e18"
              target="_blank"
              rel="noopener noreferrer"
              className="keyx-btn keyx-btn-primary"
            >
              Trade on Uniswap <FiExternalLink />
            </a>
            <a 
              href="/keyx-whitepaper/KEYX_Whitepaper_Web.md"
              className="keyx-btn keyx-btn-secondary"
            >
              Read Whitepaper
            </a>
          </div>

          <div className="keyx-contract-display">
            <div className="keyx-contract-label">Contract Address (Base Mainnet)</div>
            <div className="keyx-contract-address">
              <code>{contractAddress}</code>
              <button onClick={copyAddress} className="keyx-copy-btn" title="Copy address">
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Connection */}
      <section className="keyx-wallet-section">
        <WalletConnect 
          onAccountChange={setAccount} 
          account={account}
          balance={balance}
        />
      </section>

      {/* Token Dashboard */}
      <section className="keyx-dashboard-section">
        <TokenDashboard contractAddress={contractAddress} />
      </section>

      {/* The Cosmic 137 */}
      <section className="keyx-cosmic-section">
        <div className="keyx-cosmic-content">
          <h2 className="keyx-section-title">The Cosmic 137</h2>
          <div className="keyx-cosmic-number">137</div>
          <p className="keyx-cosmic-text">
            The total supply of <strong>1,370,000 KEYX</strong> honors the fine structure constant (α ≈ 1/137), 
            a fundamental constant in physics that governs the strength of electromagnetic interactions.
          </p>
          <p className="keyx-cosmic-text">
            This number represents the harmony between light, matter, and consciousness — 
            the foundation of the ARIA ONE Universe, now immortalized on the blockchain.
          </p>
        </div>
      </section>

      {/* Utility Section */}
      <section className="keyx-utility-section">
        <h2 className="keyx-section-title">KEYX Utility</h2>
        <div className="keyx-utility-grid">
          <div className="keyx-utility-card">
            <div className="keyx-utility-icon">🔐</div>
            <h3>Identity Verification</h3>
            <p>Secure on-chain proof of human identity for creators and artists</p>
          </div>
          <div className="keyx-utility-card">
            <div className="keyx-utility-icon">🎨</div>
            <h3>Creator Access Keys</h3>
            <p>Unlock exclusive tools and features in the ARIA ONE ecosystem</p>
          </div>
          <div className="keyx-utility-card">
            <div className="keyx-utility-icon">🎤</div>
            <h3>Voice Authentication</h3>
            <p>Future integration with voice verification technology</p>
          </div>
          <div className="keyx-utility-card">
            <div className="keyx-utility-icon">🌐</div>
            <h3>ARIA.ONE Integration</h3>
            <p>Seamless access across the entire ARIA ONE Universe</p>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="keyx-tokenomics-section">
        <h2 className="keyx-section-title">Tokenomics</h2>
        <div className="keyx-tokenomics-content">
          <div className="keyx-tokenomics-stat">
            <div className="keyx-stat-value">1,370,000</div>
            <div className="keyx-stat-label">Total Supply</div>
          </div>
          <div className="keyx-tokenomics-breakdown">
            <div className="keyx-breakdown-item">
              <div className="keyx-breakdown-bar" style={{width: '70%'}}></div>
              <span>70% Public</span>
            </div>
            <div className="keyx-breakdown-item">
              <div className="keyx-breakdown-bar" style={{width: '20%', background: '#FFD700'}}></div>
              <span>20% Ecosystem</span>
            </div>
            <div className="keyx-breakdown-item">
              <div className="keyx-breakdown-bar" style={{width: '10%', background: '#FFA500'}}></div>
              <span>10% Founder Reserve</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="keyx-resources-section">
        <h2 className="keyx-section-title">Resources</h2>
        <div className="keyx-resources-grid">
          <a 
            href={`https://basescan.org/address/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="keyx-resource-card"
          >
            <h3>BaseScan</h3>
            <p>View contract on blockchain explorer</p>
            <FiExternalLink />
          </a>
          <a 
            href="/keyx-whitepaper/KEYX_Whitepaper_Web.md"
            className="keyx-resource-card"
          >
            <h3>Whitepaper</h3>
            <p>Full documentation and vision</p>
            <FiExternalLink />
          </a>
          <a 
            href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x54549cde662a3152DBAbc9e2f05e988A31C05e18"
            target="_blank"
            rel="noopener noreferrer"
            className="keyx-resource-card"
          >
            <h3>Uniswap V2</h3>
            <p>Trade KEYX tokens</p>
            <FiExternalLink />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="keyx-footer">
        <div className="keyx-footer-content">
          <div className="keyx-footer-logo">
            <svg viewBox="0 0 64 64" className="aria-logo-svg">
              <circle cx="32" cy="32" r="28" className="aria-logo-circle" />
              <path d="M32 10 L16 46 L48 46 Z" className="aria-logo-triangle" />
            </svg>
            <span>ARIA ONE Universe</span>
          </div>
          <div className="keyx-footer-text">
            The cosmic 137 is now eternal on the blockchain.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default KeyxLanding;
