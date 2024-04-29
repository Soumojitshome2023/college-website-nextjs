const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./route/admin.route.js");

dotenv.config(".env");

const app = express();

app.use(express.json());

app.use("/api/v1",adminRouter);

app.get("/", (req, res) => {
    res.send("Working");
});



module.exports = app;
