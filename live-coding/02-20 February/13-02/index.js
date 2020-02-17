// 3 types of errors (compilation, runtime, logic) also typo errors

// `try { ... }  /  catch (err) { ... }`  / throw ""  /  finally{}

let userName = "";
try {
  console.log("Hi his is trying phase");
  //cool();
  if (userName == "") throw " Sorry something went wrong ";
} catch (err) {
  console.log("this error is " + err);
} finally {
  console.log("This will always run");
}

// how to call multiple times the same function
function display() {
  // 1st solution
  console.log("Hi this is fun!");
}
for (let i = 0; i < 3; i++) {
  display();
}

(function manyTimeCallFunction(num) {
  // 2nd solution
  display();
  if (num > 1) manyTimeCallFunction(num - 1);
})(3);

// print out after some seconds
// const timerPrint = setTimeout(() => console.log("Hi I am JS"), 5000);

// 1. Exercise: Fido says...
// In the following code, we want fido to bark. Instead, we get an error. Why?

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Dog.bark = function() {
//   console.log(`${this.name} says woof`);
// };
// let fido = new Dog("fido");
// fido.bark();
// Edit the code to make fido bark.

class Dog {
  constructor(_name) {
    this.name = _name;
  }
  bark() {
    console.log(`${this.name} says woof!!!`);
  }
}
let fido = new Dog("fido");
fido.bark();

// 2. Exercise: Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12).
// Throw an error if a user inputs an invalid number as an argument.
// Example
// getMonthName(15) -> Invalid Month Number!

// Solution without catch and throw

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];
// function getMonthName(month) {
//   if (month > 0 && month < 13) {
//     return months[month - 1];
//   } else {
//     return `Invalid Month Number!`;
//   }
// }
// console.log(getMonthName(12));
// console.log(getMonthName(13));

// solution with catch and throw
// try {
//   const getMonthName = numOfMonth => {
//     if (numOfMonth <= 12 && numOfMonth >= 1) {
//       console.log(numOfMonth);
//     } else throw "Invalid month number";
//   };
//   getMonthName(12);
// } catch (error) {
//   console.log(error);
// }

try {
  const getMonthName1 = numOfMonth => {
    if (numOfMonth <= 12 && numOfMonth >= 1) {
      console.log(numOfMonth);
    } else throw "Invalid month number";
  };
  getMonthName1(13);
} catch (error) {
  console.log(error);
}
// 3. Exercise: Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!

// function reverseString(str) {
//   if (typeof str == "string") {
//     return str
//       .split("")
//       .reverse()
//       .join("");
//   } else {
//     return `ERROR! This is not a string`;
//   }
// }
// console.log(reverseString("hello"));
// console.log(reverseString(2019));

function reverseString2(str) {
  try {
    if (typeof str !== "string") {
      console.log(`ERROR! This is not a string`);
    } else {
      str
        .split("")
        .reverse()
        .join("");
      console.log(`This is a string`);
    }
  } catch (error) {
    console.log(error);
  }
}
<<<<<<< HEAD
reverseString2("hello");
reverseString2(2019);
reverseString2(undefined);
console.log("xxxxxxxxxxx");

// function reverseString3(s) {
//   try {
//     if (typeof s === "string") {
//       s = s
//         .split("")
//         .reverse()
//         .join("");
//       console.log(s);
//     } else {
//       throw s.split();
//     }
//   } catch (e) {
//     console.log(e.message);
//     console.log(s);
//   }
// }
// reverseString3("hello");
// reverseString3(2019);

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let prop in codes) {
  console.log(codes[prop]); // 1, 41, 44, 49
}
=======
console.log(reverseString("hello"));
console.log(reverseString(2019));

const reverseString1 = str => {
  try {
    let reverseArray = "";
    if (typeof str !== "string") throw "Error! This is not a string";
    else {
      reverseArray = str
        .split("")
        .reverse()
        .join("");
      console.log(reverseArray);
    }
  } catch (error) {
    console.log(error);
  }
};
[1, 2, 3, 4].map(() => reverseString1("knird a evah s'tel"));

// <omths exercise from older

const checkMonths = txt => {
  let months = [
    ["Spring", "march", "april", "may"],
    ["Summer", "june", "july", "august"],
    ["Autumn", "september", "october", "november"],
    ["Winter", "december", "january", "february"]
  ];
  let strToArr = txt.toLowerCase().split(" ");
  for (let i = 0; i < months.length; i++) {
    for (let j = 0; j < months[i].length; j++) {
      if (months[i][j].includes(strToArr)) {
        return months[i][j] + " is in " + months[i][0];
      }
    }
  }
};
console.log(checkMonths("december"));

let i = 3;
while (i) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(i);
  i--;
}

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    console.log(i);
  }
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = console.log(`Value at coords (${i},${j})`, "");

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log("Done!");

for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

function isNumberPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

console.log(isNumberPrime(1));
console.log("xxxx");

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
for (let i = 0; i < 10; i++) {
  if (isPrime(i)) console.log(i);
}
console.log(isPrime(10));

console.log("xxxx");

for (let i = 2; i <= 10; i++) {
  let notPrime = false;
  for (y = 2; y <= i; y++) {
    if (i % y === 0 && i !== y) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(i);
  }
}

function isPrime1(n) {
  if (n < 2) return false;

  /**
   * An integer is prime if it is not divisible by any prime less than or equal to its square root
   **/

  var q = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime1(10));

/**
 * Apples and Bananas
 *
 *  Write a function, .vreplace() that replacing all vowels in a string with a specified vowel.
 *
 *  Examples
 * "apples and bananas".vreplace("u") ➞ "upplus und bununus"
 * "cheese casserole".vreplace("o") ➞ "chooso cossorolo"
 * "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
 */

function vreplace(str, vowel) {
  return str.replace(/[aeiou]/gi, vowel);
}
console.log(vreplace("apples and bananas", "u"));
console.log(vreplace("cheese casserole", "o"));
console.log(vreplace("stuffed jalapeno poppers", "e"));

function withoutVowels(string) {
  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
    if (!isVowel(string[i])) {
      withoutVowels += string[i];
    }
  }
  return withoutVowels;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

console.log(withoutVowels("apples and bananas", "u"));

// function vreplace(str, vowel) {
//   let newStr = "";
//   let lowerCase = str.toLowerCase();
//   let splitStr = lowerCase.split("");
//   const vowels = ["a", "e", "o", "i", "u"];
//   for (let i = 0; i < splitStr.length; i++) {
//     if (splitStr.includes(vowels)) {
//       splitStr = vowel;
//       let newString = splitStr;
//       console.log(newString);

//       newStr.push(newString);
//     }
//   }
//   return splitStr.join(" ");
// }
// console.log(vreplace("apples and bananas", "u"));

function titleCase(str) {
  //converting the giving string into array
  str = str.split(" ");
  //iterating over all elements in the array
  for (let i = 0; i < str.length; i++) {
    //converting the first char to upper case &concatenating to the rest chars
    str[i] = str[i].charAt(0).toUpperCase(str[i]) + str[i].substring(1);
  }
  return str.join(" ");
}
console.log(titleCase("I am a little tea pot"));

