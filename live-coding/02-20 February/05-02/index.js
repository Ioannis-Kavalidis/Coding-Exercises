// object literal

const o = {
  name: "Ali",
  age: 22,
  add: "xxx str"
};

// property accessors

// 1. dot notation

o.name;
o.age;

// bracket dotation
o["add"] = "see str";

// Object keys

console.log(Object.keys(o));

// Object.values

console.log(Object.values(o));

// Methods

o.print = function() {
  console.log(
    `Hi ${o.name} you are very old ${o.age} and you live in ${o.add}`
  );
};
o.print();

// this , it refers to the object inside the function

function userData(userName, userAge, userAdd) {
  const obj = {
    name: userName,
    age: userAge,
    address: userAdd,
    outPut: function() {
      console.log(
        `Hi ${this.name} you are very old ${this.age} and you live in ${this.add}`
      );
    }
  };
  return obj;
}

userData("Olga", 40, "see str");

// Object.prototype.hasOwnProperty()  ,  checks if the property exists for the variable

const person = {
  hight: 177,
  age: 38,
  city: "London"
};
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("sss"));

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = C
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

const fun = (x, y) => {
  return Object.assign(x, y); // with object assign()
};

const fun2 = (x, y) => {
  return { ...x, ...y }; // with ....spread operator
};

const o1 = {
  something: "ccc"
};
const obj1 = { firstName: "John" };
const obj2 = { lastName: "Smith" };
console.log(fun({ firstName: "John" }, { lastName: "Smith" }));
console.log(fun(o1, { 1: "hi" }));
console.log(fun2({ firstName: "Eli" }, { lastName: "Nelli" }));

// Exercise

// const getTheSign = (name, day, month, year) => {
//   if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Capricorn`;
//   } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Aquarius`;
//   } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is  Pisces`;
//   } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Aries`;
//   } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Taurus`;
//   } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Gemini`;
//   } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Cancer`;
//   } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Leo`;
//   } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Lirgo`;
//   } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Libra`;
//   } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Scorpio`;
//   } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
//     return `Hey I am ${name}, I was born in ${year} and my zodiac sign is Sagittarius`;
//   } else {
//     return `Not a valid date`;
//   }
// };

// const get = getTheSign("Hadi", 03, 01, 1983);
// console.log(get);

// function zodiac(name, day, month, year) {
//   const zodiacName = [
//     "empty",
//     "Capricorn",
//     "Aquarius",
//     "Pisces",
//     "Aries",
//     "Taurus",
//     "Gemini",
//     "Cancer",
//     "Leo",
//     "Virgo",
//     "Libra",
//     "Scorpio",
//     "Sagittarius"
//   ];
//   var lastDayOfSign = ["empty", 19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

//   if (day > lastDayOfSign[month]) {
//     return zodiacName[month + 1];
//   } else {
//     return zodiacName[month];
//   }
// }

// var zodiacSign = zodiac("Hadi", 20, 01, 1983);
// console.log(zodiacSign);

// me
// const zodiacName1 = [
//   "Capricorn",
//   "Aquarius",
//   "Pisces",
//   "Aries",
//   "Taurus",
//   "Gemini",
//   "Cancer",
//   "Leo",
//   "Virgo",
//   "Libra",
//   "Scorpio",
//   "Sagittarius"
// ];

// var lastDayOfSign = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

// if (day > lastDayOfSign[month]) {
//   return zodiacName1[month + 1];
// } else {
//   return zodiacName1[month];
// }

// function getZodiac(day, month) {
//   let zodiacs = {
//     aquarius: {
//       start: [20, 1],
//       end: [18, 2]
//     },
//     pishes: {
//       start: [19, 2],
//       end: [20, 3]
//     },
//     aries: {
//       start: [21, 3],
//       end: [19, 4]
//     },
//     taurus: {
//       start: [20, 4],
//       end: [20, 5]
//     },
//     gemini: {
//       start: [21, 5],
//       end: [20, 6]
//     },
//     cancer: {
//       start: [21, 6],
//       end: [22, 7]
//     },
//     leo: {
//       start: [23, 7],
//       end: [22, 8]
//     },
//     virgo: {
//       start: [23, 8],
//       end: [22, 9]
//     },
//     libra: {
//       start: [23, 9],
//       end: [22, 10]
//     },
//     scorpio: {
//       start: [23, 10],
//       end: [21, 11]
//     },
//     sagittarius: {
//       start: [22, 11],
//       end: [21, 12]
//     },
//     capricorn: {
//       start: [22, 12],
//       end: [19, 1]
//     }
//   };

//   for (let prop in zodiacs) {
//     if (
//       month >= zodiacs[prop].start[1] &&
//       month <= zodiacs[prop].end[0] &&
//       day >= zodiacs[prop].start[1] &&
//       day <= zodiacs[prop].end[0]
//     ) {
//       console.log(`You're a ${prop}!`);
//     }
//   }
// }

// getZodiac(10, 3);

function zodiacName(name, day, month, year) {
  const zodiac = {
    name: name,
    day: day,
    month: month,
    year: year,
    output: function() {
      return `${name} you are a ${sign()}`;
    }
  };

  let monthPlusDay = month + day;
  console.log(monthPlusDay);

  let sign = () => {
    if (monthPlusDay >= "120" && monthPlusDay <= "218") {
      return `aquarius`;
    } else if (monthPlusDay >= "219" && monthPlusDay <= "320") {
      return `pishes`;
    } else if (monthPlusDay >= "321" && monthPlusDay <= "4190") {
      return `aries`;
    } else if (monthPlusDay >= "420" && monthPlusDay <= "520") {
      return `taurus`;
    } else if (monthPlusDay >= "521" && monthPlusDay <= "620") {
      return `gemini`;
    } else if (monthPlusDay >= "621" && monthPlusDay <= "722") {
      return `cancer`;
    } else if (monthPlusDay >= "723" && monthPlusDay <= "822") {
      return `leo`;
    } else if (monthPlusDay >= "823" && monthPlusDay <= "922") {
      return `virgo`;
    } else if (monthPlusDay >= "923" && monthPlusDay <= "1022") {
      return `libra`;
    } else if (monthPlusDay >= "1023" && monthPlusDay <= "1121") {
      return `scorpio`;
    } else if (monthPlusDay >= "1122" && monthPlusDay <= "1221") {
      return `sagittarius`;
    } else if (monthPlusDay >= "1222" || monthPlusDay <= "119") {
      return `capricorn`;
    } else {
      return `Not a valid date to assign a zodiac sign`;
    }
  };
  return zodiac.output();
}

console.log(zodiacName("Hadi", "05", "01", "1983"));
