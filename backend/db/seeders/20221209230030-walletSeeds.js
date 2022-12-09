'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wallets', [{
      user_id: 1,
      pin: "1337",
      amount: 100.00,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wallets', null, {});
  }
};
