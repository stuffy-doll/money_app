'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [
      {
        user_id: 1,
        to_id: 2,
        to: "Bag Woman",
        from: "Bag Man",
        amount: 20.00,
        date: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        user_id: 2,
        to_id: 1,
        to: "Bag Man",
        from: "Bag Woman",
        amount: 20.00,
        date: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        user_id: 1,
        to_id: 2,
        to: "Bag Woman",
        from: "Bag Man",
        amount: 20.00,
        date: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};
