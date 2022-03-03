const mongoose = require("mongoose");
const URI = "mongodb://localhost/Web-db";

mongoose
  .connect(URI)
  .then((db) => console.log("Web-db is connected"))
  .catch((err) => console.log("error" + err));
