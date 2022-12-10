'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inboxes', [
      {
        user_id: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        user_id: 2,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inboxes', null, {});
  }
};
