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
  return { ...x, ...y }; // with ...spread operator
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

//3rd soluton the best of all

function zodiacName1(name, day, month, year) {
  const zodiac = {
    name: name,
    day: day,
    month: month,
    year: year,
    output: function() {
      return `${name} you are a ${sign()}`;
    }
  };
  const zodiacName2 = [
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

  var lastDayOfSign = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

  if (day > lastDayOfSign[month]) {
    return zodiacName1[month + 1];
  } else {
    return zodiacName1[month];
  }
}
console.log(zodiacName1("Hadi", "05", "01", "1983"));

//1st solution not that good
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
  let sign = () => {
    if (monthPlusDay >= "0120" && monthPlusDay <= "0218") {
      return `aquarius`;
    } else if (monthPlusDay >= "0219" && monthPlusDay <= "0320") {
      return `pishes`;
    } else if (monthPlusDay >= "0321" && monthPlusDay <= "04190") {
      return `aries`;
    } else if (monthPlusDay >= "0420" && monthPlusDay <= "0520") {
      return `taurus`;
    } else if (monthPlusDay >= "0521" && monthPlusDay <= "0620") {
      return `gemini`;
    } else if (monthPlusDay >= "0621" && monthPlusDay <= "0722") {
      return `cancer`;
    } else if (monthPlusDay >= "0723" && monthPlusDay <= "0822") {
      return `leo`;
    } else if (monthPlusDay >= "0823" && monthPlusDay <= "0922") {
      return `virgo`;
    } else if (monthPlusDay >= "0923" && monthPlusDay <= "01022") {
      return `libra`;
    } else if (monthPlusDay >= "1023" && monthPlusDay <= "1121") {
      return `scorpio`;
    } else if (monthPlusDay >= "1122" && monthPlusDay <= "1221") {
      return `sagittarius`;
    } else if (monthPlusDay >= "1222" || monthPlusDay <= "0119") {
      return `capricorn`;
    } else {
      return `Not a valid date to assign a zodiac sign`;
    }
  };
  return zodiac.output();
}
console.log(zodiacName("Hadi", "05", "01", "1983"));

// 2nd solution way better than the first
let zodiacs = {
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
  libra: {
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
  Capricorn: {
    start: "1222",
    end: "1231"
  }
};
function getZodiac(name, days, months, year) {
  const myZodiac = {
    name: name,
    day: days,
    month: months,
    year: year,
    output: function() {
      zodiacs = Object.entries(zodiacs);
      let combinedMonthAndDay = myZodiac.month + myZodiac.day;
      if (
        combinedMonthAndDay >= zodiacs[myZodiac.month][1].start &&
        combinedMonthAndDay <= zodiacs[myZodiac.month][1].end
      ) {
        return `${name} you are a ${zodiacs[myZodiac.month][0]}`;
      } else {
        return zodiacs[myZodiac.month - 1][0];
      }
    }
  };
  return myZodiac.output();
}
console.log(getZodiac("John", "22", "12", "1983"));
