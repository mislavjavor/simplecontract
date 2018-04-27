var SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", async(accounts) => {

    it("should say hello", async() => {

        let iSimpleContract = await SimpleContract.deployed();

        let helloResult = await iSimpleContract.sayHello();

        console.log(web3.toAscii(helloResult));

    });

});
