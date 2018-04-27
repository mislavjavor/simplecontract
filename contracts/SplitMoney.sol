pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract SplitMoney is StandardToken {

    string public symbol = "STM";
    string public name = "SplitMoney";
    uint8 public decimals = 18;

    function SplitMoney() public {
        balances[msg.sender] = 1000000 * (10 ** uint(decimals));
        totalSupply_ = 1000000 * (10 ** uint(decimals));
    }
}
