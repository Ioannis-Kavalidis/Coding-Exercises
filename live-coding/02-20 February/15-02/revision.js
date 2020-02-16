/*
Functions are one of the fundamental building blocks in JavaScript. 
A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. 
To use a function, you must define it somewhere in the scope from which you wish to call it.
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, {...}.
*/

/*
Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. 
The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. 
A cup is an object, with properties. 
A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, 
which define their characteristics.
*/

/*
An array is an ordered collection of data (either primitive or object depending upon the language). 
Arrays are used to store multiple values in a single variable. 
This is compared to a variable that can store only one value. 

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 
In JavaScript, arrays start at index zero and can be manipulated with various methods. 
*/

/*
 */

// Converting strings into Numbers: `parseInt()`, `parseFloat()`
let integer = "1005";
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.05";
let realFloat = parseInt(float);
console.log(realFloat);
// Exponentiation ** the power of(new added)
let power = 2 ** 2;
console.log(power);
// exponent
console.log(Math.pow(2, 3));
//Math.floor()
let float1 = 1.8;
let realIni = Math.floor(float1);
console.log(realIni);
//Math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2);
//Math.round()
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
//Math.max()
console.log(Math.max(800, 1, 3339.5, 4, 66, 700));
console.log(Math.max(x, z, q, s, 101));
// Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));
//Math.random
console.log(Math.floor(Math.random() * 100) + 1);
// toFixed()
let numObj = 12345.6789;
numObj.toFixed();
numObj.toFixed(1);
numObj.toFixed(3);
//Math.trunc
console.log(Math.trunc(42.84));

// Math.abs()
function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(3, 5));
console.log(difference(5, 3));
