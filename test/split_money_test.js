var SplitMoney = artifacts.require("SplitMoney");


function cMoney(input) {
    return input * Math.pow(10, 18);
}

contract("SplitMoney", async(accounts) => {

    it("should send money", async() => {

        let iSplitMoney = await SplitMoney.deployed();

        let sendAmount = 400;

        let initialBalanceSender = await iSplitMoney.balanceOf(accounts[0]);
        let initialBalanceReceiver = await iSplitMoney.balanceOf(accounts[1]);

        await iSplitMoney.transfer(accounts[1], cMoney(sendAmount));

        let finalBalanceSender =  await iSplitMoney.balanceOf(accounts[0]);
        let finalBalanceReceiver = await iSplitMoney.balanceOf(accounts[1]);

        console.log("Initial balance sender:" + initialBalanceSender.toString());
        console.log("Final balance sender:" + finalBalanceSender.toString());

        console.log("Initial balance receiver:" + initialBalanceReceiver.toString());
        console.log("Final balance sender:" + finalBalanceReceiver.toString());

    });

});
