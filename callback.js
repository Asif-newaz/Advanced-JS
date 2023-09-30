//Callback function
function display(some) {
  return console.log(some);
}

function calculator(num1, num2, Callback) {
  const sum = num1 + num2;

  return Callback(sum);
}

calculator(5, 5, display);
