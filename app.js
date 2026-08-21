const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const PORT = 8000;

// let the server read url data
app.use(express.urlencoded({ extended: true }));

// connect ejs to express view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (err) => {
    if (err) {
        throw err
    };

    console.log(`Server running on port http://localhost:${PORT}`);
})