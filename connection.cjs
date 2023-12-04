// Requiere el paquete MySQL utilizando la sintaxis CommonJS
const mysql = require("mysql");

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "", // Coloca tu contraseña aquí
  database: "puntuaciones_thegame",
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: " + err.stack);
    return;
  }

  console.log(
    "Conexión exitosa a la base de datos con el ID " + connection.threadId
  );
});

// Realizar consultas u operaciones aquí...

// Cerrar la conexión cuando hayas terminado
connection.end((err) => {
  if (err) {
    console.error("Error al cerrar la conexión: " + err.stack);
    return;
  }

  console.log("Conexión cerrada.");
});

module.exports = connection;
