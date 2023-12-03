const arr = [1, 2, 3, 4, 5, 6, 7];

// const sumValue = arr.reduce( function(acc, value) {
//     console.log(`acc: ${acc} and value ${value}`)
//     return acc + value
// }, 0)

const sumValue = arr.reduce((acc, value) => acc + value, 0);

// const initial = 0
// const sumValue = arr.reduce((acc, value) => acc + value, initial)

// console.log(sumValue)

const shoppingCart = [
  {
    item: "JS Cource",
    price: 299,
  },
  {
    item: "Python Cource",
    price: 999,
  },
  {
    item: "App Dev Cource",
    price: 5999,
  },
  {
    item: "DSA Cource",
    price: 2999,
  },
];

const allPrice = shoppingCart.reduce((acc, item) => acc+ item.price, 0)
console.log(allPrice)