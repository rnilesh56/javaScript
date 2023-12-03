// Dates

let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-11-27");
let myCreatedDate = new Date("11-27-2023");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log((myTimeStamp))
// console.log((myCreatedDate.getTime()))
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDay())

let dateFormate = newDate.toLocaleString("default", {
    weekday: "long",
})

  console.log(dateFormate)