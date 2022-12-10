'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    inbox_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    read: DataTypes.BOOLEAN
  }, {});
  Notification.associate = function (models) {
    Notification.belongsTo(models.Inbox, { foreignKey: "inbox_id", as: "inbox" });
  };
  return Notification;
};
