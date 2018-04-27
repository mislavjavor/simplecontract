var SimpleContract = artifacts.require("./SimpleContract.sol");
var Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {

    deployer.deploy(SimpleContract)
        .then(() => SimpleContract.deployed())
        .then(() => deployer.deploy(Greeter, SimpleContract.address))
        .then(() => Greeter.deployed());

}
