var SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", async(accounts) => {

    it("should say hello", async() => {

        let expected = "Hello";

        let iSimpleContract = await SimpleContract.deployed();

        let helloResult = await iSimpleContract.sayHello();

        assert.equal(web3.toAscii(helloResult).replace(/\0/g, ''), expected);
    });

});
