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

function totalSum() {
  let firstNum = document.getElementById("firstNumber").value;
  let secondNum = document.getElementById("secondNumber").value;
  let sum = parseInt(firstNum) + parseInt(secondNum);
  sum = document.getElementById("sumResult").value;
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
