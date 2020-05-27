// const print = require("./stars");
// const args1 = process.argv.slice(2);
// print(args1[0], args1[1]);

function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry ${arg} is not a number, please try again.`);
    process.exit();
  }
  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

function avg(numArray) {
  return sum(numArray) / numArray.length;
}

function med(numArray) {
  const mid = Math.floor(numArray.length / 2),
    numbers = [...numArray].sort((a, b) => a - b);
  return numArray.length % 2 !== 0
    ? numbers[mid]
    : (numbers[mid - 1] + numbers[mid]) / 2;
}

const fs = require("fs");
const args = process.argv.slice(2);
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);

// sum 3 5 6 dfgdg
// avg 45 6 67 dfgdg

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  case "med":
    console.log(med(numbers));
    break;
  default:
    console.log(
      "I cannot process this, please type 'sum' to calculate sum and 'avg' to calculate average "
    );
}

// readFile will read file
fs.readFile("./longText.txt", "utf8", function (error, data) {
  if (error) throw error;
  console.log(data);
});

// create file
// writeFile will create or overwrite
fs.writeFile("new.txt", "This is text done with NodeJs", (err) => {
  if (err) throw err;
  console.log("Done!");
});

// appendFile will create file
fs.appendFile("new3.txt", "Second file is done with NodeJs", (err) => {
  if (err) throw err;
  console.log("Done!");
});

// rename file
// fs.rename("./hello.txt", "./hi.txt", (err) => {
//   if (err) throw err;
//   console.log("Done!");
// });

// delete file
fs.unlink("./hi.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
