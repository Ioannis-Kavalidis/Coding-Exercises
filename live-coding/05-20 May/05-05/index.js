// Blocking vs Non-blocking code

// Blocking code

window.setTimeout(() => {
  //   alert("Hi");
}, 10000);

// Non-blocking code

let checkPromise = new Promise((resolve, reject) => {
  // this is the object
  // declaring the promise
  // resolve illustrates the success part and reject the failure part
  let x = false;
  if (x) {
    resolve("Everything is well");
  } else {
    reject("Sorry but something went wrong");
  }
});

checkPromise // then and catch are methods
  // calling the promise
  .then((message) => {
    console.log(`I am then and ${message}`); // then is the resolve from above
  })
  .catch((message) => {
    console.log(`I am catch.  ${message}`); // catch is the reject from above
  });

//
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

let ms = 3000;
delay(ms).then(myFunction());

function myFunction() {
  let text = document.querySelector(".text");
  text.innerHTML = `It took me ${ms} ms to be done`;
}
