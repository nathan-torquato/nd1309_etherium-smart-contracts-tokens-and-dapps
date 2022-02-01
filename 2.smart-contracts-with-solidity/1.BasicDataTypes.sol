// tested on Remix
// https://www.youtube.com/watch?v=vw3xEXYEmKc
pragma solidity ^0.4.24;

contract basicDataTypes {
  uint8 aNumber = 255;
  address public owner;
  bool public flag;
  uint256 ownerBalance;
  uint256 public lastViewedBalance;

  function getAddressBalance(address targetAddress) public returns (uint256) {
    owner = targetAddress;
    ownerBalance = owner.balance;
    lastViewedBalance = ownerBalance;
    return ownerBalance;
  }
}
