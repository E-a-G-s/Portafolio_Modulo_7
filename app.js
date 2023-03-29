import express from "express";
import { create } from "express-handlebars";
import routesViews from "./src/routes/views.routes.js";
import carritotViews from "./src/routes/carrito.routes.js";
import ventaViews from "./src/routes/ventas.routes.js";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HANDLEBARS
const hbs = create({
  partialsDir: ["views/partials/"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//Coneccion
//app.listen(3000, () => console.log("http://localhost:3000"));
app.use(routesViews);

app.use(carritotViews);
app.use(ventaViews);

export default app;
