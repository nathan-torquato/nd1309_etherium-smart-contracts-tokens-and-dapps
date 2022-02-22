// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract StarNotary {
	string  public starName;
	address public starOwner;

	event starClaimed(address owner);

	constructor(string memory _starName) public {
		starName = _starName;
	}

	function claimStar() public {
		starOwner = msg.sender;
		emit starClaimed(starOwner);
	}

	function changeStarName(string memory _newName) public {
		assert(msg.sender == starOwner);
		starOwner = msg.sender;
		starName = _newName;
	}
}
