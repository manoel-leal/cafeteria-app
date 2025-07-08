'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const existing = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as total FROM "BaseIngredients";`
    );

    const total = parseInt(existing[0][0].total, 10);
    if (total > 0) {
      console.log('[seed] BaseIngredients já existem, pulando insert.');
      return;
    }

    await queryInterface.bulkInsert('BaseIngredients', [
      { name: 'Espresso', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Leite', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chocolate', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sorvete', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Espuma', isAvailable: true, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BaseIngredients', null, {});
  }
};
