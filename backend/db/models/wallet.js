'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    user_id: DataTypes.INTEGER,
    pin: DataTypes.STRING,
    amount: DataTypes.DECIMAL(12, 2)
  }, {});
  Wallet.associate = function (models) {
    Wallet.belongsTo(models.User, { foreignKey: "user_id", as: "owner" });
  };
  return Wallet;
};
