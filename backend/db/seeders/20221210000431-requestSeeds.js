'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Requests', [{
      user_id: 1,
      to_id: 2,
      amount: 20.00,
      expires: new Date(Date.now() + (86400000 * 7)),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Requests', null, {});
  }
};
