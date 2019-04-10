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

// Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log("File opened --- ", data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "NewHello.txt"),
  err => {
    if (err) throw err;
    console.log("File Renamed --- ");
  }
);
