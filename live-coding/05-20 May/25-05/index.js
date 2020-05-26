// what is NodeJs?

// why NodeJs?

// process object
// console.log(process);
// console.log(process.argv);
// console.log(`Hey ${process.argv[2]}`);

process.argv.forEach((item, i) => {
  console.log(`${i} : ${item}`);
});
const args = process.argv.slice(2);
console.log(args);

console.log(`Hey ${args[0]}`);

// fs (File System) built-in module in NodeJs
const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (error, data) {
  if (error) throw error;
  console.log(data);
});
// write file

fs.writeFile("new.txt", "This is created file from NodeJs", (error) => {
  if (error) throw error;
  console.log("Done!");
});
console.log("Hi this is way too fun!");

// exercise

const print = require("./stars");
const args1 = process.argv.slice(2);
print(args1[0], args1[1]);

function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry ${arg} is not a number, please try again.`);
    process.exit();
  }
  return number;
}
