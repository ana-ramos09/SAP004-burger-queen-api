'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products_Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {model:'Products', key:'id'}
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {model:'Orders', key:'id'}
      },
      qtd: {
        type: Sequelize.INTEGER
      },
      has_optional: {
        type: Sequelize.BOOLEAN
      },
      add_cheese: {
        type: Sequelize.BOOLEAN
      },
      add_egg: {
        type: Sequelize.BOOLEAN
      },
      juice_type: {
        type: Sequelize.STRING
      },
      type_of_protein: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products_Order');
  }
};