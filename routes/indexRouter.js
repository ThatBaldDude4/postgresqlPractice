const { Router } = require("express");
const indexRouter = Router();
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost
} = require("../controller/indexController")

indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;