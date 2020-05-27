// 1st way - not recommended

// exports.sum = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// exports.multi = (a, b) => a * b;

//2nd way - recommended

// module.exports = {
//   sum: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   multi: (a, b) => a * b,
// };

// 3rd way - recommended

sum = (a, b) => a + b;
sub = (a, b) => a - b;
multi = (a, b) => a * b;
module.exports = {
  sum,
  sub,
  multi,
};
