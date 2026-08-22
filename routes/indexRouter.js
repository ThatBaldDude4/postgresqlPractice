const { Router } = require("express");
const indexRouter = Router();
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames
} = require("../controller/indexController")

indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

indexRouter.get("/delete", deleteAllUsernames);

module.exports = indexRouter;