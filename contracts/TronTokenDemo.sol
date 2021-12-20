pragma solidity ^0.5.10;

import {TokenTRC20} from "./TokenTRC20.sol";

/**
 * @title ERC20 example for token contracts to be deployed to Ethereum.
 */
contract TronTokenDemo is TokenTRC20 {
    address public owner;

    constructor(
        uint256 _initialSupplyCoins,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) public payable TokenTRC20(_initialSupplyCoins, _name, _symbol, _decimals) {
        owner = msg.sender;
    }
}