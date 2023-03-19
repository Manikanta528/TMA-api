const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.create({ name, email, password })
    .then(() => {
      return res.json("ok");
    })
    .catch((err) => {
      return res.json(err);
    });
});

router.post("/login", (req, res) => {
  //console.log(req);
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      //console.log(user);
      if (user === null) {
        return res.json({ user: false, err: "user not found" });
      }
      //console.log(user.password !== req.body.password)
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          return res.json({ user: false, err: "wrong password" });
        }
        if(!result){
          return res.json({ user: false, err: "wrong password" });
        }
        if (result) {
          return res.json({ login: "success" });
        }
      });
    })
    .catch((error) => {
      //console.log(error);
      return res.status(200).json({ user: false, err: error });
    });
});

module.exports = router;
