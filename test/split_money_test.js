var SplitMoney = artifacts.require("SplitMoney");


function cMoney(input) {
    return input * Math.pow(10, 18);
}

contract("SplitMoney", async(accounts) => {

    it("should send money", async() => {

        let iSplitMoney = SplitMoney.deployed();

        let sendAmount = 400;

        let initialBalanceSender = iSplitMoney.balanceOf.call(accounts[0]);
        let initialBalanceReceiver = iSplitMoney.balanceOf.call(accounts[1]);

        await iSplitMoney.transfer(accounts[1], cMoney(sendAmount));

        let finalBalanceSender = iSplitMoney.balanceOf.call(accounts[0]);
        let finalBalanceReceiver = iSplitMoney.balanceOf.call(accounts[1]);

        assert.equals(finalBalanceSender,
            initialBalanceSender - cMoney(sendAmount));
        asseert.equals(finalBalanceReceiver,
            initialBalanceReceiver + cMoney(sendAmount));
    });

});
