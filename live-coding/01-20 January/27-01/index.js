/* 
Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
Move the first letter of each word to the end of the word.
Add “ay” to the end of the word.
Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
Extra Practice
Preserve proper capitalization as in the examples below
Examples:
pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”
*/

function pigLatin(str) {
  let translation = [];
  const vowels = ["a", "e", "o", "i", "u"];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" ");
  console.log(splitStr + "  THis is split arr");
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0]; //b anana
    console.log(firstChr + " first chr"); //anana
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    console.log(remainder + " remainder");
    if (vowels.includes(firstChr)) {
      const firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
      translation.push(firstChrVal);
    } else {
      if (i == 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      const newString = remainder + firstChr + "ay";
      translation.push(newString);
      console.log(translation);
    }
  }
  let result = translation.join(" ");
  return result;
}
const strPig = "Cats are great pets";
console.log(pigLatin(strPig));

// Kevins

function pigLatin1(parameter) {
  let translation = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let lowerCase = parameter.toLowerCase();
  let splitString = lowerCase.split(" ");
  for (i = 0; i < splitString.length; i++) {
    let firstCharacter = splitString[i][0]; // grab first character for each index (round 1: grab c) [round 2: grab a]
    let remainder = splitString[i].slice(1, splitString[i].length); // grab the rest of characters for each index  (round 1: grab a t s) [round 2: grab r e]
    if (vowels.includes(firstCharacter)) {
      const firstCharValue = i
        ? firstCharacter
        : firstCharacter + remainder + "way"; // i = 0 -> false, otherwise true [round 2: false]
      translation.push(firstCharValue); // [round 2: push a r e w a y]
    } else {
      if (i == 0) {
        let firstCharRemainder = remainder[0]; // grab first character from the remainder  (round 1: grab a)
        let wordRemainder = remainder.slice(1, remainder.length); // grab the rest of characters from the remainder (round 1: grab t s)
        remainder = firstCharRemainder.toUpperCase() + wordRemainder; // capital letter on first character of the remainder (round 1: A + t s)
      }
    }
    const newString = remainder + firstCharacter + "ay"; // add first character and ay at the end of the remainder (round 1: A + t s + c + ay) [round 2: r e + a + a y]
    translation.push(newString);
  }
  let result = translation.join(" "); // join array (round 1: Atscay) [round 2: areway reaay]
  return result;
}
const stringPig = "Cats are great pets";
console.log(pigLatin1(stringPig));
