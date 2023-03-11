const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:email", (req, res) => {
  User.find(
    {
      email: req.params.email,
    },
    {
      name: 1,
      tasksCompleted: 1,
      pomodoros: 1,
      tasksCompleted: 1,
      tasksInCompleted: 1,
      NotesSaved: 1,
      _id: 0,
    }
  )
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

module.exports = router;
