// const Person = require('./person');

// // console.log(person.name + " --- " + person.age);

// const personObj = new Person('Ajit Bhaik', 26);

// personObj.greeting();

const Logger = require("./logger");

const logger = new Logger();
logger.on("message", data => console.log(`Called Listener: `, data));

logger.log("Hello World");
logger.log("Hi");
logger.log("Hello");
