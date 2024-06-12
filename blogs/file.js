const fs = require("fs");
// fs.readFile("./blogs/text.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("Last line");

// fs.writeFile("./blogs/text.txt", "Magical myth", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file was written");
// });
// fs.writeFile("./blogs/text1.txt", "Magical myth", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file was written");
// });
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder dleted");
//   });
// }

// fs.mkdir("./assets/new", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
if (fs.existsSync("./blogs/delete.txt")) {
  fs.unlink("./blogs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("delete deleted");
  });
}
