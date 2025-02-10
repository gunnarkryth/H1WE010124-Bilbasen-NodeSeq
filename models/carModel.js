import sequelize from "../config/sequelizeClient.js";
import { Model, DataTypes } from "sequelize";

export class carModel extends Model {}

carModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.0,
    },
  },
  {
    sequelize,
    modelName: "car",
    underscored: true,
    freezeTableName: false,
    createdAt: true,
    updatedAt: true,
  }
);
