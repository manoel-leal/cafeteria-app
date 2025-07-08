'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassicFlavorBases', {
      classicFlavorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ClassicFlavors',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      baseIngredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BaseIngredients',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('ClassicFlavorBases');
  }
};