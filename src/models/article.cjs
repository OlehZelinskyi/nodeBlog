const { Model } = require('sequelize');

module.exports = class Article extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [5, 100],
              msg: 'Title must be between 5 and 100 chars',
            },
          },
        },
        content: {
          type: DataTypes.TEXT,
          validate: {
            len: {
              args: [5, 1000],
              msg: 'Content must be between 5 and 1000 chars',
            },
          },
        },
        category_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Article',
      },
    );
  }

  // static associate(models) {
  //   // define association here
  // }
};
