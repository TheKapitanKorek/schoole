const express = require("express");
const router = express.Router();
const { Class, validateClass } = require("../models/class");
const Student = require("../models/student");

router.post("/", async (req, res) => {
  const { insertId } = await Class.addClass(req.body.class_name, req.body.year);
  const result = await Student.addStudents(req.body.studentsArray, insertId);
  res.send(result);
});

module.exports = router;
