const marvelHeros = ["SpiderMan", "Thor", "IronMan"];
const dcHeros = ["SuperMan", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1])

// concat

// const heros = marvelHeros.concat(dcHeros)
// console.log(heros)
// console.log(heros[4])

// spread operator

// const newHeros = [...marvelHeros, ...dcHeros]
// console.log(newHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAotherArray = anotherArray.flat(Infinity);
// console.log(realAotherArray)

// console.log(Array.isArray("Nilesh"))
// console.log(Array.from("Nilesh"))
// console.log(Array.from({name: "nilesh"}))  //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));