'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    user_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(12, 2),
    expires: DataTypes.DATE
  }, {});
  Request.associate = function (models) {
    Request.belongsTo(models.User, { foreignKey: "user_id", as: "requestee" });
    Request.hasOne(models.User, { foreignKey: "user_id", as: "payee" });
  };
  return Request;
};
