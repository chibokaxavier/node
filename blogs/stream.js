const fs = require("fs");
const readstream = fs.createReadStream("./blogs/stream.txt", {
  encoding: "utf8",
});
const writestream = fs.createWriteStream("./blogs/writestream.txt");
// readstream.on("data", (chunk) => {
// //   console.log("------------NEW CHUNK---------");
// //   console.log(chunk.toString());
//   writestream.write("\n NEW CHUNK \n");
//   writestream.write(chunk);
// });
readstream.pipe(writestream)