const express = require("express");
const {
  getRobots,
  deleteRobot,
  loginUser,
} = require("../controllers/robotsController");
const auth = require("../middlewares/auth");

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.delete("/delete/:idRobot", auth, deleteRobot);
robotsRouter.post("/login", loginUser);

module.exports = {
  robotsRouter,
};
