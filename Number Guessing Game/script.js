let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuess = 0;
let playGame = true;

submit.addEventListener("click", function (event) {
  if (playGame) {
    event.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid number!");
  } else if (guess < 1 || guess > 100) {
    alert("Please Enter a number between 1 to 100!");
  } else {
    prevGuesses.push(guess);
    displayGuess(guess);
    if (guess === randomNumber || numGuess === 10) {
      displayMessage(`Game over! The number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("🎉 You guessed it right!");
  } else if (guess < randomNumber) {
    displayMessage("📈 Try guessing a higher number.");
  } else {
    displayMessage("📉 Try guessing a lower number.");
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  UserInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function endGame() {
  UserInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  playGame = false;
  p.innerHTML = `<button id="newGame">Play Again</button>`;
  p.classList.add("button");
  startOver.appendChild(p);
  submit.classList.remove("guessSubmit");

  const btn = document.querySelector("#newGame");
  btn.style.color = "white";
  btn.style.backgroundColor = "#212121";
  btn.style.padding = "10px 15px";
  btn.style.borderRadius = "5px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "16px";
  btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "white";
    btn.style.color = "#212121";
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "all 0.2s ease-in-out";
  });
  btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "#212121";
    btn.style.color = "white";
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("click", function () {
    resetGame();
  });
}

function resetGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuesses = [];
  numGuess = 1;
  submit.classList.add("guessSubmit");
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${10 - numGuess}`;
  lowOrHi.innerHTML = "";
  UserInput.removeAttribute("disabled");
  UserInput.value = "";
  startOver.removeChild(p);
  playGame = true;
}
