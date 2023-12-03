const user = {
  username: "Nilesh",
  loginCount: 8,
  signedIn: true,
  getUserDEtails: function () {
    // console.log("Got user details from DB");
    // console.log(`Username: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDEtails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome ${this.username}`)
  }

  return this;
}
// const userOne = User("Nilesh", 10, true)
const userOne = new User("Nilesh", 10, true);

// const userTwo = User("Hello", 11, false)
const userTwo = new User("Hello", 11, false);

// console.log(userOne.constructor)

// console.log(userOne);
// console.log(userTwo);

// console.log(userOne instanceof User)
// console.log(userTwo instanceof User)
