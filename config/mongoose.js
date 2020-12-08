const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/abhi_testround");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Your server successfully connected to MONGODb");
});

module.exports = db;
