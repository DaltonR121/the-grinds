'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        coffeeId: 1,
        rating: 5,
        review: 'This is my favorite go to coffee. Not bitter and smooth going down. Great value as well.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        coffeeId: 1,
        rating: 3,
        review: 'I have been trying to get more of this in the local stores and after a frustrating wait all summer I chose instead to pull the trigger on the Amazon product. I was not disappointed. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        coffeeId: 2,
        rating: 5,
        review: `I am a Starbucks coffee person and anything else I've ordered just doesn't quite match up, but this, this is delicious.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        coffeeId: 3,
        rating: 3,
        review: `Okay so we are picky coffee drinkers in the taste of this is okay. It's not the best we've had but it's good!`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        coffeeId: 4,
        rating: 5,
        review: 'Good flavor. Bold taste.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        coffeeId: 5,
        rating: 4,
        review: 'My family loves this coffee. The flavor is perfect for us.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        coffeeId: 7,
        rating: 4,
        review: 'My husband has loved drinking this for years. Recently we’ve had to strain about every third cup because they are not properly sealed and the grounds spill out.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        coffeeId: 8,
        rating: 5,
        review: 'There are few things in life that one cannot possibly live without. For example, water, oxygen, the warmth of the sun..... this coffee!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
