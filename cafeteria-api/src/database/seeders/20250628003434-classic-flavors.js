'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ClassicFlavors', [
      { name: 'Macchiato', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Latte', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mocha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Affogato', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ClassicFlavors', null, {});
  }
};