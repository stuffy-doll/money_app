'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    user_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    from: DataTypes.STRING,
    amount: DataTypes.DECIMAL(12, 2),
    date: DataTypes.DATE
  }, {});
  Transaction.associate = function (models) {
    Transaction.belongsTo(models.User, { foreignKey: "user_id", as: "sender" });
    Transaction.hasOne(models.User, { foreignKey: "user_id", as: "receiver" });
  };
  return Transaction;
};
