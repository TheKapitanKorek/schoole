const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");

router.post("/", async (req, res) => {
  console.log(req.body);
  //TO DO NEXT
  const result = await User.addUser("teacher", 1, "example@gmail.com", "pword");
  res.send(result);
});

module.exports = router;
