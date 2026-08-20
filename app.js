const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const PORT = 8000;

app.use("/", indexRouter);

app.listen(PORT, (err) => {
    if (err) {
        throw err
    };

    console.log(`Server running on port http://localhost:${PORT}`);
})