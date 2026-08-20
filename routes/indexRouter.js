const { Router } = require("express");
const indexRouter = Router();
const path = require("node:path");
const { getUsernames } = require("../controller/indexController")

const options = {
    root: "D:/Programming/TheOdinProject/Exercises/postgresqlPract",
}

indexRouter.get("/", getUsernames);

indexRouter.get("/new", (req, res) => {
    res.sendFile("views/index.html", options);
});

indexRouter.post("/new", (req, res) => {
    console.log("new entry submitted");
    res.end();
})

module.exports = indexRouter;