const express = require("express");
const { getRobots, deleteRobot } = require("../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.delete("/delete/:idRobot", deleteRobot);
robotsRouter.get("/", getRobots);

module.exports = {
  robotsRouter,
};
