'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('BaseIngredients', [
      {
        name: 'Espresso',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leite Vaporizado',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate',
        isAvailable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Extras', [
      {
        name: 'Canela',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leite Condensado',
        isAvailable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('BaseIngredients', null, {});
    await queryInterface.bulkDelete('Extras', null, {});
  }
};