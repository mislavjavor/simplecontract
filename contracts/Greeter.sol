pragma solidity 0.4.21;

import "./SimpleContract.sol";


contract Greeter {

    SimpleContract private _simple;

    function Greeter(SimpleContract simple) public {
        _simple = simple;
    }

    function greet() public returns (bytes32) {
        return _simple.sayHello();
    }

}
