let divText = document.querySelector(".text");
const print = () => {
  divText.innerText = "Hi I am onclick from HTML";
};

let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerText = "Hi I am onclick from JS";
};
