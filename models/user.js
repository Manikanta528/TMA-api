const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    task: { type: Array, default: [] },
    tasksCompleted: { type: Number, default: 0 },
    tasksInCompleted: { type: Number, default: 0 },
    pomodoros: { type: Number, default: 0 },
    note: { type: Array, default: [] },
    NotesSaved: { type: Number, default: 0 },
  },
  { collection: "user" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
