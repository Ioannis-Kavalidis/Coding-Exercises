// Promise

const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = false;

  if (hasDog) {
    resolve({
      status: "User is cool!",
      emoji: "yeah",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy!",
      emoji: "boo",
    });
  } else {
    reject({
      status: "User is alone!",
      emoji: "nooo",
    });
  }
});

userStatus
  .then((obj) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${obj.status} and he/she is ${obj.emoji}`;
  })
  .catch((err) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
  });

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log("User data being loaded");
    if (userName == "Ali") {
      resolve(`Welcome back!`);
    } else {
      reject(`Sorry I don't know you!`);
    }
  });
}

function secondStep(response) {
  return new Promise((resolve) => {
    console.log("Still loading");
    resolve(`we are waiting for you ${response}`);
  });
}

// stepOne("Ali")
//   .then((response) => {
//     console.log("response just arrived");
//     return secondStep(response);
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   })
//   .catch((error) => console.log(error));

// Async Await

async function startSomething() {
  try {
    const response = await stepOne("hadi");
    console.log("response just arrived");
    const secondResponse = await secondStep(response);
    console.log(secondResponse);
  } catch (err) {
    console.log(err);
  }
}

startSomething();
