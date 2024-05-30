// "use strict";

//AJAX call
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const getCountryData = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.coatOfArms.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
//     <p class="country__row"><span>💰</span>${data.currencies.BDT}</p>
//     </div>
//     </article>
// `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("Bangladesh");
// getCountryData("India");
// getCountryData("Portugal");
// getCountryData("Argentina");

const takeOrder = (customer1, callback1) => {
  console.log(`Take order for ${customer1}`);

  callback1(customer1);
};

const processOrder = (customer1, callback) => {
  console.log(`Processing order for ${customer1}`);

  setTimeout(function () {
    console.log(`Cooking completed ${customer1}`);
    console.log(`Order processed for ${customer1}`);
    callback(customer1);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Completed order for ${customer}`);
};

// takeOrder("customer 1", function (customer1) {
//   processOrder(customer1, function (customer1) {
//     completeOrder(customer1);
//   });
// });

const isWork = false;

const promisePractice = new Promise((resolve, reject) => {
  console.log("Started working with promise");

  if (!isWork) {
    resolve();
  } else {
    reject();
  }
});

promisePractice
  .then(() => {
    console.log("I kept my word!");
  })
  .catch(() => {
    console.log("Sorry, I couldn't keep my word");
  });
