import { Producto } from "../models/Producto.model.js";

//TRAE MIS PRODUCTOS
export const getProductos = async (req, res) => {
  try {
    let consulta = await Producto.findAll();
    console.log(consulta);
    res.status(200).json(consulta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error al cargar Productos." });
  }
};
//CREAMOS PRODUCTOS
export const postProductos = async (req, res) => {
  try {
    const { nombre, descripcion, stock, precio, imagen } = req.body;
    if (!nombre || !descripcion || !stock || !precio || !imagen) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      stock,
      precio,
      imagen,
    });
    res
      .status(200)
      .json({ data: nuevoProducto, message: "Agregado correctamente." });
  } catch (error) {
    res.status(500).json({ error, message: "ERROR AL GUARDAR PRODUCTO" });
  }
};
//ELIMINAMOS PRODUCTOS
export const deleteProducto = async (req, res) => {
  try {
    let { id } = req.params;
    const result = await Producto.destroy({ where: { id } });
    res.status(200).json({ data: result, message: "ELIMINADO CORRECTAMENTE." });
  } catch (error) {
    res.status(400).json({ error, message: "ERROR AL LEER ID" });
  }
};
// PUT PRODUCTOS

export const putProductos = async (req, res) => {
  try {
    let { id, nombre, descripcion, stock, precio, imagen } = req.body;
    if (!id || !nombre || !descripcion || !stock || !precio || !imagen) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let producto = await Producto.findByPk(id);

    console.log(descripcion);
    if (producto == null) {
      res.status(400).send("El producto que intenta actualizar no existe.");
    } else {
      await Producto.update(
        { nombre, descripcion, stock, precio, imagen },
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
};

export const actualizador = async (req, res) => {
  try {
    let result = await ({ id, nombre, descripcion, stock, precio, imagen } =
      req.body);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
