const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const restaurants = require("./routes/api/restaurants");
const db = require("./config/keys").mongoURI;
const passport = require('passport');
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get("/", (req, res) => res.send("Welcome to YouChoose"));
app.use("/api/users", users);
app.use("/api/restaurants", restaurants);

app.use(passport.initialize());
require("./config/passport")(passport)

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Welcome to YouChoose"));
// app.use("/api/users", users);
// app.use("/api/restaurants", restaurants);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.listen(port, () => console.log(`Server is running on port ${port}`));


