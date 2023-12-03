// var c = 300
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner:", a);
}

// console.log("Outer:", a);
// console.log(b);

function one() {
  const username = "Nilesh";
  function two() {
    const website = "github";
    console.log(username);
  }
  // console.log(website)
  two();
}
// one()

if (true) {
  const username = "Nilesh";
  if (username === "Nilesh") {
    const website = " github";
    // console.log(username + website)
  }
  // console.log(website)
}

// console.log(username)

// +++++++++++++++ Intresting ++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)); Hoisting -> cannot access addtwo

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5))