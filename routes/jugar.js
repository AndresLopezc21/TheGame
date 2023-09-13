const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/jugar", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "jugar.html"));
});

router.get('/js', function(req, res) {
  res.sendFile(path.join(rootDir , "util", "gameLogic.js"));
});

module.exports = router;
