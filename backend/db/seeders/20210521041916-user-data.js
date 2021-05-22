'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-User',
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: 'demo@user.io',
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password'),
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        bio: 'I am not a real person - I am an account made for demostration purposes!',
        imgUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
