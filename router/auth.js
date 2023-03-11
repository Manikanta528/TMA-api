const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", (req, res) => {
  //console.log(req.body);
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
      if (user.password !== req.body.password) {
        return res.json({ user: false, err: "wrong password" });
      }
      return res.json({ login: "success" });
    })
    .catch((error) => {
      //console.log(error);
      return res.status(200).json({ user: false, err: error });
    });
});

module.exports = router;
