require("dotenv").config();
const debug = require("debug")("robots:errors");
const chalk = require("chalk");

const error404NotFound = (req, res) => {
  res.status(404).json({ msg: " Endpoint not found" });
  debug(chalk.redBright(`A request did not find the endpoint requested`));
};

// eslint-disable-next-line no-unused-vars
const general500Error = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.statusCode ? error.message : "General error";
  res.status(statusCode).json(errorMessage);
  debug(chalk.redBright(`General error ocurred with error ${error}`));
};

module.exports = { error404NotFound, general500Error };
