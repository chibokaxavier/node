const { name } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dbURI =
  "mongodb+srv://xavy:test1234@node.mvllel2.mongodb.net/?retryWrites=true&w=majority&appName=node";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
app.set("view engine", "ejs");
app.listen(3000);
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [];
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blog/create", (req, res) => {
  res.render("create");
});
app.use((req, res) => {
  res.status(404).render("404");
});
