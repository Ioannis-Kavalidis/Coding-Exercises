document.write("Hey, this is me");
document.write("<h3>John</h3>");

const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("Hi I am new element");
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
};

const addLastName = () => {
  let userInput2 = document.querySelector("#userText2").value;
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput2);
  newLi.appendChild(text);
  document.querySelector(".return").appendChild(newLi);
  document.querySelector("#userText2").value = "";
};
