'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    user_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Comment.belongsTo(models.Transaction, { foreignKey: "transaction_id", as: "transaction" });
  };
  return Comment;
};
