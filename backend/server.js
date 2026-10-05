const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/api/tasks", async (req, res) => {
    const tasks = await Task.find();

    res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
    const task = await Task.create({
        title: req.body.title
    });

    res.json(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    res.json(task);
});

app.put("/api/tasks/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(task);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});