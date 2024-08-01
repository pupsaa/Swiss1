require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["7b070290d982a4235a46ef3187a4ad0d73d9a2b1df345c48fa2a7f4365241d5d"],
    },
  },
};
