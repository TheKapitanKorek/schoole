const express = require("express");
const static = require("../routes/static");
const users = require("../routes/users");
const classes = require("../routes/classes");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", static);
  app.use("/api/users", users);
  app.use("/api/classes", classes);
  app.use("/api/auth", auth);
};
