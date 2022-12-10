'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inbox = sequelize.define('Inbox', {
    user_id: DataTypes.INTEGER
  }, {});
  Inbox.associate = function (models) {
    Inbox.belongsTo(models.User, { foreignKey: "user_id", as: "owner" });
    Inbox.hasMany(models.Notification, { foreignKey: "inbox_id", as: "notifications" });
  };
  return Inbox;
};
