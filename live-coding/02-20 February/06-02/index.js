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

// console.log(newUser("Ali", "Stern", 22, "dancing"));   // function call
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

// does not work tghsi belwo function, check it out later
// let person = {
//   name: "Ali",
//   job: "teacher"
// };
// function keysToValue(obj) {
//   const keysValuesPair = Object.entries(obj);
//   console.log(keysValuesPair);
//   let reversArr = [];
//   for (let i = 0; i < keysValuesPair.length; i++) {
//     reversArr.push(keysValuesPair[i].reverse());
//   }
//   return Object.fromEntries(reversArr);
// }
// console.log(keysToValue(person));

function getZodiac(name, day, month, year) {
  const myZodiac = {
    name: name,
    day: day,
    month: month,
    year: year,
    output: function() {
      return `${name} you are a ${signed()}`;
    }
  };
  let zodiacs = [
    {
      capricorn: {
        start: "0000",
        end: "0119"
      },
      aquarius: {
        start: "0120",
        end: "0218"
      },
      pisces: {
        start: "0219",
        end: "0320"
      },
      Aries: {
        start: "0321",
        end: "0419"
      },
      taurus: {
        start: "0420",
        end: "0520"
      },
      gemini: {
        start: "0521",
        end: "0620"
      },
      cancer: {
        start: "0621",
        end: "0722"
      },
      leo: {
        start: "0723",
        end: "0822"
      },
      virgo: {
        start: "0823",
        end: "0922"
      },
      10: {
        sign: "libra",
        start: "0923",
        end: "1022"
      },
      scorpio: {
        start: "1023",
        end: "1121"
      },
      sagittarius: {
        start: "1123",
        end: "1221"
      },
      capricorn: {
        start: "1222",
        end: "1231"
      }
    }
  ];

  let combinedMonthAndDay = month + day;
  let signed = () => {
    for (let prop in zodiacs) {
      if (
        combinedMonthAndDay >= zodiacs[prop].start &&
        combinedMonthAndDay <= zodiacs[prop].end
      ) {
        return `${zodiacs[prop]}`;
      } else {
        return "invalid date";
      }
    }
    console.log(signed());
  };

  return myZodiac.output();
}

console.log(getZodiac("John", "24", "11", "1983"));
