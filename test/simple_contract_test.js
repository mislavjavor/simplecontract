var SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", async(accounts) => {

    it("should say hello", () => {

        let iSimpleContract = await SimpleContract.deployed();

        let helloResult = iSimpleContract.sayHello();

        console.log(web3.toAscii(helloResult));

    });

});
