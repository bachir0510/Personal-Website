const express = require("express");
const cors = require("cors");
const app = express();

// const userRouter = require("./routers/user.routes");

app.set("port", 8080);

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routers/user.routes"));

module.exports = app;
