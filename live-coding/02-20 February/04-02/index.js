// objects

const o = {
  1: "hadi", // keys and values
  2: "Ali", // separated with commas
  3: "Olga" // keys are stored as strings when printed out
};

const obj = {
  name: "Nancy",
  lastName: "Bay",
  age: 44,
  add: "xxx str"
};

// old school way
let aliName = "Ali";
let aliAdd = "xxx str";
let aliAge = 22;
let aliLastName = "something";

// create an object with a literal way
const object = {
  color: "Blue",
  size: "small",
  year: 1990,
  arr: [1, 2, 3, 4, 5]
};

// create an empty object and accessing properties with bracket notation  , assign new properties with with bracket notation
const car = {};
car["name"] = "Ford";
console.log(car);
car["year"] = 1990;
console.log(car);

// accessing properties with dot notation   , change the value of properties with dot notation
car.age = 22;
car.age = 44;
car.fa = "hhh";
console.log(car.name);
console.log(car["name"]);

const save = new Object(); // new way of creating a new Object
console.log(save);

// using loop to have all properties when you print out with for in // accessing all properties of the object

for (let prop in car) {
  console.log(`car.${prop} : ${car[prop]} `);
}

// Object entries()

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

// Object.keys , prints out the key names with a string

console.log(Object.keys(person));

// Object.values , prints out the values of he keys with a string

console.log(Object.values(person));

// Object.entries , prints out the keys and the values with for of // accessing properties of the object individually

for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value} `);
}

// Methods are functions only, are created only inside with function inside an object

person.print();
console.log(person.old());

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person1 = {
  name: "John",
  age: 27,
  gender: "male"
};

for (let prop in person1) {
  console.log(`${prop} : ${person1[prop]} `);
}
console.table(person1); // very cool function by showing a table as a result when it prints out

// Object.assign  , object combined the two objects in one

const obj1 = { 1: 2, 2: 300 }; // source
const obj2 = { 1: 4, 3: 301 }; //  target
const totalObj = Object.assign({ 2: 55 }, { name: "Nancy" }, obj1, obj2); // target will overwrite the value of the source if it is the same, for this specific the 4: 55 is the source
console.log(totalObj);

// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};

const getValues = object => {
  return Object.values(object);
};

console.log(getValues(getObjectValues));

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
//   firstName: "Ali",
//   job: "painter",
//   age: 20,
//   city: Berlin
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

let person2 = {
  firstName: "Ali",
  job: "painter",
  age: 20,
  city: "Berlin"
  //   //   print: function() {
  //   //     console.log(
  //   //       `${person2.firstName} is a ${person2.age} year old in ${person2.city}.`
  //   //     );
  //   //   }
};

// person2.print();

person2.printOut = () => {
  return `${person2.firstName} is a ${person2.age} year old in ${person2.city}.`;
};
console.log(person2.printOut());

// Object.defineProperty()

Object.defineProperty(person, "birthDay", {
  // create a new property and giving it a value
  value: 20,
  writable: false // you can not anymore change the value
}); // new way to create and giving value at it is: person.birthDay = 20;
console.log(person.birthDay);

// Object.defineProperties()

Object.defineProperties(person, {
  // first parameter is the object you want to work with and the second is the values
  p1: {
    value: [],
    writable: true
  },
  p2: {
    value: {},
    writable: false
  },
  p3: {}
});
console.log(person.p1);
console.log(person.p2);
console.log(person.p3);
console.log(Object.keys(person));

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]

let student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

const getProperties = () => {
  return Object.getOwnPropertyNames(student); // this method will print all properties also the ones you make with the definedProperty()
};
console.log(getProperties());

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

// let character = name => {
//   let result = {};
//   let counter = 0;
//   let splittedChar = name.toLowerCase().split("");
//   for (let x = 0; x < splittedChar.length; x++) {
//     if (splittedChar.charAt(x) == name(i)) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(character("tree"));

function getOccurrences(name) {
  // my way of sort
  return name.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(getOccurrences("treeaas!."));

let str = "Mauricio"; // Mauricio's way
const lett = str => {
  let arr = str.split("");
  let counter = {};
  arr.filter(index => {
    counter[index] = (counter[index] || 0) + 1;
  });
  return counter;
};
console.log(lett(str));

function countLetters(str) {
  // the right way from Hadi with function and object
  let arr = str.split("");
  let result = {};
  function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; // A then B then C ...
    result[currentChar] = countOccurrences(str, currentChar); // inner function using bracket notation, very important to understand SOS
  }
  return result;
}

console.log(countLetters("ABC"));

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

function countLetters1(str1) {
  let arr1 = str1.split("");
  let result = {};
  function countOccurrences1(str1, letter) {
    let letterOccurrences = str1.split(letter).length - 1;
    return letterOccurrences;
  }
  for (let i = 0; i < arr1.length; i++) {
    let currentChar1 = arr1[i];
    result[currentChar1] = countOccurrences1(str1, currentChar1);
  }

  return result;
}
console.log(countLetters1("BAM!!!!"));
