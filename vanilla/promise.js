// const status = false;

// console.log("Task 1");

// //promise definition
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (status) {
//       resolve("Task 2");
//     } else {
//       reject("Failed!");
//     }
//   }, 2000);
// });

// //promise call
// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// console.log("Task 3");

// PROMISE PRACTICE WITH SUMIT BHAAI
// const paymentSuccess = true;
// const marks = 70;

// function enroll() {
//   console.log("Course enrollment is in progress.");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (paymentSuccess) {
//         resolve();
//       } else {
//         reject("Payment failed!");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function progress() {
//   console.log("Course on progress...");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (marks >= 80) {
//         resolve();
//       } else {
//         reject("You could not get enough marks to get the certificate");
//       }
//     }, 3000);
//   });

//   return promise;
// }

// function getCertificate() {
//   console.log("Preparing your certificate.");

//   const promise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Congrats! You got the certificate.");
//     }, 1000);
//   });

//   return promise;
// }

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google meet",
      time: "10:00 pm",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
