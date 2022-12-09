'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'bagman@user.io',
        username: 'bagman',
        name: "Bag Man",
        tag: "bagman",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'bagwoman@user.io',
        username: 'bagwoman',
        name: 'Bag Woman',
        tag: 'bagwoman',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
