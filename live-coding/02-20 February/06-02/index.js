function zodiac(name, day, month, year) {
  const zodiac = {
    name: name,
    day: day,
    month: month,
    year: year,
    output: function() {
      return `${name} you are a ${sign()}`;
    }
  };

  const zodiacName = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
  ];
  let lastDayOfSign = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
  let sign = () => {
    if (day > lastDayOfSign[month]) {
      return zodiacName[month];
    } else {
      return zodiacName[month - 1];
    }
  };
  return zodiac.output();
}

var zodiacSign = zodiac("Hadi", 12, 12, 1983);
console.log(zodiacSign);

function newUser(fName, lName, age, hobbies) {
  let result = {
    firstName: fName,
    lastName: lName,
    old: age,
    funThingsToDo: hobbies,
    printOut: function() {
      // inner function as a method
      return `Hi ${this.firstName}, you are very old ${this.old}`; // return inner function
    }
  };

  return result; // return outer function
}

// console.log(newUser("Ali", "Stern", 22, "dancing")); // function call
let x = newUser("Ali", "Stern", 22, "dancing"); // x returns an object
console.log(x.printOut());

let arr = [
  { name: "Hadi", age: 22 },
  { name: "Bary", age: 31 },
  {
    name: "Jane",
    age: 40,
    sum: function() {
      return "Hi";
    }
  }
];
console.log(arr[2].sum());
console.log(arr[2]["sum"]());

// Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

let person = {
  name: "John",
  job: "teacher"
};

function keysToValue(obj) {
  const keyValuesPair = Object.entries(obj); // Object.entries() method takes an object and make it an array
  console.log(keyValuesPair);
  let reverse = [];
  for (let i = 0; i < keyValuesPair.length; i++) {
    reverse.push(keyValuesPair[i].reverse());
  }
  return Object.fromEntries(reverse); // fromEntries() method takes an array and make it an object
}
console.log(keysToValue(person));

// function zodiacName(name, day, month, year) {
//     const zodiac = {
//       name: name,
//       day: day,
//       month: month,
//       year: year,
//       output: function() {
//         return `${name} you are a ${sign()}`;
//       }
//     };

//     let monthPlusDay = month + day;
//     let sign = () => {
//       if (monthPlusDay >= "0120" && monthPlusDay <= "0218") {
//         return `aquarius`;
//       } else if (monthPlusDay >= "0219" && monthPlusDay <= "0320") {
//         return `pishes`;
//       } else if (monthPlusDay >= "0321" && monthPlusDay <= "04190") {
//         return `aries`;
//       } else if (monthPlusDay >= "0420" && monthPlusDay <= "0520") {
//         return `taurus`;
//       } else if (monthPlusDay >= "0521" && monthPlusDay <= "0620") {
//         return `gemini`;
//       } else if (monthPlusDay >= "0621" && monthPlusDay <= "0722") {
//         return `cancer`;
//       } else if (monthPlusDay >= "0723" && monthPlusDay <= "0822") {
//         return `leo`;
//       } else if (monthPlusDay >= "0823" && monthPlusDay <= "0922") {
//         return `virgo`;
//       } else if (monthPlusDay >= "0923" && monthPlusDay <= "01022") {
//         return `libra`;
//       } else if (monthPlusDay >= "1023" && monthPlusDay <= "1121") {
//         return `scorpio`;
//       } else if (monthPlusDay >= "1122" && monthPlusDay <= "1221") {
//         return `sagittarius`;
//       } else if (monthPlusDay >= "1222" || monthPlusDay <= "0119") {
//         return `capricorn`;
//       } else {
//         return `Not a valid date to assign a zodiac sign`;
//       }
//     };
//     return zodiac.output();
//   }
//   console.log(zodiacName("Hadi", "05", "01", "1983"));

function getZodiac(name, day, month, year) {
  const myZodiac = {
    name: name,
    day: day,
    month: month,
    year: year,
    output: function() {
      return `${name} you are a ${signed}`;
    }
  };
  let zodiacs = {
    1: {
      sign: "capricorn",
      start: "0000",
      end: "0119"
    },
    2: {
      sign: "aquarius",
      start: "0120",
      end: "0218"
    },
    3: {
      sign: "pisces",
      start: "0219",
      end: "0320"
    },
    4: {
      sign: "Aries",
      start: "0321",
      end: "0419"
    },
    5: {
      sign: "taurus",
      start: "0420",
      end: "0520"
    },
    6: {
      sign: "gemini",
      start: "0521",
      end: "0620"
    },
    7: {
      sign: "cancer",
      start: "0621",
      end: "0722"
    },
    8: {
      sign: "leo",
      start: "0723",
      end: "0822"
    },
    9: {
      sign: "virgo",
      start: "0823",
      end: "0922"
    },
    10: {
      sign: "libra",
      start: "0923",
      end: "1022"
    },
    11: {
      sign: "scorpio",
      start: "1023",
      end: "1121"
    },
    12: {
      sign: "sagittarius",
      start: "1123",
      end: "1221"
    },
    13: {
      sign: "Capricorn",
      start: "1222",
      end: "1231"
    }
  };

  let combinedMonthAndDay = month + day;

  let signed = () => {
    for (let prop in zodiacs) {
      if (
        combinedMonthAndDay >= zodiacs[prop].start &&
        combinedMonthAndDay <= zodiacs[prop].end
      ) {
        return `${zodiacs[prop].sign}`;
      } else {
        return "invalid date";
      }
    }
    return signed;
  };
  return myZodiac.output();
}

console.log(getZodiac("John", "10", "11", "1983"));
