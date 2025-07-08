'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const existing = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as total FROM "Extras";`
    );

    const total = parseInt(existing[0][0].total, 10);
    if (total > 0) {
      console.log('[seed] Extras já existem, pulando.');
      return;
    }

    await queryInterface.bulkInsert('Extras', [
      { name: 'Leite Vaporizado', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Canela', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chantilly', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gelo', isAvailable: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Caramelo', isAvailable: true, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Extras', null, {});
  }
};