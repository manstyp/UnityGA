const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "views")));

app.listen(port, () => {
  console.log("startar");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "myfile.txt"));
});
