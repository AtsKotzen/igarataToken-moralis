const IgarataToken = artifacts.require("IgarataToken");

module.exports = function (deployer) {
  deployer.deploy(IgarataToken);
};
