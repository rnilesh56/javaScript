// ES6

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPasswprd() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.userName.toUpperCase()}`;
  }
}

const hey = new User("there", "there@gmail.com", 123);

console.log(hey.encryptPasswprd());
console.log(hey.changeUsername());

// Behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPasswprd = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.userName.toUpperCase()}`;
};

const there = new User("hey", "hey@google.com", 1234);

console.log(there.encryptPasswprd());
console.log(there.changeUsername());