// Immediately Invoked Function Expressions (IIFE)

(function one() {
  // named IIFE
  console.log("DB Connected");
})();

((name) => {
  console.log(`Error ${name}`);
})("Nilesh");
