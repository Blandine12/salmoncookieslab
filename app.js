'use strict';
console.log('js connected');
var hours = ['6am','7am','8am', ];





var seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,


  randomNumber: function (){
    var random = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers);
    return random;

  },

  avgCookiesPerHour: function (){
    var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
    console.log(this.randomNumber());
    console.log(avgCookiesPerHour);
    return Math.floor(avgCookiesPerHour);
  }

};
seattle.randomNumber();
seattle.avgCookiesPerHour();

var render = function() {
  var citiesHolder = document.getElementById('cities-holder');
  var newH2 = document.createElement('h2');
  newH2.textContent = seattle.name;
  citiesHolder.appendChild(newH2);
  for(var i=0; i<hours.length; i= i+1){

    var newLi = document.createElement('li');
    newLi.textContent = `${hours[i]}: ${seattle.avgCookiesPerHour()} cookies`;
    citiesHolder.appendChild(newLi);
  }
};

render();
// var Tokyo = {
//   minCustomers:3,
//   maxCustomers: 24,
//   averageCookies: 1.2,
//   randomNumber:  function (){
//     var random = Math.floor(Math.random()*
//     (this.maxCustomers - this.minCustomers)+this.minCustomers);
//     console.log(random);
//     return random;

//   },

//   avgCookiesPerHour : function (){
//     var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
//     console.log(this.randomNumber());
//     console.log(avgCookiesPerHour);
//   }
// };
// Tokyo.randomNumber();

// var Dubai = {
//   minCustomers:11,
//   maxCustomers: 38,
//   averageCookies: 3.7,
//   randomNumber:  function (){
//     var random = Math.floor(Math.random()*
//     (this.maxCustomers - this.minCustomers)+this.minCustomers);
//     console.log(random);
//     return random;

//   },

//   avgCookiesPerHour : function (){
//     var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
//     console.log(this.randomNumber());
//     console.log(avgCookiesPerHour);
//   }

//   openStore: 6am,
//   closeStore: 8pm,



// };

// Dubai.randomNumber();


// var Paris = {
//   minCustomers:20,
//   maxCustomers: 38,
//   averageCookies: 2.3,
//   randomNumber:  function (){
//     var random = Math.floor(Math.random()*
//     (this.maxCustomers - this.minCustomers)+this.minCustomers);
//     console.log(random);
//     return random;

//   },

//   avgCookiesPerHour : function (){
//     var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
//     console.log(this.randomNumber());
//     console.log(avgCookiesPerHour);
//   }
// };
// Paris.randomNumber();

// var Lima = {
//   minCustomers:2,
//   maxCustomers: 16,
//   averageCookies: 4.6,
//   randomNumber:  function (){
//     var random = Math.floor(Math.random()*
//     (this.maxCustomers - this.minCustomers)+this.minCustomers);
//     console.log(random);
//     return random;

//   },

//   avgCookiesPerHour : function (){
//     var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
//     console.log(this.randomNumber());
//     console.log(avgCookiesPerHour);
//   }
// };
// Lima.randomNumber();




