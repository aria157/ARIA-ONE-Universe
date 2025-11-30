import React, { useState } from "react";
import "./styles.css";

function AriaOneApp() {
  const [entered, setEntered] = useState(false);
  const contractAddress = "0x54549cde662a3152DBAbc9e2f05e988A31C05e18";

  if (!entered) {
    return (
      <main className="aria-enter">
        <header className="aria-enter-header">
          <div className="aria-enter-tagline">CLAIM YOUR SPACE</div>
        </header>

        <section className="aria-enter-center">
          {/* LOGO */}
          <div className="aria-logo-mark" aria-label="ARIA ONE logo">
            <svg viewBox="0 0 64 64" className="aria-logo-svg" role="img">
              <circle cx="32" cy="32" r="28" className="aria-logo-circle" />
              <path d="M32 10 L16 46 L48 46 Z" className="aria-logo-triangle" />
            </svg>
          </div>

          {/* WORDMARK */}
          <div className="aria-enter-wordmark">
            <div className="aria-enter-title">ARIA ONE</div>

            <div className="aria-enter-official-wrap">
              <span className="aria-official-symbol"></span>
              <span className="aria-enter-official">
                - O . F . F . I . C . I . A . L -
              </span>
            </div>
          </div>

          {/* ENTER BUTTON */}
          <button className="aria-enter-button" onClick={() => setEntered(true)} type="button">
            <span className="aria-enter-infinity">∞</span>
            <span className="aria-enter-label">ENTER</span>
          </button>
        </section>

        <footer className="aria-enter-footer">
          <span>claim your space.</span>
        </footer>
      </main>
    );
  }

  return (
    <div>
      <header className="aria-app-header">
        <div className="aria-app-brand">
          <div className="aria-app-logo">
            <svg viewBox="0 0 64 64" className="aria-logo-svg" role="img" aria-label="ARIA ONE">
              <circle cx="32" cy="32" r="28" className="aria-logo-circle" />
              <path d="M32 10 L16 46 L48 46 Z" className="aria-logo-triangle" />
            </svg>
          </div>
          <div className="aria-app-text">
            <div className="aria-app-title">ARIA ONE</div>
            <div className="aria-app-sub">CLAIM YOUR SPACE</div>
          </div>
        </div>

        <nav className="aria-app-nav">
          <a href="#studio" className="aria-nav-link">STUDIO</a>
          <a href="#token" className="aria-nav-link">TOKEN</a>
          <a href="#wallet" className="aria-nav-link">WALLET</a>
          <a href="#about" className="aria-nav-link">ABOUT</a>
          <a href="#aurx" className="aria-nav-link">AURX</a>
        </nav>
      </header>

      <div className="aurx-section">
        <img src="/aurx-logo.svg" alt="AURX FreQ" className="aurx-logo" />
      </div>

      <div className="keyx-showcase">
        <h2 className="showcase-title">ARIA KEYX</h2>
        <div className="keyx-logos">
          <img src="/keyx-gradient.svg" alt="KEYX Network" className="keyx-logo-gradient" />
          <img src="/keyx-dark.svg" alt="Aria KeyX" className="keyx-logo-dark" />
        </div>
      </div>

      <div className="contract-card">
        <h2 className="contract-title">ARIA KEYX Token</h2>
        
        <div className="contract-info">
          <div className="contract-label">Contract Address</div>
          <div className="contract-value">{contractAddress}</div>
        </div>

        <div className="contract-info">
          <div className="contract-label">Network</div>
          <div className="contract-value">Base Sepolia Testnet</div>
        </div>

        <div className="contract-info">
          <div className="contract-label">Token Symbol</div>
          <div className="contract-value">KEYX</div>
        </div>

        <div className="contract-info">
          <div className="contract-label">Initial Supply</div>
          <div className="contract-value">1,370,000 KEYX</div>
        </div>

        <a 
          href={`https://sepolia.basescan.org/address/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contract-link"
        >
          View on BaseScan
        </a>
      </div>
    </div>
  );
}

export default AriaOneApp;
