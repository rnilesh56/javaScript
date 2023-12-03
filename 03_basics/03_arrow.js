const user = {
  userName: "Nilesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// user.welcomeMessage()
// console.log(this);

function one() {
  let userName = "Nilesh";
  // console.log(this.userName)
  console.log(this);
}
// one()

const two = function () {
  let userName = "Nilesh";
  console.log(this.userName);
};
// two()

const arrow = () => {
  console.log(this);
};
// arrow()

const addtwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addtwo(2, 3))

const addNum = (num1, num2) => num1 + num2;

// console.log(addNum(2, 3))

const sumNum = (num1, num2) => (num1 + num2);

// console.log(sumNum(2, 3));

const obj = () => ({userName: "Nilesh"})

// console.log(obj())