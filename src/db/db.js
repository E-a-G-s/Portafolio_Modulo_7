import Sequelize from "sequelize";

export const sequelize = new Sequelize("Portafolio_m7", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});
/*
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
*/
