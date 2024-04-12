const express = require("express");
const dotenv = require("dotenv");

dotenv.config(".env");

const app = express();

app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
});
