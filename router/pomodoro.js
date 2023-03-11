const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("", (req, res) => {
  User.updateOne(
    {
      email: req.body.email,
    },
    { $inc: { pomodoros: req.body.time } }
  )
    .then()
    .catch();
});

module.exports = router;
