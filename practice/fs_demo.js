const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("Folder Created...");
});

//  Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello NodeJS.",
  err => {
    if (err) throw err;
    console.log("File  Written...");

    // append to file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "\nThis is fs demo.",
      err => {
        if (err) throw err;
        console.log("File  Written...");
      }
    );
  }
);
