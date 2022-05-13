const express = require("express");
const morgan = require("morgan");
const { robotsRouter } = require("./router/robotsRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(robotsRouter);

module.exports = app;
