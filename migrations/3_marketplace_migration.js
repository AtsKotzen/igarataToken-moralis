const IgarataMarketContract = artifacts.require("IgarataMarketContract");

module.exports = function (deployer) {
  deployer.deploy(IgarataMarketContract);
};
