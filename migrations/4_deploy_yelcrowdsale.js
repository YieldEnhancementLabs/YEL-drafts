const YELCrowdsale = artifacts.require("YELCrowdsale");

// deployed contract 0x5447FEcF0939F38Ba8FaFC915E06263222D7B7Af
// 0x5185C43C36EE48a28F91fAB54AB1448820BAD3c7
module.exports = function(deployer) {
  deployer.deploy(YELCrowdsale);
};
