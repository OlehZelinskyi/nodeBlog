"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Assassin's Code",
          pages: 546,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Laws of Venice",
          pages: 765,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Art of Milan",
          pages: 315,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Red Roses",
          pages: 219,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Great Italian War",
          pages: 165,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sonets",
          pages: 230,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
