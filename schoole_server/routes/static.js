const express = require("express");

const router = express.Router();

const path = require("path");
buildRef = "../../schoole_client/build";

router.use(express.static(path.join(__dirname, buildRef)));

router.get("/hello", (req, res) => {
  res.send("Hello world!");
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, buildRef, "index.html"));
});

module.exports = router;
