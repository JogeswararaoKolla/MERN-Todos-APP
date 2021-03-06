const express = require("express");
const app = express();
const logger = require("morgan");
const routes = require("./routes/apiRoutes.js");
const PORT = process.env.PORT || 3001;
const db = require("./connection/connection.js");

db.on("error", function(err) {
  console.log("database error", err);
});

db.on("connect", function() {
  console.log("database connected");
});

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, function() {
  console.log("App is listening to port 3001");
});
