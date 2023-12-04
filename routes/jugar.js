const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/jugar", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "jugar.html"));
});

router.get("/jugar/begin", function (req, res, next) {
  res.sendFile(path.join(rootDir, "util", "gameLogic.js"));
});
module.exports = router;
