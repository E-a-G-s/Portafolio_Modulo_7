import express from "express";
const router = express.Router();

import {
  getCarrito,
  postCarrito,
  deleteCarrito,
  borrarTablacarrito,
} from "../controllers/carrito.controller.js";

router.get("/carrito", getCarrito, (req, res) => {});
router.post("/carrito", postCarrito, (req, res) => {});
router.delete("/carrito/:id", deleteCarrito, (req, res) => {});
router.delete("/borrar/carrito", borrarTablacarrito, (req, res) => {});

export default router;
