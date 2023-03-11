const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

const auth = require("./router/auth.js");
const task = require("./router/task.js");
const notes = require("./router/notes.js");
const pomodoro = require("./router/pomodoro.js");
const dashboard = require("./router/dashboard.js");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/tma");

app.use("/api", auth);
app.use("/api/task", task);
app.use("/api/notes", notes);
app.use("/api/pomodoro", pomodoro);
app.use("/api/dashboard", dashboard);

app.listen(5001, () => {
  console.log("Server started on port 5001...");
});
