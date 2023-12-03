# Mini Project

## HOME PAGE - SOURCE Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="style.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="#" aria-current="page">Home</a>
      <a target="_blank" href="https://www.github.com/rnilesh56">Github</a>
    </nav>
    <main>
      <h1>Projects</h1>
      <div class="projects">
        <a class="project-link" href="./01_colorChnager/index.html"
          >Project One - color Changer 🔥</a
        >
        <a class="project-link" href="./02_bmi_calculator/index.html"
          >Project Two - BMI Generator ☕️</a
        >
        <a class="project-link" href="./03_digitalClock/index.html"
          >Project Three - Digital clock 😎</a
        >
        <a class="project-link" href="./04_guessTheNumber/index.html"
          >Project Four - Guess the number 🤨</a
        >
        <a class="project-link" href="./05_KeyboardCheck/"
          >Project 5 - Keyboard check 👻</a
        >
        <a class="project-link" href="./06_unlimited-Colors/index.html"
          >Project 6 - Unlimited Colors 🧠</a
        >
      </div>
    </main>
  </body>
</html>
```

## Style Sheet

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: white;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: #eee;
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px rgb(22, 22, 22);
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
}

nav a[aria-current="page"] {
  color: #000;
  background-color: #d4d4d4;
}

main {
  padding: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 1.5rem;
}

.projects {
  display: flex;
  flex-direction: column;
}

.project-link {
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;
  margin-top: 5px;
}
```

# Project 1

## Background Color Changer - SOURCE Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../style.css" />
    <title>Color Changer</title>
  </head>
  <body>
    <nav>
      <a href="/07_projects/index.html" aria-current="page">Home</a>
      <a target="_blank" href="hhtps://www.github.com/rnilesh56">Github</a>
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background of this page!</span>
      </h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## STYLE Sheet

```css
.bg {
  background-color: #212121;
  color: #fff;
}
.center {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#clock {
  font-size: 40px;
  background-color: orange;
  padding: 20px 50px;
  margin-top: 10px;
  border-radius: 10px;
}
```

## JavaScript File

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# Project 2

## BMI Calculator - SOURCE Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style.css" />
    <link rel="stylesheet" href="style.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/07_projects/index.html" aria-current="page">Home</a>
      <a target="_blank" href="hhtps://www.github.com/rnilesh56">Github</a>
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## Style Sheet

```css
.container {
  width: 100vw;
  height: 550px;
  /* display: flex;
    justify-content: center;
    align-items: center; */
  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
}
```

## JavaScipt File

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // Show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

# Project 3

## Digital Clock - SOURCE Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Digital Clock</title>
  </head>
  <body class="bg">
    <nav>
      <a href="/07_projects/index.html" aria-current="page">Home</a>
      <a target="_blank" href="https://www.github.com/rnilesh56">Github</a>
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## Style Sheet

```css
.bg {
  background-color: #212121;
  color: #fff;
}
.center {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#clock {
  font-size: 40px;
  background-color: orange;
  padding: 20px 50px;
  margin-top: 10px;
  border-radius: 10px;
}
```

## JavaScipt File

```javascript
const clock = document.getElementById("clock");

setInterval((e) => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 - Souce Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/07_projects/index.html" aria-current="page">Home</a>
    <a target="_blank" href="https://www.github.com/rnilesh56"
      >Github</a
    >
  </nav>

    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Style Sheet

```css
html {
  font-family: sans-serif;
}

body {
  /* width: 300px; */
  /* max-width: 750px; */
  /* min-width: 480px; */
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}
```

## JavaScript

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess < 1) {
    alert("Please Enter a number more than 1");
  } else if (guess > 100) {
    alert("Please Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project 5

## Keyboard Key Check - Source Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <style></style>
  </head>
  <body>
    <nav>
      <a href="/07_projects/index.html" aria-current="page">Home</a>
      <a target="_blank" href="https://www.github.com">Github</a>
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

## Style Sheet

```css
table,
th,
td {
  border: 1px solid #e7e7e7;
}

.project {
  background-color: #1c1c1c;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}

.color {
  color: aliceblue;
  display: flex;
  flex-direction: row;
}
```

## Script File

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>   
    </div>
    `;
});
```

## Project 6

## Unlimited Color - Source Code

## HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/07_projects/index.html" aria-current="page">Home</a>
      <a target="_blank" href="https://www.Github.com/rnilesh56">Github</a>
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="script.js"></script>
  </body>
</html>
```

## JavaScript File

```javascript
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
```
