const express = require("express");
const router = express.Router();
const users = require("../model/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const isUserThere = await users.findOne({ email: req.body.email });
  if (isUserThere === null) {
    return res.json({ status: false, message: "User not found" });
  } else {
    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      isUserThere.password
    );

    if (isPasswordMatch) {
      res.json({
        status: true,
        message: "logged in successfully",
      });
    } else {
      res.json({ status: false, message: "Incorrect password" });
    }
  }
});

router.post("/createuser", async (req, res) => {
  console.log(req.body);

  const isUserThere = await users.findOne({ email: req.body.email });
  console.log(isUserThere);

  if (isUserThere === null) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const userData = await users.create({
      name: req.body.name,
      password: hash,
      email: req.body.email,
    });
    res.status(201).send({
      status: true,
      message: "logged in successfully",
    });
  } else {
    res.send({ status: false, message: "User already exists" });
  }
});

module.exports = router;
