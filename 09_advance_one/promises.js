// const promiseOne = new Promise(function (resolve, reject) {
//   // DO an async taslk
//   // DB calss, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task two");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise two consumed");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ userName: "Nilesh", email: "r@google.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Nilesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise either resolved or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // let error = false;
//     let error = true;
//     if (!error) {
//       resolve({ userName: "javaScipt", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
