//  for of

const arr = [1, 2, 3, 4]

// for (const num of arr) {
//     console.log(num)
// }

const arrObj = [
  {
    name: "Nilesh",
    age: 24,
  },
  {
    name: "Rishi",
    age: 24,
  },
  {
    name: "Rishabh",
    age: 24,
  },
  {
    name: "Sunny",
    age: 24,
  },
];

// for (const obj of arrObj) {
//   console.log(obj);
// }

const grreting = "Hello Welcome"

// for (const greet of grreting) {
//     if (greet === " ") {
//         continue;
//     }
//     console.log(`Each char is: ${greet}`)
// }

// Maps

const map = new Map()
map.set('In', 'India' )
map.set('USA', 'United State of Ameriaca' )
map.set('Fr', 'France' )

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ": ", value)
// }

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ": ", value)
// }  // not iterable