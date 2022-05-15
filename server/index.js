const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { error404NotFound, general500Error } = require("./middlewares/errors");
const { robotsRouter } = require("./router/robotsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(error404NotFound);
app.use(general500Error);

module.exports = app;
