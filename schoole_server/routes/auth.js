const Joi = require("joi");
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
router.get("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByEmail(req.body.email);
  res.send(user);
});

function validate(credentials) {
  const schema = {
    email: Joi.string().min(5).max(100).required(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(credentials, schema);
}

module.exports = router;
