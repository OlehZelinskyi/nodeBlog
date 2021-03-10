"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "Vieri",
          surname: "de Pazzi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mario",
          surname: "Auditore da Firenze",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lorenzo",
          surname: "de' Medici",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cristina",
          surname: "Vespucci",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
