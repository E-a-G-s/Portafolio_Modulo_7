import express from "express";
const router = express.Router();

import { getVentas, postVentas } from "../controllers/ventas.controller.js";

router.get("/venta", getVentas, (req, res) => {});
router.post("/venta", postVentas, (req, res) => {});

export default router;
