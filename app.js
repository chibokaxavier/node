const { name } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Blogs = require("./models/blogs");
const dbURI =
  "mongodb+srv://xavy:test1234@node.mvllel2.mongodb.net/node?retryWrites=true&w=majority&appName=node";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((error) => {
    console.log(error);
  });
const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("dev"));
app.get("/add-blog", (req, res) => {
  const blog = new Blogs({
    title: "My Blog Title  22222222",
    snippet: "My blog snippet",
    body: "My blog body",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/all-blogs", (req, res) => {
  Blogs.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/single-blog", (req, res) => {
  Blogs.findById("666db20a8ce9e07c533ee9f8")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
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
