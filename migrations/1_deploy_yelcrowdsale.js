var MyContract = artifacts.require("YELCrowdsale");
var timeStart = 1625572800;
var timeEnd = 1625752800; //timeStart+60*60*24;
var timeClaim = timeEnd+60*1;
console.log("timeStart " + timeStart);
console.log("timeEnd " + timeEnd);
console.log("timeClaim " + timeClaim);

// contract
//          test 0xDC6d89390E0D9B2Eb328f7EA5393009f1BB245e4
// token
//          develop 0x10DbF313ebcbf264c87CA6eb445CaA860C0856B8
//          product 0xD3b71117E6C1558c1553305b44988cd944e97300

module.exports = function(deployer, network) {
  // deployment steps
  deployer.deploy(MyContract,
      //"0x1271473f5883684F8d482B5B61f7637b3cC51d24",
      "0x10DbF313ebcbf264c87CA6eb445CaA860C0856B8", // token
      "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", // oracle for current ETH price
      200000000000000, // USD with 1e18
      25000000, // tokens without 1e18
      timeStart,
      timeEnd,
      timeClaim
  );
  // https://www.unixtimestamp.com/
};
