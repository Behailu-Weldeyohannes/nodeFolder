const fs = require("fs");
console.log(fs);

fs.mkdir("Dogs", { recursive: true }, (err) => {
  console.log("IN THE CALLBACK!!");
  if (err) throw err;
});
console.log("I come after MKDIR");
