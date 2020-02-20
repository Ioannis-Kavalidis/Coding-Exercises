// With Recursion
function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(4));

// with a WHILE loop
function factorial1(num) {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
console.log(factorial1(4));

// with a FOR loop
function factorial2(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial2(4));

// 5. FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where
//all occurences of its first character have been replaced with '*', except for the first character itself.
// Examples:
// fixStart("babble") -> "ba**le"
// fixStart("people") -> "peo*le"
// fixStart("nonsense") -> "no*se*se"

const fixStart = str => {
  let splitString = str.split("");
  let firstChar = splitString[0];
  let restChar = splitString.slice(1, splitString.length);
  for (let i = 0; i < splitString.length; i++)
    if (restChar[i] == firstChar) {
      restChar[i] = "*";
    }
  return firstChar + restChar.join("");
};
console.log(fixStart("babble"));
console.log(fixStart("people"));
console.log(fixStart("nonsense"));

function fixStart1(str) {
  let answer = str[0];
  return answer + str.slice(1).replace(new RegExp(answer, "g"), "*");
}
console.log(fixStart1("nonsense"));

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

// sort by value
items.sort(function(a, b) {
  return a.value - b.value;
});
console.log(items);

let sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
console.log(sum);

// sum is 6
let sum1 = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
console.log(sum);

// sum is 6

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = element => element % 2 === 0;

console.log(array.some(even));
// expected output: true

/* create a function called verbing. It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
If the string length is less than 3, it should leave it unchanged. For example

verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'
*/

function verbing(word) {
  if (word.length < 3) return word;
  if (word.slice(-3) == "ing") {
    return word + "ly";
  } else {
    return word + "ing";
  }
}
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));
