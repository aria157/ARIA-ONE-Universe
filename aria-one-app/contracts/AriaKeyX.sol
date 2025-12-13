// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract AriaKeyX is ERC20, Ownable, Pausable {
    uint256 public constant INITIAL_SUPPLY = 1_370_000 * 10 ** 18;

    constructor(address ownerAddress) ERC20("ARIA KEYX", "KEYX") Ownable(ownerAddress) {
        _mint(ownerAddress, INITIAL_SUPPLY);
    }

    // Owner can mint more tokens if ever needed (Option B)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function pause() public onlyOwner {
        _pause();
    }
    function unpause() public onlyOwner {
        _unpause();
    }

    function _update(address from, address to, uint256 value) internal override whenNotPaused {
        super._update(from, to, value);
    }
}

