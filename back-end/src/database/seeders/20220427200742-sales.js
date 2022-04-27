"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("sales", [])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
