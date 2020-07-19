'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: 'Mexican',
      description: 'Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Mexican-traditional.webp',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Four cheeses',
      description: 'Traditional blend of cheeses: Mozzarella, soft fresh cheese, blue cheese, Reggianito with signature tomato sauce and spicy oregano',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/4-cheese-traditional.webp',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Chicken BBQ',
      description: 'Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Chicken-BBQ-traditional.webp',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Pepperoni',
      description: 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.webp',
      price: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Spinach and Cheese',
      description: 'Ultra-thin dough, chopped spinach, Mozzarella, soft fresh cheese, cream cheese.',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/c6ac6769d068cf8e34c5a507d850b79f.webp',
      price: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Margherita',
      description: 'Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Margherita-traditional.webp',
      price: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Meat',
      description: 'Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Meat-traditional.webp',
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Alfredo',
      description: 'Pizza with creamy spinach sauce, Mozzarella, ham, crispy bacon, mushrooms and juicy tomatoes',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Alfredo-traditional.webp',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ham and mushrooms',
      description: 'Delicate pizza with Garlic ranch sauce, Mozzarella, mushrooms, flavorful ham and garlic',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Ham-and-mushroom-traditional.webp',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Vegetarian',
      description: 'Mozzarella cheese, tomato sauce, tomatoes, mushrooms, sweet green pepper, onion, olives',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Vegetarian-traditional.webp',
      price: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Sweet and sour pork',
      description: 'Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese',
      picture: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/18a85f746b9e0ecf90a82d94b4c46b8d.webp',
      price: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
