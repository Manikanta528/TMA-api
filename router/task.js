const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:email", (req, res) => {
  User.find(
    {
      email: req.params.email,
    },
    { task: 1, _id: 0 }
  )
    .then((data) => {
      res.json({ status: "ok", data: data });
      //console.log(data);
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

router.post("/", (req, res) => {
  const arr = req.body.task;
  //console.log(arr);
  let completedTasks = arr.filter((task) => task.completed === true).length;
  let inCompletedTasks = arr.filter((task) => task.completed === false).length;

  User.updateOne(
    { email: req.body.email },
    {
      task: req.body.task,
      tasksCompleted: completedTasks,
      tasksInCompleted: inCompletedTasks,
    }
  )
    .then((task) => {
      res.json({ status: "ok", task: task });
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

router.put("/:email", (req, res) => {
  const arr = req.body.task;
  //console.log(arr);
  let completedTasks = arr.filter((task) => task.completed === true).length;
  let inCompletedTasks = arr.filter((task) => task.completed === false).length;

  User.updateOne(
    { email: req.params.email },
    {
      task: req.body.task,
      tasksCompleted: completedTasks,
      tasksInCompleted: inCompletedTasks,
    }
  )
    .then((response) => {
      //console.log(response);
      res.json({ status: "ok", task: task });
    })
    .catch((err) => {
      res.json({ status: "error", err });
    });
});

module.exports = router;
