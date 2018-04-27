var SimpleContract = artifacts.require("./SimpleContract.sol");
var Greeter = artifacts.require("./Greeter.sol");
var SplitMoney = artifacts.require("./SplitMoney.sol");

module.exports = function(deployer) {

    deployer.deploy(SimpleContract)
        .then(() => SimpleContract.deployed())
        .then(() => deployer.deploy(Greeter, SimpleContract.address))
        .then(() => Greeter.deployed())
        .then(() => deployer.deploy(SplitMoney))
        .then(() => SplitMoney.deployed());

}
