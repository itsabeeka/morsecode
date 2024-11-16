let letterPicked = pickRandomLetter();

const questionArea = document.getElementById("question");
questionArea.innerHTML = letterPicked;

let selectionString = "";

function start() {
  letterPicked = pickRandomLetter();
  questionArea.innerHTML = letterPicked;
  selectionString = "";
}

function pickRandomLetter() {
  var emptyString = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
  return emptyString;
}

const letters = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function buttonClick(param) {
  const printSelection = document.getElementById("printSelection");
  selectionString += param;
  printSelection.innerHTML = selectionString;
}

function buttonSubmit() {
  const printSelection = document.getElementById("printSelection");
  checkAns(selectionString);
}

function checkAns(ans) {
  let code = letters[letterPicked];
  var element = document.getElementById("printSelection");
  if (selectionString == code) {
    element.classList.add("correct");
    const correction = document.getElementById("output");
    correction.innerHTML = "Correct :)";
    correction.classList.add("greenText");
    setTimeout(function () {
      clearScreen("correct");
    }, 500);
  } else {
    element.classList.add("incorrect");
    const correction = document.getElementById("output");
    correction.innerHTML = "Incorrect :( Try";
    correction.classList.add("redText");
    const actual = document.getElementById("actual");
    actual.innerHTML = code;
    setTimeout(function () {
      clearScreen("incorrect");
    }, 1500);
  }
}

function clearScreen(param) {
  var element = document.getElementById("printSelection");
  element.classList.remove("correct");
  element.classList.remove("incorrect");
  const correction = document.getElementById("output");
  correction.innerHTML = "";
  correction.classList.remove("greenText");
  correction.classList.remove("redText");
  const actual = document.getElementById("actual");
  actual.innerHTML = "";
  const printSelection = document.getElementById("printSelection");
  selectionString = "";
  printSelection.innerHTML = selectionString;
  if (param == "correct") {
    start();
  }
}
