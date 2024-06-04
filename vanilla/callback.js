//Callback function
function display(some) {
  return console.log(some);
}

function calculator(num1, num2, Callback) {
  const sum = num1 + num2;

  return Callback(sum);
}

// calculator(5, 12, display);

//Callback pattern
const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
  console.log("Course enrollment is in progress...");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on progress...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate!");

  setTimeout(function () {
    console.log("Congrats! You got the certificate.");
  }, 1000);
}

enroll(function () {
  progress(getCertificate);
});

// enroll(progress);
