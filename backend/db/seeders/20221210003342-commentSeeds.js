'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        user_id: 2,
        transaction_id: 1,
        content: "Thanks!",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
