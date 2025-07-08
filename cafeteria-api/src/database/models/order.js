'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.ClassicFlavor, {
        foreignKey: 'flavorId',
        as: 'classicFlavor'
      });

      Order.belongsToMany(models.BaseIngredient, {
        through: 'OrderBaseIngredients',
        as: 'baseIngredients',
        foreignKey: 'orderId',
        otherKey: 'baseIngredientId'
      });

      Order.belongsToMany(models.Extra, {
        through: 'OrderExtras',
        as: 'extras',
        foreignKey: 'orderId',
        otherKey: 'extraId'
      });
    }
  }

  Order.init({
    flavorId: DataTypes.INTEGER,
    customName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',           // 👈 evita erro "relation Order does not exist"
    timestamps: true,
    underscored: false,            // 👈 evita uso de created_at, updated_at
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });

  return Order;
};