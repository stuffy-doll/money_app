'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        following_id: 1,
        follower_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        following_id: 2,
        follower_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
