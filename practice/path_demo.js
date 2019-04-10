const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).dir);

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.txt'))