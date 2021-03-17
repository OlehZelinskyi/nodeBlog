module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        { title: 'Sport' },
        { title: 'Food' },
        { title: 'Fashion' },
        { title: 'Books' },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
