exports.sum = (x, y) => x + y;
exports.sub = (x, y) => x - y;
exports.multi = (x, y) => x * y;

exports.prepareString = (string) => {
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  console.log(capitalizeFirstLetter("hey there you, Come and play with us"));
};
