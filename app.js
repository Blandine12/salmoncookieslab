'use strict';
console.log('js connected');






// var seattle = {
//   name: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookies: 6.3,


// randomNumber: function (){
//   var random = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers);
//     return random;

//   },

//   avgCookiesPerHour: function (){
//     var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
//     console.log(this.randomNumber());
//     console.log(avgCookiesPerHour);
//     return Math.floor(avgCookiesPerHour);
//   }

// };
// seattle.randomNumber();
// seattle.avgCookiesPerHour();

// var render = function() {
//   var citiesHolder = document.getElementById('cities-holder');
//   var newH2 = document.createElement('h2');

//   newH2.textContent = seattle.name;

//   citiesHolder.appendChild(newH2);

//   for(var i=0; i<hours.length; i= i+1){
//     // step 1: create element
//     var newLi = document.createElement('li');
//     // step 2: give the element content
//     newLi.textContent = `${hours[i]}: ${seattle.avgCookiesPerHour()} cookies`;
//     // step 3: append the element to the citiesHolder
//     citiesHolder.appendChild(newLi);

//     // var newTotal = document. createElement('Li');
//     // newTotal.textContent = `${hours[i]}: cookies`;
//     // citiesHolder.appendChild(newTotal);

//   }
// };

// render();

// var tokyo = {
//   name:'Tokyo',
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
//     return Math.floor(avgCookiesPerHour);
//   }
// };
// tokyo.randomNumber();
// tokyo.avgCookiesPerHour();

// render = function() {
//   var citiesHolder = document.getElementById('cities-holder');
//   var newH2 = document.createElement('h2');
//   newH2.textContent = tokyo.name;
//   citiesHolder.appendChild(newH2);
//   for(var i=0; i<hours.length; i= i+1){

//     var newLi = document.createElement('li');
//     newLi.textContent = `${hours[i]}: ${tokyo.avgCookiesPerHour()} cookies`;
//     citiesHolder.appendChild(newLi);
//   }
// };

// render();


// var dubai = {
//   name:'Dubai',
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
//     return Math.floor(avgCookiesPerHour);
//   }
// };
// dubai.randomNumber();
// dubai.avgCookiesPerHour();

// render = function() {
//   var citiesHolder = document.getElementById('cities-holder');
//   var newH2 = document.createElement('h2');
//   newH2.textContent = dubai.name;
//   citiesHolder.appendChild(newH2);
//   for(var i=0; i<hours.length; i= i+1){

//     var newLi = document.createElement('li');
//     newLi.textContent = `${hours[i]}: ${dubai.avgCookiesPerHour()} cookies`;
//     citiesHolder.appendChild(newLi);
//   }
// };

// render();


// var paris = {
//   name:'Paris',
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
//     return Math.floor(avgCookiesPerHour);
//   }
// };
// paris.randomNumber();
// paris.avgCookiesPerHour();

// render = function() {
//   var citiesHolder = document.getElementById('cities-holder');
//   var newH2 = document.createElement('h2');
//   newH2.textContent = paris.name;
//   citiesHolder.appendChild(newH2);
//   for(var i=0; i<hours.length; i= i+1){

//     var newLi = document.createElement('li');
//     newLi.textContent = `${hours[i]}: ${paris.avgCookiesPerHour()} cookies`;
//     citiesHolder.appendChild(newLi);
//   }
// };

// render();


// var lima = {
//   name:'Lima',
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
//     return Math.floor(avgCookiesPerHour);
//   }
// };
// lima.randomNumber();
// lima.avgCookiesPerHour();

// render = function() {
//   var citiesHolder = document.getElementById('cities-holder');
//   var newH2 = document.createElement('h2');
//   newH2.textContent = lima.name;
//   citiesHolder.appendChild(newH2);
//   for(var i=0; i<hours.length; i= i+1){

//     var newLi = document.createElement('li');
//     newLi.textContent = `${hours[i]}: ${lima.avgCookiesPerHour()} cookies`;
//     citiesHolder.appendChild(newLi);
//   }
// };

// render();





var hours = ['6am','7am','8am','9am','10am','11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function City(name, minCustomers, maxCustomers, averageCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.avgCookiesHoursArray = [];
}

var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

City.prototype.randomNumber = function(){
  var random = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers);
  console.log(random);
  return random;
};

City.prototype.randomAverageCookiesPerHour = function(){
  //loop through hours
  for(var i= 0 ; i < hours.length; i++){
    // generate a random number of cookie based on avg cookies
    var avgCookies = Math.floor(this.randomNumber() * this.averageCookies);
    // push result into avgCookiesHoursArray
    this.avgCookiesHoursArray.push(avgCookies);
  }
  return this.avgCookiesHoursArray;
};








var cities =  [seattle, tokyo, dubai, paris, lima];













