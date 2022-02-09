// SPDX-License-Identifier: MIT
pragma solidity >=0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract SampleToken is ERC20Detailed, ERC20 {
  uint8 _decimals = 18;
  uint256 _initialSupply = 1000000000000000000;

  constructor(
    string memory _name,
    string memory _symbol
  ) public ERC20Detailed(_name, _symbol, _decimals) {
    require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than 0");
    _mint(msg.sender, _initialSupply);
  }
}
