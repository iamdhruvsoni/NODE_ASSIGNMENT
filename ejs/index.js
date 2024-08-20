const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app
  .get("/contact", (req, res) => {
    res.render("contact");
  })
  .listen(4000);
