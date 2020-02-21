let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",", 2);
console.log(myArray);

// split() turns a string to an array of strings, by separating them with a a defined separator which is included in the parentheses
// Optional we cna have a second argument and define how many items will be returned

const str = "asdfghjkl";
const strReverse = str
  .split("")
  .reverse()
  .join("");
console.log(strReverse);

let tx = "sdfsdaf, ssdsda, 123, dgadga";
let newTx = tx.split(" ,");
console.log(newTx);

const elements = ["Fire", "Air", "Water"];
let newElements = elements.join(" - ");
console.log(newElements);

const a = ["a", "b", "c"];

for (const [key, value] of a.entries()) console.log(key, value);

// 0 'a'
// 1 'b'
// 2 'c'

var ab = ["a", "b", "c"];
var iterator = ab.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

// forEach() method executes a provided function once for each array element.
const array1 = ["a", "b", "c"];

array1.forEach(element => console.log(element));

let numbers = [65, 44, 12, 4];
console.log(numbers.forEach(myFunction));

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(myFunction);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

for (let key in obj) {
  console.log(`${key} = ${obj[key]}`);
}

const yx = ["cat", "dog", "mouse"];
for (let i in yx) {
  console.log(yx[i]);
}

// 1st solution for loop
function countOccurrences(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences("this is a string", "i"));

// 2nd solution with split()

const countOccurrences1 = (string, letter) => {
  let letterOccurrences = string.split(letter).length - 1;
  return letterOccurrences;
};
console.log(countOccurrences1("this is a string", "i"));

// Create a function that looks inside a givin string if it has the word (JavaScript)and if so print "I know it's crazy 😉".

function checkIf(word) {
  let toStr = word.toLowerCase().split(" ");
  if (toStr.includes("java")) {
    return `You are correct`;
  } else {
    return `You are not right`;
  }
}
console.log(checkIf("java script"));

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function wordStartsWith(str, word) {
  let wordInSmallChars = word.toLowerCase();
  if (wordInSmallChars.startsWith(str) == true) {
    return `It is true`;
  } else {
    return `It is false`;
  }
}
console.log(wordStartsWith("bu", "btton"));

function wordStartsWith1(str, word) {
  let wordInSmallChars = word.toLowerCase();
  if (wordInSmallChars.includes(str.substring(0, 2)) == true) {
    return `It is true`;
  } else {
    return `It is false`;
  }
}
console.log(wordStartsWith1("bu", "button"));

function wordStartsWith2(str, word) {
  let wordInSmallChars = word.toLowerCase();
  if (wordInSmallChars.substring(0, 2) === str) {
    return `It is true`;
  } else {
    return `It is false`;
  }
}
console.log(wordStartsWith2("bu", "batton"));
