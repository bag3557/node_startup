// const person = {
//   name: "Ajit",
//   age: 25
// }

// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting(){
    console.log(`Name is - ${this.name} and age is - ${this.age}` )
  }
}

module.exports = Person