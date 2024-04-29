const app = require("./src/app.js");
const connectDB = require("./src/database/database.js");

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
});
