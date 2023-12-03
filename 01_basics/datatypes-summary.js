// # Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId)

const bigNumber = 1321316541321351684n;

// Reference (Non primitive)

// Array, Objects, functions

const heroes = ["shaktiman", "naagraj", "doga"];

const hero = {
  name: "Shiva",
  age: 123123,
};

const myFunction = function () {
  // console.log("Hello World");
};

// console.log(typeof anotherId);

// *****************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myGithub = "rnilesh56";

let anotherName = myGithub;
anotherName = "nileshraj56";

// console.log(myGithub);
// console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne
userTwo.email = "userNew@google.com"

// console.log(userTwo)
// console.log(userOne)