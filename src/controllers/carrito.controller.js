import { Carrito } from "../models/Carrito.model.js";
import { Producto } from "../models/Producto.model.js";

export const getCarrito = async (req, res) => {
  try {
    let consulta = await Carrito.findAll();
    //console.log(consulta);
    res.status(200).json(consulta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error al cargar Productos." });
  }
};
/*
export const putCarrito = async (req, res) => {
  try {
    let {
      cantidad,
      idProducto,
      nombreProducto,
      precioProducto,
      stockProducto,
    } = req.body;
    if (
      !cantidad ||
      !idProducto ||
      !nombreProducto ||
      !precioProducto ||
      !stockProducto
    ) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let carro = await Carrito.findByPk(id);
    //console.log(producto);
    if (carro == null) {
      res.status(400).send("El producto que intenta actualizar no existe.");
    } else {
      await Carrito.update(
        {
          cantidad: cantidad + 1,
          idProducto,
          nombreProducto,
          precioProducto,
          stockProducto,
        },
        {
          where: {
            id,
          },
        }
      );
      res.json({ code: 201, message: "producto actualizado correctamente." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "Error al actualizar el producto." });
  }
};*/

export const postCarrito = async (req, res) => {
  try {
    const {
      cantidad,
      idProducto,
      nombreProducto,
      precioProducto,
      stockProducto,
      imagen,
      descripcion,
    } = req.body;
    if (
      !cantidad ||
      !idProducto ||
      !nombreProducto ||
      !precioProducto ||
      !stockProducto ||
      !imagen ||
      !descripcion
    ) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const [nuevoProducto, create2] = await Carrito.findOrCreate({
      where: {
        idProducto,
        nombreProducto,
        stockProducto,
        imagen,
        descripcion,
      },
      defaults: {
        cantidad: 1,
        precioProducto,
      },
    });
    if (!create2) {
      nuevoProducto.increment({ cantidad: 1, precioProducto: precioProducto });
    }

    res.status(200).json({
      data: nuevoProducto,
      message: "Agregado correctamente.",
    });
  } catch (error) {
    res.status(500).json({ error, message: "ERROR AL GUARDAR PRODUCTO" });
  }
};
export const deleteCarrito = async (req, res) => {
  try {
    let { id } = req.params;
    const result = await Carrito.destroy({ where: { id } });
    res.status(200).json({ data: result, message: "ELIMINADO CORRECTAMENTE." });
  } catch (error) {
    res.status(400).json({ error, message: "ERROR AL LEER ID" });
  }
};

export const borrarTablacarrito = async (req, res) => {
  try {
    await Carrito.truncate();
    res.status(200).json({ message: "ELIMINADO CORRECTAMENTE." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: "ERROR AL LEER ID" });
  }
};
