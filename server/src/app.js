const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./route/admin.route.js");
const cookieParser = require("cookie-parser")

dotenv.config(".env");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1",adminRouter);

app.get("/", (req, res) => {
    res.send("Working");
});



module.exports = app;
