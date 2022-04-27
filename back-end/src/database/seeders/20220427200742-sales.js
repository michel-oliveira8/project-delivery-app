"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("sales", [])
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("sales", null, {});
  },
};
