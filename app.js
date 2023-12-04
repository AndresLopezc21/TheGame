const path = require("path");

const express = require("express");

const app = express();

const connection = require("./connection.cjs");

const menuRoutes = require("./routes/menu");

const reglasRoutes = require("./routes/reglas");

const jugarRoutes = require("./routes/jugar");

app.use(express.static(path.join(__dirname, "public")));

app.use(menuRoutes);

app.use(reglasRoutes);

app.use(jugarRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
