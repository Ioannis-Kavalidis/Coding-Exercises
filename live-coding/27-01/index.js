/* 
Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
Move the first letter of each word to the end of the word.
Add “ay” to the end of the word.
Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
Extra Practice
Preserve proper capitalization as in the examples below.
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
const strPig = "are are is";
console.log(pigLatin(strPig));
