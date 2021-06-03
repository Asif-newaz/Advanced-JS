// Function constructor
var john = {
    name: `John`,
    yearOfBirth: 1990,
    job: `teacher`,
};

// JavaScript ES6
// function sayName() {
//     var name = "Asif Newaz";
// }

// sayName();
// console.log(name);

// if (true) {
//     var name = "Asif Newaz";
// }

// console.log(name);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("Outside loop", i);

// let address = `Sonmania
//  Kapasia`;

// console.log(address);

let person = {
    firstName: "Asif",
    lastName: "Newaz",
    sayName() {
        return `My name is ${this.firstName} ${this.lastName}`;
    },
};

let name = person.sayName();
console.log(name);
