const { name } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Blogs = require("./models/blogs");
const app = express();
const dbURI =
  "mongodb+srv://xavy:test1234@node.mvllel2.mongodb.net/node?retryWrites=true&w=majority&appName=node";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");
// this takes data from the web and encode it into an object
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.post("/blog/create", (req, res) => {
  const blog = new Blogs(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
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
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blogs.findById(id)
    .then((result) => {
      res.render("single", { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/", (req, res) => {
  Blogs.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
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
