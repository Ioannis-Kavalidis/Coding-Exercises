// module exports
const fs = require("fs");
const math = require("./math");

let x = 4,
  y = 5;

console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x + y = ${math.sub(x, y)}`);
console.log(`x + y = ${math.multi(x, y)}`);

fs.copyFile("original.txt", "copyFromOg.txt", (err) => {
  if (err) throw err;
  console.log("txt copied from the original");
});

const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("Done!!!");

// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags

fs.open("new.txt", "w", (err, data) => {
  if (err) throw err;
  console.log("Great!!!");
});
