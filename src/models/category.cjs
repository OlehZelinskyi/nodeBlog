const { Model } = require("sequelize");

module.exports = class Category extends Model {
  static init = (sequelize, DataTypes) =>
    super.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "category",
      }
    );

  static associate(models) {
    // define association here
  }
};
