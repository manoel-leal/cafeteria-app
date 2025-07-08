'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ClassicFlavor extends Model {
    static associate(models) {
      ClassicFlavor.belongsToMany(models.BaseIngredient, {
        through: {
          model: models.ClassicFlavorBases,
          unique: false
        },
        as: 'baseIngredients',
        foreignKey: 'classicFlavorId',
        otherKey: 'baseIngredientId'  
      });
    }

    static async seed(values) {
      for (const name of values) {
        await ClassicFlavor.findOrCreate({ where: { name } });
      }
    }
  }

  ClassicFlavor.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassicFlavor',
    tableName: 'ClassicFlavors',
    timestamps: true
  });

  return ClassicFlavor;
};