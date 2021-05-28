'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Coffees', [
      {
        flavorName: 'Mudslide Coffee',
        companyId: 9,
        description: `The decadent taste of rich, creamy chocolate. The addition of warm milk will highlight the chocolate flavors`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0453/5120/7077/products/GJCMudslide_540x.jpg?v=1600046022',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Hazelnut Ground Coffee',
        companyId: 13,
        description: `Maxwell House Hazelnut Ground Coffee - A perfectly balanced coffee flavored with the slightly sweet, buttery taste of toasted hazelnuts. Our Maxwell House Hazelnut ground coffee contains natural and artificial flavors to give you the exquisite taste of a barista-made hazelnut coffee in the comfort of your home. - Warm and Toasty Hazelnut Flavor - At home, adding flavored syrup into regular coffee is not the only way to get a sweet, nutty brew. Our Hazelnut Ground Coffee gives you a smooth, creamy and mellow hazelnut coffee without the need for additions, anywhere, any time. Your friends and family will love it.`,
        imgUrl: 'https://images.salsify.com/image/upload/s--YjkeUL6_--/h_400,w_400,q_80/ryi5xrhmh2nhedwrm6fw.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Misfit',
        companyId: 3,
        description: `A little on the dark side, but not too much!A rotating blend of coffees from the Americas and East Africa. This is our most traditional offering for those who prefer a bit more of a roasty cup. Great on any brew method. Good choice for those who want an old school espresso at home. Plays well with milk, cream, syrups, and sugar.`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/1907/0145/products/misfit_white_900x.jpg?v=1605537117',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Cardinal',
        companyId: 2,
        description: `The Cardinal is the very first Compass blend and the house coffee at the Compass Cafe. Can get this flavor in a 5lb bag in order to give a larger supply of our most popular blend to our customers. It’s smooth and mellow with a nutty caramel flavor that will leave you wanting more and this 5lb bag will ensure you never run out too quick.`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0489/4205/products/cardinal-medium-roast-coffee-beans-5lb-bag_600x.png?v=1599659566',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Pumpkin Spice Coffee',
        companyId: 9,
        description: `Signature fall whole bean, is a unique blend of freshly baked pumpkin pie, cinnamon and nutmeg flavors. 100% Arabica beans with a medium roast, medium acidity and a smooth finish.`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0453/5120/7077/products/GJCPumpkinSpice_540x.jpg?v=1600049301',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Ecstatic',
        companyId: 6,
        description: `We use this blend to make our Ecstatic Iced Coffee, which is the base of all of our specialty iced coffee drinks. With a balanced combination of bittersweet cocoa, a dense syrupy body and a subtle citris finish, it pairs deliciously with cream and sugar. Try it as iced coffee or your favorite way at home!`,
        imgUrl: 'https://www.philzcoffee.com/images/items/coffee-darker-blends-ecstatic.01.png?resizeid=3&resizeh=400&resizew=400',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: 'Valhalla Java Odinforce Blend',
        companyId: 1,
        description: `Meet the Valhalla Java Odinforce blend—coffee made to power the world's most powerful guitarist, Zakk Wylde. Worthy of the gods, these beans were forged from the volcanic soils of Indonesia and nutrient- rich soils of Central and South America. Crafted for boldness and maximum flavor, this blend is strong enough to wake the dead and chariot them gloriously through the gates of Valhalla.`,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0271/7209/products/Valhalla_Java-ground-12oz-front_3qtrR_1024x1024.jpg?v=1600381022',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flavorName: `Jacob's Wonderbar`,
        companyId: 6,
        description: `Named in honor of Phil’s only son, Jacob. Each memorable sip boasts delicious layers of nuts and chocolate filled with a full-bodied flavor. Jacob’s Wonderbar has become a dark roast favorite!`,
        imgUrl: 'https://www.philzcoffee.com/images/items/coffee-darker-blends-jacobs-wonderbar.01.png?resizeid=3&resizeh=400&resizew=400',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Coffees', null, {});
  }
};
