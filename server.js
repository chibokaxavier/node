const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./servers/index.html"  , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
