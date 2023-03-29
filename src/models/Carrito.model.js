import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Carrito = sequelize.define(
  "carrito",
  {
    cantidad: {
      type: DataTypes.INTEGER,
      alloNull: false,
    },
    idProducto: {
      type: DataTypes.INTEGER,
      alloNull: false,
    },
    nombreProducto: {
      type: DataTypes.STRING,
      alloNull: false,
    },
    precioProducto: {
      type: DataTypes.INTEGER,
      alloNull: false,
    },
    stockProducto: {
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
    descripcion: {
      type: DataTypes.STRING,
      alloNull: false,
    },
  },

  { timestamps: false }
);
