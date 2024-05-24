const status = false;

console.log("Task 1");

//promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("Task 2");
    } else {
      reject("Failed!");
    }
  }, 2000);
});

//promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });

console.log("Task 3");
