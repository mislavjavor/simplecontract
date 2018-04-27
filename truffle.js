var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "air drama raise begin fortune dizzy double vibrant soda unknown scene oxygen"

module.exports = {
  networks: {
    development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "5777" // Match any network id
    },
    rinkeby: {
        provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
        network_id: 4,
        gas: 7000000
    }
  }
};
