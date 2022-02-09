const SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, "Nathan Pound Token", "NPT");
};
