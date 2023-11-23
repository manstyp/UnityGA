const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.set("view engine", "pug");

app.listen(port, () => {
  console.log("startar");
});

app.get("/", (req, res) => {
  res.render("index");
});
