const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import route
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// src/index.js
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

// Import route
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

module.exports = app;

