'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Buscando os IDs necessários
    const [ingredients] = await queryInterface.sequelize.query(
      `SELECT id, name FROM "BaseIngredients";`
    );

    const [flavors] = await queryInterface.sequelize.query(
      `SELECT id, name FROM "ClassicFlavors";`
    );

    const findId = (arr, name) => arr.find(i => i.name === name)?.id;

    const associations = [
      { flavor: 'Macchiato', bases: ['Espresso', 'Leite', 'Espuma'] },
      { flavor: 'Latte',     bases: ['Espresso', 'Leite'] },
      { flavor: 'Mocha',     bases: ['Espresso', 'Leite', 'Chocolate'] },
      { flavor: 'Affogato',  bases: ['Sorvete', 'Espresso'] },
    ];

    const now = new Date();
    const inserts = [];

    associations.forEach(combo => {
      const flavorId = findId(flavors, combo.flavor);
      combo.bases.forEach(base => {
        inserts.push({
          classicFlavorId: flavorId,
          baseIngredientId: findId(ingredients, base),
          createdAt: now,
          updatedAt: now,
        });
      });
    });

    await queryInterface.bulkInsert('ClassicFlavorBases', inserts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ClassicFlavorBases', null, {});
  }
};