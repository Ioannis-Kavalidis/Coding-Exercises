// Nesting arrays
// Nesting and accessing arrays within each other
const arr = [
  [2, 4, 6, 7],
  [3, 5, 7, 9],
  [3, 6, 8, 4]
];
console.log(arr[1][1]);

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j] + " array");
  }
}
console.log("mmmm");

let arrayNew = [];

for (i = 0; i <= 5; i++) {
  for (j = 0; j <= 2; j++) {
    arrayNew.push([i, j, i, 44]);
  }
}
console.log(arrayNew);

arr.forEach(array => array.forEach(element => console.log(element))); // callback function forEach() which is splitting all elements of an array one at a time

let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name)); // just an ex
names.map(name => console.log(name)); //
let family = [
  // old way of doing things
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}

family.forEach(index => index.forEach(element => console.log(element))); // new and simpler way of doing things
// foreach() and for
let pets = [
  ["Chan", 7, "Pitbull"],
  ["Son", 4, "Maddog"]
];
pets.forEach(pet => pet.forEach(element => console.log(element)));

// for of
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}

// Nesting objects
// Nesting and accessing objects in objects

const tShirt = {
  color: "red",
  size: ["XS", "S", "M", "L", "XL"],
  countries: {
    name: ["China", "Germany", "Greece"],
    capital: ["Beijing", "Berlin", "Athens"],
    obj: {
      one: 333,
      two: 444,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  }
};
console.log(tShirt.size[2]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.name[0]);
console.log(tShirt.countries.obj["two"]);
console.log("bbbb");
tShirt.method();
tShirt.countries.display();
tShirt.countries.obj.printOut();
let newShortWay = tShirt.countries;
newShortWay.display();

// Nesting and accessing arrays in objects

let car = ["ford", "Pink", 2020, "engine", "weight"];
// let carName = car[0];
// let color = car[1];
let [carName, carColor, CarYear, ...rest] = car;
console.log(carName);
console.log(rest);

// Nesting and iterating over objects in arrays

const object = {
  firstName: "Hadi",
  old: 22,
  country: "Germany"
};
// console.log(object.firstName);
({ firstName, old, country } = object);
console.log(firstName);

// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

// Extracting values from objects: Object destructuring assignment
