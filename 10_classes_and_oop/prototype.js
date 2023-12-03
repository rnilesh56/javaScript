// let myName = "Nilesh      "
// let myLastName = "Raj     "

// console.log(myName.trueLength);

let myHeros = ["Thor", "SpiderMan"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.nilesh = function () {
  console.log(`Nilesh is present in all object`);
};

Array.prototype.heyNilesh = function () {
  console.log(`Nilesh says hello`);
};

// heroPower.nilesh()
// myHeros.nilesh();
// myHeros.heyNilesh();
// heroPower.heyNilesh()  // heyNilesh is not a function

// +++++++++++++++++ Inheritance +++++++++++++++++++++

const User = {
  name: "Rohit",
  email: "rohit@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Rohit     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

// anotherUserName.trueLength()

// "Nilesh".trueLength()
// "abcdefghijklmnop".trueLength()
