'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: 'Mexican',
      description: 'Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper',
      picture: 'https://i.ibb.co/D4FqRq6/Mexican-traditional.png',
      price: 1599,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Four cheeses',
      description: 'Traditional blend of cheeses: Mozzarella, soft fresh cheese, blue cheese, Reggianito with signature tomato sauce and spicy oregano',
      picture: 'https://i.ibb.co/WkcwJTf/4-cheese-traditional.png',
      price: 1599,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Chicken BBQ',
      description: 'Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion',
      picture: 'https://i.ibb.co/1sLXhNP/Chicken-BBQ-traditional.png',
      price: 1599,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Pepperoni',
      description: 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce',
      picture: 'https://i.ibb.co/34kcwL0/Pepperoni-traditional.png',
      price: 1899,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Spinach and Cheese',
      description: 'Ultra-thin dough, chopped spinach, Mozzarella, soft fresh cheese, cream cheese.',
      picture: 'https://i.ibb.co/SdXR95N/c6ac6769d068cf8e34c5a507d850b79f.png',
      price: 1299,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Margherita',
      description: 'Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes',
      picture: 'https://i.ibb.co/Z6WtHRT/Margherita-traditional.png',
      price: 1299,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Meat',
      description: 'Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce',
      picture: 'https://i.ibb.co/ygZCzW0/Meat-traditional.png',
      price: 2099,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Alfredo',
      description: 'Pizza with creamy spinach sauce, Mozzarella, ham, crispy bacon, mushrooms and juicy tomatoes',
      picture: 'https://i.ibb.co/4WKKhkW/Alfredo-traditional.png',
      price: 1599,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ham and mushrooms',
      description: 'Delicate pizza with Garlic ranch sauce, Mozzarella, mushrooms, flavorful ham and garlic',
      picture: 'https://i.ibb.co/RSF9HXg/Ham-and-mushroom-traditional.png',
      price: 1599,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Vegetarian',
      description: 'Mozzarella cheese, tomato sauce, tomatoes, mushrooms, sweet green pepper, onion, olives',
      picture: 'https://i.ibb.co/YNh5qPp/Vegetarian-traditional.png',
      price: 1299,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Sweet and sour pork',
      description: 'Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese',
      picture: 'https://i.ibb.co/Cm5yXDW/18a85f746b9e0ecf90a82d94b4c46b8d.png',
      price: 1899,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
