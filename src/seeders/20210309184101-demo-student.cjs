"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          name: "Ezio",
          surname: "Auditore da Firenze",
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leonardo",
          surname: "da Vinci",
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Piero",
          surname: "de Medici",
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo",
          surname: "Borgia",
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Niccolo",
          surname: "Machiavelli",
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antonio",
          surname: "Magianis",
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Federico",
          surname: "Auditore da Firenze",
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Petruccio",
          surname: "Auditore da Firenze",
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
