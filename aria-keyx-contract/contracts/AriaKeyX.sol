// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AriaKeyX is ERC20, Pausable, Ownable {
    // Initial supply: 1,370,000 KEYX (with 18 decimals)
    uint256 public constant INITIAL_SUPPLY = 1370000 * 10 ** 18;

    constructor(address ownerAddress)
        ERC20("ARIA KEYX", "KEYX")
        Ownable(ownerAddress)
    {
        // Mint the initial supply to the owner
        _mint(ownerAddress, INITIAL_SUPPLY);
    }

    // Owner can pause all transfers if needed
    function pause() public onlyOwner {
        _pause();
    }

    // Owner can unpause transfers
    function unpause() public onlyOwner {
        _unpause();
    }

    // Owner can mint more tokens in the future (your choice: Option B)
    function mint(address to, uint256 amount) public onlyOwner whenNotPaused {
        _mint(to, amount);
    }

    // Make sure transfers respect the paused state
    function _update(address from, address to, uint256 value)
        internal
        override
        whenNotPaused
    {
        super._update(from, to, value);
    }
}

