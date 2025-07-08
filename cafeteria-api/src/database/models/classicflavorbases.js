'use strict';

module.exports = (sequelize, DataTypes) => {
  const ClassicFlavorBases = sequelize.define('ClassicFlavorBases', {
    classicFlavorId: {
      type: DataTypes.INTEGER,
      field: 'classicFlavorId'
    },
    baseIngredientId: {
      type: DataTypes.INTEGER,
      field: 'baseIngredientId'
    }
  }, {
    tableName: 'ClassicFlavorBases',
    timestamps: true
  });

  return ClassicFlavorBases;
};
