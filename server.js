const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "Game")));

app.set("view engine", "pug");

app.listen(port, () => {
  console.log("startar");
});

app.get("/game", (req, res) => {
  res.render("index");
});
