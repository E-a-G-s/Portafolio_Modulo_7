import express from "express";
const router = express.Router();

import {
  postProductos,
  getProductos,
  deleteProducto,
  putProductos,
  actualizador,
} from "../controllers/productos.controller.js";
router.get("/", getProductos, (req, res) => {});
router.post("/productos", postProductos, (req, res) => {});
router.delete("/productos/:id", deleteProducto, (req, res) => {});
router.put("/productos", putProductos, (req, res) => {});
router.put("/productos/actualizar", actualizador, (req, res) => {});

router.get("/inventario", (req, res) => {
  res.render("inventario");
});
router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/productos", (req, res) => {
  res.render("productos");
});
router.get("/productos/carrito", (req, res) => {
  res.render("carrito");
});
router.get("/ventas", (req, res) => {
  res.render("ventas");
});

export default router;
