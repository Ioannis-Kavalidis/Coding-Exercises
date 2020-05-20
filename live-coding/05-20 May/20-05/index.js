// callbacks repetition

// let's make hot chocolate

function prepareHotChocolate(callback) {
  setTimeout(() => {
    let milk = "boiled";
    // once milk is boiled, start next step
    callBack(milk, callback2);
  }, 2000);
}

function callBack(milk, callback2) {
  // first step
  if (milk == "boiled") {
    let chocolate = "added";
    // once chocolate is added, start next step
    callback2(chocolate, callback3);
  }
}

function callback2(chocolate, callback3) {
  if (chocolate == "added") {
    let marshmallow = "added";
    // once marshmallow is added, start next step
    callback3(marshmallow);
  }
}

function callback3(marshmallow) {
  if (marshmallow == "added") {
    console.log("Cool your drink is ready!");
  }
}

// calling the function
prepareHotChocolate(callBack);
