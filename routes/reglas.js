const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/reglas", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "reglas.html"));
});

module.exports = router;
