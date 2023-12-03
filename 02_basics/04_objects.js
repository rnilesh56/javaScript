// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "sam@gmail.com",
  fullName: {
    usersFullName: {
      firstName: "Nilesh",
      lastName: "Raj",
    },
  },
};

// console.log(regularUser.fullName.usersFullName.firstName)

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@g.com",
  },
  {
    id: 2,
    email: "b@g.com",
  },
  {
    id: 3,
    email: "c@g.com",
  },
  {
    id: 4,
    email: "d@g.com",
  },
];

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
  courseName: "Js",
  price: 999,
  courseInstructor: "Nilesh",
};

// console.log(course.courseInstructor)

const { courseName, price, courseInstructor: instructor } = course;
// console.log(courseInstructor)
// console.log(instructor)
// console.log(price)

// {
//   "name": "nilesh",
//   "courseName": "Js",
//   "price": "free",
// }
