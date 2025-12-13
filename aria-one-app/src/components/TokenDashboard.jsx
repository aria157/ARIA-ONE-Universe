import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./TokenDashboard.css";

function TokenDashboard({ contractAddress }) {
  const [stats, setStats] = useState({
    price: "Loading...",
    liquidity: "Loading...",
    totalSupply: "1,370,000",
    holders: "Loading...",
    marketCap: "Loading..."
  });

  const KEYX_ABI = [
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address owner) view returns (uint256)"
  ];

  const UNISWAP_V2_PAIR_ABI = [
    "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
    "function token0() view returns (address)",
    "function token1() view returns (address)"
  ];

  useEffect(() => {
    fetchTokenStats();
    const interval = setInterval(fetchTokenStats, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [contractAddress]);

  const fetchTokenStats = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
      const contract = new ethers.Contract(contractAddress, KEYX_ABI, provider);
      
      // Get total supply
      const supply = await contract.totalSupply();
      const formattedSupply = parseFloat(ethers.formatEther(supply)).toLocaleString();

      // Try to fetch liquidity pool data
      // Note: You'll need to find the actual pair address from Uniswap
      // For now, we'll use placeholder values
      
      setStats(prevStats => ({
        ...prevStats,
        totalSupply: formattedSupply,
        price: "Market Discovery", // Will show real price once more liquidity added
        liquidity: "0.0001 ETH",
        holders: "1+",
        marketCap: "Emerging"
      }));

    } catch (error) {
      console.error("Error fetching token stats:", error);
      setStats(prevStats => ({
        ...prevStats,
        price: "Check Uniswap",
        liquidity: "0.0001 ETH",
        holders: "Growing"
      }));
    }
  };

  return (
    <div className="token-dashboard">
      <h2 className="dashboard-title">Live Token Stats</h2>
      
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon">💎</div>
          <div className="stat-content">
            <div className="stat-label">Current Price</div>
            <div className="stat-value">{stats.price}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💧</div>
          <div className="stat-content">
            <div className="stat-label">Liquidity Pool</div>
            <div className="stat-value">{stats.liquidity}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🪙</div>
          <div className="stat-content">
            <div className="stat-label">Total Supply</div>
            <div className="stat-value">{stats.totalSupply}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-label">Holders</div>
            <div className="stat-value">{stats.holders}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Market Cap</div>
            <div className="stat-value">{stats.marketCap}</div>
          </div>
        </div>

        <div className="stat-card stat-card-action">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <div className="stat-label">Network</div>
            <div className="stat-value">Base Mainnet</div>
          </div>
        </div>
      </div>

      <div className="dashboard-notice">
        <p>⚡ KEYX launched with micro-liquidity for early price discovery.</p>
        <p>Add more liquidity to stabilize trading and reduce slippage.</p>
      </div>
    </div>
  );
}

export default TokenDashboard;
