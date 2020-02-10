const objects = [
  {
    name: "Ali",
    lastName: "Seen"
  },
  {
    name: "Ben",
    lastName: "Keen",
    printOut: function() {
      console.log("Hi");
    }
  },
  {
    name: "Nancy",
    lastName: "Been"
  }
];
objects[1].printOut();
objects[1]["printOut"]();

// clone vs references

// Primitives (string, number, boolean) / Simple values are always clones
let str = "Bye"; // cloning
let newStr = str;

str = "something else";
console.log(newStr); // clones save their values, not changing them
console.log(str);

let num = 222;
let newNum = num;

console.log(newNum);

// Compound
// Objects are references by default: arrays, object and functions
const names = ["Ali", "Olga", "Sean", "Ben"];
let newArr = names; // reference, it modifies also the values of clone and source

newArr[1] = "New";
console.log(names);

const car = {
  name: "Ford",
  year: "2020"
};
const newObject = car;
newObject.name = "BMW";
console.log(car.name);

// shallow copy using ... spread operator
let namesArr = ["Ali", "Olga"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);

// shallow copy using concat
let newNames1 = [].concat(namesArr);
console.log(newNames1);

// shallow copy using slice()
let newNames2 = namesArr.slice(0);
console.log(newNames2);

// shallow copy using .assign()
const newObject2 = Object.assign(car);
const newObject3 = { ...car };
const newObject4 = Object.assign(newObject3);
console.log(newObject2);
console.log(newObject3);
console.log(newObject4);

// recursion , functions that call themselves and then stop calling themselves
const factorial = function(num) {
  //   console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(6));

// deep copy using recursion
function deepClone(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepClone(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return; // something
  }
  return obj;
}

const newObj = { 1: "Hi", 2: "How are you?", fun: () => console.log("Hi") };
const superNewObj = deepClone(newObj);
console.log(superNewObj);

console.log(console);

// # objects-ex

// 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true
let objR = { min: 0, max: 5 };
function inside(num, obj) {
  return num >= obj.min && num <= obj.max;
}
console.log(inside(6, { min: 0, max: 5 }));
console.log(inside(4, objR));

// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
//Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
// // const scrabbleTiles = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ];

let arrScore = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

// console.log(arrScore[3].score);

function score(word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    result += arrScore[i].score; // do not forge the + before the =
  }
  return result;
}

console.log(score(arrScore));

// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true
// {a: 1} ➞ false

function isEmpty2(obj) {
  return Object.keys(obj.length == 0);
}

console.log(isEmpty2({}));
console.log(isEmpty2({ a: 1 }));

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

// 4. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

function freeShipping(order) {
  let values = Object.values(order);
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += values[i]; // do not forge the + before the =
  }
  return result > 50;
}
console.log("bye");

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

// 5. Programming Object.

// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// Write the command to add the language "Go" to the end of the languages array.

// Change the difficulty to the value of 7.

// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)

// Write a command to add a new key called isFun and a value of true to the programming object.

// Using a loop, iterate through the languages array and console.log all of the languages.

// Using a loop, console.log all of the keys in the programming object.

// Using a loop, console.log all of the values in the programming object.

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.(need Google)

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
programming.languages.push("Go");
console.log(programming);

programming.difficulty = 7;
console.log(programming);

delete programming.jokes;
console.log(programming);

programming.isFun = true;
console.log(programming);

let array = programming.languages; // making a reference
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// if (programming.hasOwnProperty("languages")) {
//   console.log(programming.languages);
// }
console.log("let");

for (let key in programming) {
  console.log(key);
}
console.log("bet");

for (let key in programming) {
  console.log(programming[key]);
}

programming.is = () => {
  if (programming.isChallenging == true && programming.isRewarding == true) {
    return `Learning the programming languages ${programming.languages} is rewarding and challenging`;
  } else {
    return `Sorry something went wrong`;
  }
};
console.log(programming.is());

Object.freeze(programming);
