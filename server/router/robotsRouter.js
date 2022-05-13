const express = require("express");
const debug = require("debug")("robots:router");
const chalk = require("chalk");

const robotsRouter = express.Router();

robotsRouter.get("/", (req, res) => {
  res.status(200).json();

  debug(chalk.greenBright("A get request has been received"));
});

module.exports = {
  robotsRouter,
};
