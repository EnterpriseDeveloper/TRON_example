const TronTokenDemo = artifacts.require("TronTokenDemo.sol");
const TokenSale = artifacts.require("TokenSale.sol");

module.exports = async (deployer, network) => {
  if (network == "shasta") {
    let initialSupplyCoins = 1000000000
    let name = "Max token"
    let symbol = "MAXI"
    let decimals = 18
    // add initial supply to the constructor
    await deployer.deploy(TronTokenDemo, initialSupplyCoins, name, symbol, decimals)
    // token price is 1 Tron
    let tokenPrice = 1000000;
    await deployer.deploy(TokenSale, TronTokenDemo.address, tokenPrice);
    return;
  }

};
