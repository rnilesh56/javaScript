function sayMyName() {
  console.log("N");
  console.log("i");
  console.log("l");
  console.log("e");
  console.log("s");
  console.log("h");
}

// sayMyName()

// function addTwoNum(num1, num2) {
// //   if (typeof num1 === typeof num2) {
// //       console.log(num1 + num2)
// //   } else {
// //     console.log("Please enter a valid number")
// //   }
//   console.log(num1 + num2);
// }
// addTwoNum(23, 32)
// addTwoNum(23, "32")
// addTwoNum(23, "a")
// addTwoNum(23, null)

// const result = addTwoNum(3, 4)
// console.log("Result: ", result)

function addTwoNum(num1, num2) {
  // let result = num1 + num2
  // return result

  return num1 + num2;
}

const result = addTwoNum(3, 4);
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Nilesh"))
// console.log(loginUserMessage())

function calculateCartPrice(...item) {
  return item;
}

// console.log(calculateCartPrice(200, 400, 500, 23, 42342, 4211))

const user = {
  username: "Nilesh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArrray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArrray))
console.log(returnSecondValue([200, 400, 100, 600]));