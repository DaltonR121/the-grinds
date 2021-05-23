'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Coffees', [
      {
        flavorName: 'VALHALLA JAVA ODINFORCE BLEND',
        companyId: 1,
        description: `Meet the Valhalla Java Odinforce blend—coffee made to power the world's most powerful guitarist, Zakk Wylde. Worthy of the gods, these beans were forged from the volcanic soils of Indonesia and nutrient- rich soils of Central and South America. Crafted for boldness and maximum flavor, this blend is strong enough to wake the dead and chariot them gloriously through the gates of Valhalla.`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0271/7209/products/Valhalla_Java-ground-12oz-front_3qtrR_1024x1024.jpg?v=1600381022',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Coffees', null, {});
  }
};
