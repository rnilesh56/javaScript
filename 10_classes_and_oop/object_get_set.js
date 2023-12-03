const User = {
  _email: "lol@lol.ai",
  _password: "lolo",

  get email() {
    return `${this._email.toUpperCase()}`;
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return `${this._password.toUpperCase()}haha`;
  },

  set password(value) {
    this._password = value;
  },
};

const hey = Object.create(User)

console.log(hey.email)
console.log(hey.password)