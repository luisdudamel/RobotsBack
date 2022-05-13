require("dotenv").config();
const debug = require("debug")("robots:database:root");
const chalk = require("chalk");

const mongoose = require("mongoose");

const connectToDatabase = (port) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.connect(port, (error) => {
      if (error) {
        debug(chalk.red("Error connecting: ", error.message));
        reject();
        return;
      }

      debug("Connected to database");
      resolve();
    });
  });

module.exports = connectToDatabase;
