'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Extra extends Model {
    static associate(models) {
      Extra.belongsToMany(models.Order, {
        through: 'OrderExtras',
        as: 'orders',
        foreignKey: 'extraId',
        otherKey: 'orderId'
      });
    }

    static async seed(values) {
      for (const name of values) {
        await Extra.findOrCreate({ where: { name } });
      }
    }
  }

  Extra.init({
    name: DataTypes.STRING,
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  }, {
    sequelize,
    modelName: 'Extra',
    tableName: 'Extras',
    timestamps: true,
    underscored: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });

  return Extra;
};
