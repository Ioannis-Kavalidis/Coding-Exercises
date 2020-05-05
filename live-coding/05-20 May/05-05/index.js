// Blocking vs Non-blocking code

// Blocking code

window.setTimeout(() => {
  //   alert("Hi");
}, 10000);

// Non-blocking code

let checkPromise = new Promise((resolve, reject) => {
  // resolve illustrates the success part and reject the failure part
  let x = false;
  if (x) {
    resolve("Everything is well");
  } else {
    reject("Sorry but something went wrong");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`); // then is the resolve from above
  })
  .catch((message) => {
    console.log(`I am catch.  ${message}`); // catch is the reject from above
  });
