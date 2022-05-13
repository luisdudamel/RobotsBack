require("dotenv").config();
const debug = require("debug")("robots-database:root");
const chalk = require("chalk");

const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.set("debug", true);
  mongoose.connect(process.env.MONGO_STRING, (error) => {
    if (error) {
      debug(chalk.red("Error connecting"));
      return;
    }

    debug("Connected");
  });
};
connectToDatabase();

module.exports = connectToDatabase;
