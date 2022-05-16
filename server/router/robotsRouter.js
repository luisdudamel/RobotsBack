const express = require("express");
const {
  getRobots,
  deleteRobot,
  loginUser,
} = require("../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.delete("/delete/:idRobot", deleteRobot);
robotsRouter.get("/", getRobots);
robotsRouter.post("/login", loginUser);
module.exports = {
  robotsRouter,
};
