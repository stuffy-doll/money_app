'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [
      {
        inbox_id: 2,
        message: "Bag Man has requested money!",
        read: false,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};
