const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const myNewObj = Object.create(null)
const hey = {
  name: "There",
  price: 250,
  isAvailable: true,

  order: function () {
    console.log("No NO NO");
  },
};

// console.log(hey)
console.log(Object.getOwnPropertyDescriptor(hey, "name"));

Object.defineProperty(hey, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(hey, "name"));
for (let [key, value] of Object.entries(hey)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
