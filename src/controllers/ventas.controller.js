import { Venta } from "../models/Venta.model.js";
import { v4 as uuid } from "uuid";

//TRAE MIS PRODUCTOS
export const getVentas = async (req, res) => {
  try {
    let consulta = await Venta.findAll();
    console.log(consulta);
    res.status(200).json(consulta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error al cargar Ventas." });
  }
};
//CREAMOS PRODUCTOS
export const postVentas = async (req, res) => {
  try {
    const { total, productos, cantidad } = req.body;
    if (!total || !productos || !cantidad) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let today = new Date();
    const nuevaVenta = await Venta.create({
      id: uuid().slice(0, 5),
      fecha: today.toLocaleString(),
      total,
      productos,
      cantidad,
    });
    console.log(nuevaVenta);
    res
      .status(200)
      .json({ data: nuevaVenta, message: "Agregado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "ERROR AL GUARDAR PRODUCTO" });
  }
};
