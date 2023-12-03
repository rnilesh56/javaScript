const coding = ["js", "rb", "java", "py", "cpp"];

// coding.forEach(function (value){
//     console.log(value)
// })

// coding.forEach(element => {
//     console.log(element)
// });

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
  {
    name: "JavaScript",
    file: "js",
  },
  {
    name: "Python",
    file: "py",
  },
  {
    name: "Java",
    file: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.name);
});
