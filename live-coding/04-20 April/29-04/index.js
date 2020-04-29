function redBg() {
  this.style.backgroundColor = "red";
}

function whiteBg() {
  this.style.backgroundColor = "white";
}

function newUser() {
  result.innerHTML += "this is you </br>";
}

function windowLoad() {
  //   setInterval(newUser, 1000);
  //   alert("Hey new user");
}

function changeColor() {
  event.preventDefault(); // button inside forms is a must function with the event.prevent
  form.style.backgroundColor = "lightgreen";
}

const stop = () => {
  header.removeEventListener("mouseover", redBg);
  header.removeEventListener("mouseleave", whiteBg);
};

function endResult() {
  let firstNum = parseFloat(document.getElementById("firstNumber").value);
  let secondNum = parseFloat(document.getElementById("secondNumber").value);
  let operation = document.getElementById("options").value;
  if (operation == "addition") {
    document.getElementById("result").value = firstNum + secondNum;
  }
  if (operation == "subtraction") {
    document.getElementById("result").value = firstNum - secondNum;
  }
  if (operation == "multiplication") {
    document.getElementById("result").value = firstNum * secondNum;
  }
  if (operation == "division") {
    document.getElementById("result").value = firstNum / secondNum;
  }
}

let result = document.querySelector(".result");
let header = document.querySelector("h1");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);

window.addEventListener("load", windowLoad);

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thanks for your feedback!");
});
form.addEventListener("reset", () => {
  alert("Your input has been cleared out");
});
