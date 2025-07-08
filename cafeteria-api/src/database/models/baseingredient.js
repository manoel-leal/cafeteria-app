'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BaseIngredient extends Model {
    static associate(models) {
      BaseIngredient.belongsToMany(models.ClassicFlavor, {
        through: {
          model: models.ClassicFlavorBases,
          unique: false
        },
        as: 'classicFlavors',
        foreignKey: 'baseIngredientId',
        otherKey: 'classicFlavorId'
      });
    }

    static async seed(values) {
      for (const name of values) {
        await BaseIngredient.findOrCreate({ where: { name } });
      }
    }
  }

  BaseIngredient.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BaseIngredient',
    tableName: 'BaseIngredients',
    timestamps: true,
    underscored: false, 
    createdAt: 'createdAt',     
    updatedAt: 'updatedAt'
  });

  return BaseIngredient;
};