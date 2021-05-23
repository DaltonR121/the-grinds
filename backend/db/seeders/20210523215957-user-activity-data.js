'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserActivities', [
      {
        userId: 2,
        coffeeId: 1,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserActivities', null, {});
  }
};
