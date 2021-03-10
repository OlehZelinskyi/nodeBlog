"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Classes",
      [
        {
          number: 8,
          letter: "A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 8,
          letter: "B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 8,
          letter: "C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Classes", null, {});
  },
};
