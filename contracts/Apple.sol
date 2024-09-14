// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Apple {
    uint public stock_value;
    address payable public owner;

    event StockValueChange(uint stock_value);

    constructor(uint _stock_value) payable { 
        stock_value = _stock_value;
        owner = payable(msg.sender);
    }

    function getOwner() view public returns(address) {
        return owner;
    }

    function getStockValue() view public returns(uint) {
        return stock_value;
    }

    function changeStockValue(uint newStockValue) public {      // is it allowed to pass with no calldata
        require(msg.sender == owner, "Not an owner");

        stock_value = newStockValue;

        emit StockValueChange(stock_value);
    }
}
