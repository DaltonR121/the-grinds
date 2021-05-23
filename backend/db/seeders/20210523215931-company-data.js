'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Companies', [
      {
        name: 'Death Wish Coffee',
        yearFounded: '2008',
        description: `Death Wish Coffee is a coffee brand that claims to sell the "world's strongest coffee." The coffee is primarily sold online, but it is also sold in grocery stores across the United States. Death Wish Coffee was introduced in 2012. The company was founded by Mike Brown in Saratoga Springs, New York, and is headquartered in Saratoga Springs, New York. Its production facility is in Round Lake, New York. Death Wish claims that its coffee has double the caffeine of an average cup of coffee, but that it also does not taste bitter or acidic. Death Wish Coffee and Valhalla Java are USDA-certified organic and can be found in more than 10,000 stores across the nation, including Hannaford, Kroger, Price Chopper, Healthy Living Market, ShopRite, Safeway, and Walmart.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Death_Wish_Coffee_Logo.svg/220px-Death_Wish_Coffee_Logo.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Compass Coffee',
        yearFounded: '2014',
        description: `Compass Coffee ("Compass") is an American coffee roaster and retailer based in Washington, D.C. It was founded in 2014 by Michael Haft and Harrison Suarez, both former Marines. The company currently has twelve existing locations in Washington, D.C. and Virginia, including one active roasting facility. Compass serves hot and cold drinks, whole bean and ground coffee, espresso, latte, bagged and loose-leaf teas. Compass is in the process of constructing a roasting facility in the Ivy City neighborhood of Washington, D.C. to support its East Coast operations.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Compass_Coffee_logo.svg/150px-Compass_Coffee_logo.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Revelator Coffee',
        yearFounded: '2013',
        description: `Revelator Coffee Company LLC is an American coffee roasting company headquartered in Birmingham, Alabama. The company was founded by Josh Owen, Emma Chevalier and Elizabeth Pogue in October 2013 and was originally located in New Orleans, Louisiana, until moving to Birmingham in February 2015. Revelator Coffee opened its first coffee shop in Birmingham in October 2014 and now operates 20 locations around the southern United States, as well as two in Massachusetts. The company acquired Boston, Massachusetts-based Wired Puppy and Atlanta, Georgia-based Octane Coffee in 2017 and presently operates coffee shops under their brands.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Revelator_Coffee.png/220px-Revelator_Coffee.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Black Ivory Coffee',
        yearFounded: '2012',
        description: `Black Ivory Coffee is a brand of coffee produced by the Black Ivory Coffee Company Ltd in northern Thailand from Arabica coffee beans consumed by elephants and collected from their waste. The taste of Black Ivory coffee is influenced by elephants' digestive enzymes, which breaks down the coffee's protein. Black Ivory coffee is among the world's most expensive coffees, at US$2,000 per kilogram. It has limited availability at a few luxury hotels it is available at the price of US$50 a cup and via the internet website. An average of 150 kilograms of the coffee produced every year. The supply of Black Ivory coffee depends on the availability of coffee cherries, the appetite of the elephants, the number of beans destroyed through chewing of the beans and the ability of the mahouts and their wives to recover intact beans. The high price of the product is largely due to the large number of coffee cherries needed to produce the finished product: 33 kilograms (72 pounds) of raw coffee cherries results in one kilogram (two pounds) of the finished product. Most of the beans are not recoverable because they are chewed by the elephants, become fragmented, or after being excreted are lost in the bush.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Black_Ivory_coffee_Glass.jpg/220px-Black_Ivory_coffee_Glass.jpg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mikel Coffee Company',
        yearFounded: '2008',
        description: `Mikel Coffee Company, or Mikel, is a rapidly expanding Greek coffeehouse chain, whose network consists of more than 270 coffee shops all over the world. MIKEL launched its first coffee store in 2008 in the city of Larissa. In the years that followed, MIKEL gradually expanded throughout Greece with the city of Volos being the starting point. As of recently, MIKEL has expanded beyond Greece, launching its first coffee store in the United Arab Emirates in 2016. The company has already opened four stores in Dubai and imposed itself as an important competitor in its sector. As of March 2018, the company has also begun operating in London. As of August 2018, the company has also opened their first store in Australia. As of September 2018, the company has also opened their first store in U.S.A.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Mikel_Coffee_logo.png/220px-Mikel_Coffee_logo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Philz Coffee',
        yearFounded: '2003',
        description: `Philz Coffee is an American coffee company and coffeehouse chain based in San Francisco, California, considered a major player in third wave coffee. Philz Coffee focuses on making drip coffee. Philz Coffee has 65 locations spread throughout the San Francisco Bay Area, greater Los Angeles, San Diego, Washington, D.C., Sacramento, Maryland, Arlington, Virginia, and most recently in Chicago. Philz has also opened its first Mobile store in San Francisco. Philz was founded by Phil Jaber, located in San Francisco area. In addition to its extensive line of coffee and drinks they also have a line of merchandise and bagged coffee blends for purchase online.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/e/e9/Philz_coffee_logo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan Valdez Café',
        yearFounded: '2002',
        description: `Juan Valdez Café is a multinational coffeehouse chain based in Colombia that specializes in coffee retail. Its purpose is to become a member of the worldwide coffee restaurant business, and promote Colombian coffee. It was created by Colombia's National Federation of Coffee Growers through Procafecol S.A.; the latter being a company established in 2002. It was named after Juan Valdez, Colombia's longtime coffee icon and a household name in the United States.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Juan_Valdez_Caf%C3%A9_Logo.jpg/220px-Juan_Valdez_Caf%C3%A9_Logo.jpg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Keurig Green Mountain',
        yearFounded: '1996',
        description: `Keurig Dr Pepper Inc., formerly Keurig Green Mountain (2014–2018) and originally Green Mountain Coffee Roasters (1981–2014), is a publicly traded American beverage and beverage-maker conglomerate with headquarters in Burlington, Massachusetts. Its east-coast division sells coffee and other beverages, and Keurig brewers. As of July 2018, the newly merged conglomerate also sells sodas, juices, and other soft drinks via its Dr Pepper Snapple (also called Dr. Pepper/7up Inc.) division based in Texas.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Keurig_Dr_Pepper.svg/220px-Keurig_Dr_Pepper.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Gloria Jean's Coffees`,
        yearFounded: '1979',
        description: `Gloria Jean's Coffees is an American-Australian retail coffeehouse chain company that operates more than 1,000 coffee houses in 39 countries, including over 460 in Australia. In 2014, Gloria Jean's was purchased by the Retail Food Group for AU$163.5 million.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Gloria_Jean%27s_Coffees_logo.jpg/220px-Gloria_Jean%27s_Coffees_logo.jpg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Starbucks`,
        yearFounded: '1971',
        description: `Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. As the world's largest coffeehouse chain, Starbucks is seen to be the main representation of the United States' third wave of coffee culture. As of September 2020, the company had 32,660 stores in 83 countries, including 16,637 company operated stores and 16,023 licensed stores. Of these 32,660 stores, 18,354 were in the United States, Canada, and Latin America. Starbucks locations serve hot and cold drinks, whole-bean coffee, microground instant coffee known as VIA, espresso, caffe latte, full- and loose-leaf teas including Teavana tea products, Evolution Fresh juices, Frappuccino beverages, La Boulange pastries, and snacks including items such as chips and crackers; some offerings (including the annual fall launch of the Pumpkin Spice Latte) are seasonal or specific to the locality of the store. Depending on the country, most locations offer free Wi-Fi.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/125px-Starbucks_Corporation_Logo_2011.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Tim Hortons`,
        yearFounded: '1964',
        description: `Tim Hortons Inc. is a Canadian multinational fast food restaurant chain. Based in Toronto, Tim Hortons serves coffee, doughnuts and other fast food items. It is Canada's largest quick-service restaurant chain, with 4,846 restaurants in 14 countries as of December 31, 2018. The company was founded in 1964 in Hamilton, Ontario, by Canadian hockey player Tim Horton and Jim Charade, after an initial venture in hamburger restaurants. In 1967, Horton partnered with investor Ron Joyce, who assumed control over operations after Horton died in 1974. Joyce expanded the chain into a multi-billion dollar franchise. Charade left the organization in 1966 and briefly returned in 1970 and 1993 through 1996.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tim_Hortons_Logo.svg/220px-Tim_Hortons_Logo.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Dunkin' Donuts`,
        yearFounded: '1950',
        description: `Dunkin' Donuts LLC, also known as Dunkin', is an American multinational coffee and doughnut company, as well as a quick service restaurant. It was founded by William Rosenberg in Quincy, Massachusetts, in 1950. The chain was acquired by Baskin-Robbins' holding company Allied Domecq in 1990; its acquisition of the Mister Donut chain and the conversion of that chain to Dunkin' Donuts facilitated the brand's growth in North America that year. Dunkin' and Baskin-Robbins eventually became subsidiaries of Dunkin' Brands, headquartered in Canton, Massachusetts, in 2004, until being purchased by Inspire Brands on December 15, 2020. The chain began rebranding as a "beverage-led company", and was renamed Dunkin', in January 2019; while stores in the U.S. began using the new name, the rebranding will eventually be rolled out to all of its international stores.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Dunkin%27_Donuts_logo.svg/220px-Dunkin%27_Donuts_logo.svg.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Maxwell House`,
        yearFounded: '1892',
        description: `Maxwell House is an American brand of coffee manufactured by a like-named division of Kraft Heinz. Introduced in 1892 by wholesale grocer Joel Owsley Cheek, it was named in honor of the Maxwell House Hotel in Nashville, Tennessee, which was its first major customer. For nearly 100 years, until the late 1980s, it was the highest-selling coffee brand in the United States. The company's slogan is "Good to the last drop," which is often incorporated into its logo and is printed on its labels.`,
        imgUrl: `https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Maxwell_House_logo.png/220px-Maxwell_House_logo.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
