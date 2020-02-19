// with a FOR loop

function theLongestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}
console.log(theLongestWord("Web Development course has its ups and downs"));

// with the sort() method

function theLongestWord1(str) {
  let longestWord = str.split(" ").sort((first, second) => {
    return second.length - first.length;
  });
  return longestWord[0];
}
console.log(theLongestWord1("Web Development course has its ups and downs"));

// with the reduce() method

function findLongestWord2(str) {
  const longestWord = str.split(" ").reduce((first, second) => {
    if (second.length > first.length) {
      return second;
    } else {
      return first;
    }
  });
  return longestWord;
}
console.log(findLongestWord2("Web Development course has its ups and downs"));
