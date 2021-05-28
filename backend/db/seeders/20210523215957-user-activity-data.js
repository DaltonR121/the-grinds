'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserActivities', [
      {
        userId: 2,
        coffeeId: 2,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        coffeeId: 7,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        coffeeId: 8,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        coffeeId: 6,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        coffeeId: 4,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        coffeeId: 2,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        coffeeId: 3,
        description: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
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
