import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Venta = sequelize.define(
  "ventas",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productos: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
