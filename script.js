// Function constructor
var john = {
  name: `John`,
  yearOfBirth: 1990,
  job: `teacher`,
};

/* ##########-----JAVASCRIPT ES6 FEATURES BY RYAN CHRISTIANI-----########## */

// Uses of let variable

// function sayName() {
//     var firstName = "Asif";
//     let lastName = "Newaz";
// }

// sayName();
// console.log(firstName);

// if (true) {
//     let age = 26;
//     console.log(name)
// }

// console.log(age);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// We can't initialized loop using const variable

// console.log(`outside loop ${i}`);

// {
//     let x = 5;
// }

// console.log(x);

// Arrow function
// let add = (a, b) => a + b;

//   console.log(add(2, 3));
//   console.log(add(4, 5));

// let numbers = [2,3,4,5,6,7,8,9];

// let squareRoot = numbers.map(Math.sqrt);

// console.log(squareRoot);

// let numbers = [3, 5, 8, 9];

// let doubled = numbers.map(function(x) {
//     return x * 2
// });

// console.log(doubled);

// let numbers = [3, 5, 8, 9];

// let doubled = numbers.map(x => x * 2);

// console.log(doubled);

// let person = {
//     firstName: "Asif",
//     lastName: "newaz",
//     sayName () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.sayName());

// let person = {
//   firstName: "Asif",
//   hobbies: ["programming", "game", "gym"],
//   showHobbies: function () {
//     //   let test = this;
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.firstName} likes ${hobby}`);
//     });
//   },
// };

// person.showHobbies();

// function driverLicense5(passedTest) {
//   if (passedTest) {
//     var firstName = "John";
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       " was born in " +
//       yearOfBirth +
//       ", is now officially allowed to drive a car."
//   );
// }

// driverLicense5(true);

// function driverLicense6(passedTest) {
//   if (passedTest) {
//     let firstName = "John";
//     const yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       " was born in " +
//       yearOfBirth +
//       ", is now officially allowed to drive a car."
//   );
// }

// driverLicense6(true);

// let firstName = 'Asif';
// let lastName = 'Newaz';

// function sayName() {
//   return `${firstName} ${lastName}`;
// }

// console.log(sayName());

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('As'));
// console.log(n.endsWith('iz'));
// console.log(n.includes('n'));
// console.log(`${firstName} ` .repeat(5));

// Map in JS
const years = [1980, 1983, 1993, 1997, 1999];

console.log(years);

// ES5
// var ages = years.map(function(year) {
//   return 2021 - year;
// })

// ES6
let ages = years.map(
  (year, xxx) => `Age element ${xxx + 1}: ${2021 - year}`
);

console.log(ages);
