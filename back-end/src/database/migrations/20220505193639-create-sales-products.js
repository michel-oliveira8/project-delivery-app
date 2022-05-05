"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("salesProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      saleId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "sale_id",
        // references: {
        //   model: "sales",
        //   key: "id",
        // },
      },
      productId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "product_id",
        // references: {
        //   model: "products",
        //   key: "id",
        // },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("salesProducts");
  },
};
