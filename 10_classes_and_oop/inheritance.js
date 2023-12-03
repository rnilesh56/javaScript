class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User Name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const hey = new Teacher("Rohit", "rohit@gmail.com", 123);

hey.addCourse();
hey.logMe();
const bhagwan = new User("Sunny");
bhagwan.logMe();

console.log(hey instanceof Teacher);
console.log(hey instanceof User);
