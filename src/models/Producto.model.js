import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Producto = sequelize.define(
  "productos",
  {
    nombre: {
      type: DataTypes.STRING,
      alloNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      alloNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      alloNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      alloNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  { timestamps: false }
);
