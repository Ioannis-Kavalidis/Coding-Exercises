// 3 types of errors (compilation, runtime, logic) also typo errors

// `try { ... }  /  catch (err) { ... }`  / throw ""  /  finally{}

// let userName = "";
// try {
//   console.log("Hi his is trying phase");
//   //cool();
//   if (userName == "") throw " Sorry something went wrong ";
// } catch (err) {
//   console.log("this error is " + err);
// } finally {
//   console.log("This will always run");
// }

// how to call multiple times the same function
function display() {
  // 1st solution
  console.log("Hi this is fun!");
}
for (let i = 0; i < 8; i++) {
  display();
}

(function manyTimeCallFunction(num) {
  // 2nd solution
  display();
  if (num > 1) manyTimeCallFunction(num - 1);
})(8);

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
    console.log(`${this.name} says woof`);
  }
}
let fido = new Dog("fido");
fido.bark();

// 2. Exercise: Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12).
// Throw an error if a user inputs an invalid number as an argument.
// Example
// getMonthName(15) -> Invalid Month Number!

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getMonthName(month) {
  if (month > 0 && month < 13) {
    return months[month - 1];
  } else {
    return `Invalid Month Number!`;
  }
}

console.log(getMonthName(12));
console.log(getMonthName(13));

// 3. Exercise: Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!

function reverseString(str) {
  if (typeof str == "string") {
    return str
      .split("")
      .reverse()
      .join("");
  } else {
    return `ERROR! This is not a string`;
  }
}
console.log(reverseString("hello"));
console.log(reverseString(2019));
