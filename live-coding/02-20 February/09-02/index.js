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

// recursion
