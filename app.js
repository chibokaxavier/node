const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./servers/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./servers/about.html", { root: __dirname });
});
app.get("/info", (req, res) => {
  res.redirect("/about");
});
app.use((req, res) => {
  res.status(404).sendFile("./servers/404.html", { root: __dirname });
});
