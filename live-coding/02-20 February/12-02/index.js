// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });

const userData = {
  firstName: "Hadi",
  lastName: "Nsreeny",
  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    // this is setter method
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};

// getter
userData.fullName;
// userData.firstName = 'Ali';
// userData.lastName = 'Xxx';

// setter
userData.fullName = "Ali xxx";
userData.fullName; // getting new data

// constructor()

function Person(name, age, activities) {
  // pascal method name the constructor function, always begin with capital P, constructor creates objects
  this.name = name;
  this.age = age;
  this.activities = activities;
}
let ali = new Person("ali", 22, ["party, dance"]);
console.log(ali);

console.log("xxx");

function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printOut = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

let sean = new Name("Kim", "Bale");
// console.log(sean);
sean.printOut();

// class

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

class Color {
  // create a template for an object
  constructor() {
    // * 2nd way no parameters inside, more work to do since you need to pass on later the values
    this.name = ""; // creating the properties , default value is empty
    this.age = 0;
    this.birthday = 0;
  }
}
const red = new Color();
red.name = "Red";
red.age = 12334;
console.log(red);

// exercise

// 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// The Person class should have a method called describe which returns a string with the following syntax: “name, age years old”.
// So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”.

console.log("1st exercise");
class Person1 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}
let person2 = new Person1("John", 38);
person2.describe();

// 2. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.

console.log("2st exercise");

class Tv {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  increase() {
    if (this.volume > 100) {
      console.log(`Invalid`);
    } else if (this.volume < 0) {
      console.log(`Invalid`);
    } else {
      console.log(this.volume++);
    }
  }
  decrease() {
    if (this.volume > 100) {
      console.log(`Invalid`);
    } else if (this.volume < 0) {
      console.log(`Invalid`);
    } else {
      console.log(this.volume--);
    }
  }

  channelRandomly() {
    return (this.channel = Math.floor(Math.random() * 51));
  }

  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }
  getStatus() {
    console.log(
      `${this.brand} is at ${this.channel} channel on ${this.volume} volume`
    );
  }
}

let samsung = new Tv("Panasonic", 34, 48);
samsung.increase();
samsung.increase();

console.log("Hiii");

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

// Array.filter() comes back with an array
let names = ["Ali", "Sony", "Petra"];
let result = names.filter(name => name.length > 3);
console.log(result);

// Array.find() comes back with one only answer (the first one it finds)
let result1 = names.find(name => name.length > 3);
console.log(result1);
// Array.map() returns each one individually as strings
names.map(x => console.log(x));
let letters = ["a", "c", "b", "e", "d"];
let numbers = [2, 4, 6, 7, 8, 9];

// Array.reduce()
result = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(result);

// Array.sort()
letters.sort();
console.log(letters);
letters.sort();
console.log(names);

// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

let fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Print out the items from an array which has 2 parameters and where the second parameter (a string) is inside the first one
 * ex. let fruits = ["apple", "banana", "grapes", "mango", "orange"];
 *  "an"-> ['banana', 'mango', 'orange']
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

const isPrime = value => {
  let i = 2;
  while (i < value) {
    if (value % i === 0) {
      return false;
    }
    i++;
  }
  return value > 1;
};
console.log(isPrime(2)); //true
console.log(isPrime(7)); //true
console.log(isPrime(9)); //false
console.log(isPrime(10)); //false

// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// Here's an example:
// 8 1 6
// 3 5 7
// 4 9 2
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
// #### Examples:
// [8, 1, 6, 3, 5, 7, 4, 9, 2] -> true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] -> false

function isMagic(sq) {
  let n = Math.sqrt(sq.length);
  let r = 0,
    c = 0,
    d = 0,
    magic = 0;
  //checking rows & cols.
  for (j = 0; j < n; j++) {
    for (i = 0; i < n; i++) {
      r += sq[n * j + i]; //adding rows
      c += sq[j + n * i]; //adding columns
    }
    if (magic == 0) {
      magic = c;
    }
    if (r != magic || c != magic) {
      //not a magic square
      return false;
    }
    r = 0;
    c = 0;
  }
  //diagonal checking
  for (i = 0; i < n; i++) {
    d += sq[i * (n + 1)];
    d += sq[(i + 1) * (n - 1)];
  }
  if (d != 2 * magic) {
    //not a magic square.
    return false;
  }
  return true;
}
console.log(isMagic([8, 1, 6, 3, 5, 7, 4, 9, 2]));
console.log(isMagic([2, 7, 6, 9, 5, 1, 4, 3, 8]));
console.log(isMagic([3, 5, 7, 8, 1, 6, 4, 9, 2]));
console.log(isMagic([8, 1, 6, 7, 5, 3, 4, 9, 2]));
