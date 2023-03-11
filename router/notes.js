const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:email", (req, res) => {
  User.find(
    {
      email: req.params.email,
    },
    { note: 1, _id: 0 }
  )
    .then((data) => {
      res.json({ data: data });
      //console.log(data);
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

router.post("/:email", (req, res) => {
  User.updateOne(
    { email: req.params.email },
    { note: req.body.notes, NotesSaved: req.body.notes.length }
  )
    .then((note) => {
      res.json({ notes: note });
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

module.exports = router;
