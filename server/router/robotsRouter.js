const express = require("express");
const { getRobots } = require("../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);

module.exports = {
  robotsRouter,
};
