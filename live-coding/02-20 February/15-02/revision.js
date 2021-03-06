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
console.log(Math.floor(Math.random() * 10) + 1); // random number form 0 to 10
// toFixed()
let numObj = 12345.6789;
numObj.toFixed();
numObj.toFixed(1);
numObj.toFixed(3);
//Math.trunc
console.log(Math.trunc(42.84));

// Math.abs() checking their difference no matter the +- sign
function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(3, 5));
console.log(difference(5, 3));

// .startsWith()
// .endsWith()
// .toString()
// .charAt()
let chr1 = "Astra";
console.log(chr1.charAt(4)); // a
//Array.push()  // Adding to the lastItem
// Array.unshift() // Adding to the firstItem
// Array.pop()  // Removing  the lastItem
// Array.shift()  // Removing the firstItem
// Array.indexOf(<item>)
// Array.includes();
// Array.slice()
// Array.split()
// Array.join()
// Array.reverse()
// Array.concat() merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Callback functions:
// Array.filter()   method creates a new array with all elements that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
const result = words.filter(word => word.length > 6);
console.log(result);

// Array.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending,
// built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // expected output: 1
// start from index 2
console.log(beasts.indexOf("bison", 2)); // expected output: 4
console.log(beasts.indexOf("giraffe")); // expected output: -1
// Array.find()   method returns the value of the first element in the provided array that satisfies the provided testing function.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// Array.map()    creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// forEach() method executes a provided function once for each array element (splitting all elements of an array one at a time)
const array1 = ["a", "b", "c"];
array1.forEach(element => console.log(element));
console.log("xxxxssss");
// Array.reduce()   method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; // 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // expected output: 15
//Sum all the values of an array
let total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Counting instances of values in an object
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

//  Object example
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  print: function() {
    // method
    console.log(`this user ${person.name} is born in ${person.birthYear}`);
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};
// using loop to have all properties when you print out with for in // accessing all properties of the object
for (let prop in person) {
  console.log(`car.${prop} : ${person[prop]} `);
}
// Object entries() method returns the keys and the values with for of // accessing properties of the object individually.
// (returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for in loop
// The only important difference is that a for in loop enumerates properties in the prototype chain as well..
const object1 = {
  a: "somestring",
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

const obj2 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj2));

// Object.keys , prints out the key names with a string
console.log(Object.keys(object1));

// Object.values , prints out the values of he keys with a string
console.log(Object.values(object1));

// Object.assign()  method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5 }

// Object.defineProperty()  defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
// Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol)
// found directly in a given object.
const object2 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(Object.getOwnPropertyNames(object2)); // expected output: Array ["a", "b", "c"]

// Object.prototype.hasOwnProperty()  ,  checks if the property exists for the variable returns true or false
const person = {
  hight: 177,
  age: 38,
  city: "London"
};
console.log(person.hasOwnProperty("age"));

// this , it refers to the object inside the function
// Primitives (string, number, boolean) / Simple values are always clones (clones save their values, not changing them)
// Objects are references by default: arrays, object and functions (with reference, it modifies also the values of clone and source)
// shallow copy using ... spread operator
// shallow copy using concat
// shallow copy using slice()
// shallow copy using .assign()
// recursion , functions that call themselves and then stop calling themselves
// deep copy using recursion
// constructor()
// classes
class Animals {
  // setting up my constructor
  constructor(_kind, _hometown) {
    // * 1st way is to have the parameters here, no need to pass on always the values
    // it uses the underline score always
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // instant method
  display() {
    console.log(`It is very cute ${this.kind}, and lives in ${this.hometown}`);
  }
}
let casper = new Animals("Dog", "Athens");
console.log(casper.kind);
casper.display();
let sofi = new Animals("Fish", "Berlin");
let mary = new Animals("Cat", "Tokyo");
console.log(sofi);

// extends  and super()
class Person2 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`hi ${this.name}`);
  }
}
// extends  and super()

class Kid extends Person2 {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `${this.name} is ${this.age} years old....`;
  }
}
let kain = new Kid("kain", 12);
kain.display();
console.log(kain.show());
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
