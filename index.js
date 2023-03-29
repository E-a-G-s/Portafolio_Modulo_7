import app from "./app.js";
import { sequelize } from "./src/db/db.js";

///Modelos tablas
import "./src/models/Producto.model.js";
import "./src/models/Venta.model.js";
import "./src/models/Carrito.model.js";

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Nos hemos conectado con éxito a la Base de Datos");
    await sequelize.sync({ force: true });
    let PORT = 3000;
    app.listen(PORT, () =>
      console.log("Servidor escuchando en http://localhost:" + PORT)
    );
  } catch (error) {
    console.log(
      "Ha ocurrido un error en la coneccion a la Base de Datos: ",
      error
    );
  }
};

main();
