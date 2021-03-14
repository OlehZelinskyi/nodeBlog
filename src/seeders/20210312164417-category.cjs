"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fashion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
