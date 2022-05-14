const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  stats: {
    speed: {
      type: String,
    },
    stamina: {
      type: String,
    },
    creationDate: {
      type: String,
    },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
