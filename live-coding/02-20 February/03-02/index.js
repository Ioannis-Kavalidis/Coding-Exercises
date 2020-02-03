// functions inside functions
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function, only available inside the main function
    return n * n;
  }
  return second(num1) + second(num2);
}

console.log(main(3, 4));

// nested scopes: accessing outer global variables
var nice = true; // global variable
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " innerFunction");
  const innerFunction = num => {
    big = false;
    console.log(big + " innerFunction"); // (3+10) + (4+10)
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};

console.log(outerFunction(3, 4));

// closure, it safeguards the value of a global variable
var number = 10;
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);

const add = (() => {
  // invoking == calling
  var counter = 0;
  return () => {
    // self invoked
    counter++;
    return counter;
  };
})(); // self invoked function with ()

add(); // 1
add(); // 2
add(); // 3
console.log(add());
console.log(add());

(() => {
  // or  (function() {
  // self invoking anonymous function
  let x = 0;
  console.log("Hi");
  return () => {
    // closure
    x++;
    return x;
  };
})(); // calling the function by invoking it ()

// Immediately invoked function expression or IIFE (named also recursive functions)

const sum = ((x, y) => {
  return x + y;
})(4, 5); // function call giving parameter a value
console.log(sum);

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

function add2(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add2(3)(4));

// or with the new ES6

// const add2 = a => {
//     return b => {
//       return a + b;
//     };
//   };
//   console.log(add2(3)(4));

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.

function multiplier(num) {
  // outer function
  return x => x * num; // inner function
}
const times = multiplier(2)(5); // call first the outer function and then the inner one
console.log(times);

var all = 3;

(function() {
  var all = "Hi";
  console.log(all); // closed function so prints out "Hi"
})();
console.log(all); // called outside so prints out 3

// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

const retirement = ((
  currentAge,
  retirementAge,
  monthlyWage,
  savePerMonthPercent
) => {
  if (currentAge > retirementAge) {
    return `You’re already retired!`;
  } else {
    let retiredYearsLeft = retirementAge - currentAge;
    let percentageSaved = savePerMonthPercent * 0.01;
    let moneyAtRetirementSaved =
      monthlyWage * percentageSaved * 12 * retiredYearsLeft;
    console.log(
      `With your current monthly wage of ${monthlyWage}$ and your age ${currentAge}, you will have saved until you retirement age of ${retirementAge} the total amount of ${moneyAtRetirementSaved}$`
    );
  }
})(40, 65, 2000, 5);

// trim

let str = "  Hi  ";
console.log(str.trim());

// trimEnd(), trimStart()

console.log(str.trimEnd());
console.log(str.trimStart());

// startsWith();

let text = "Hi I am John";
console.log(text.startsWith("Hi"));

// endsWith()

console.log(text.endsWith("I", 4));

// charCodeAt()

let chr = "c"; // UTF-16
console.log(chr.charCodeAt(0) - 96);

// charAt()

let chr1 = "Astra";
console.log(chr1.charAt(4));

// codePointAt()

const icons = "☃★♲";

console.log(icons.codePointAt(1));

const boulderingYesterday = (answer => {
  if (answer === "Yes") {
    console.log(
      `I really enjoyed it yesterday 😄 , we should do it again sometime 😉.`
    );
  } else if (answer === "No") {
    console.log("No it was not my thing after all");
  } else {
    console.log("No answer was given");
  }
})("Yes");

let re = /\w+/;
let re1 = new RegExp("\\w+");
console.log(re1);
