/* Exercise:  Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. 
The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. 
Print your solution to the console.

 **Expected Output**

capitalizeFirstLetter("hey there"); → `Hey There` */

// 1st way: with a for loop and charAt()

function capitalizeFirstLetter(str) {
  //converting the giving string into array
  str = str.split(" ");
  //iterating over all elements in the array
  for (let i = 0; i < str.length; i++) {
    //converting the first char to upper case &concatenating to the rest chars
    str[i] = str[i].charAt(0).toUpperCase(str[i]) + str[i].substring(1);
  }
  return str.join(" ");
}

console.log(capitalizeFirstLetter("hey there come and play"));

// 2nd way: with map() and charAt()

function capitalizeFirstLetter1(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(capitalizeFirstLetter1("hey there come and play"));

// 3rd way: with map() and replace()

function capitalizeFirstLetter2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
console.log(capitalizeFirstLetter2("hey there come and play"));
