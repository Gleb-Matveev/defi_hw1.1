const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("AppleModule", (m) => {
  const stock_value = m.getParameter("stock_value", 2);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const apple = m.contract("Apple", [stock_value], {
    value: lockedAmount,
  });

  return { apple };
});
