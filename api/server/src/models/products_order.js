'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_Order = sequelize.define('Products_Order', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
    has_optional: DataTypes.BOOLEAN,
    add_cheese: DataTypes.BOOLEAN,
    add_egg: DataTypes.BOOLEAN,
    juice_type: DataTypes.STRING,
    type_of_protein: DataTypes.STRING
  }, {});
  Products_Order.associate = function(models) {
    Products_Order.belongsTo(models.Product)
    Products_Order.belongsTo(models.Order)
  };
  return Products_Order;
};