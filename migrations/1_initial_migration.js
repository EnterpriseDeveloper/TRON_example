var Migrations = artifacts.require("./Migrations.sol");

module.exports = (deployer, network) => {
  if (network == "shasta") {
    deployer.deploy(Migrations);
  }
};
