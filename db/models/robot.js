const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  speed: {
    type: String,
  },
  stamina: {
    type: String,
  },
  creationDate: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
