'use strict';
console.log('js connected');
var hours = ['6am','7am','8am','9am','10am','11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];





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

var tokyo = {
  name:'Tokyo',
  minCustomers:3,
  maxCustomers: 24,
  averageCookies: 1.2,
  randomNumber:  function (){
    var random = Math.floor(Math.random()*
    (this.maxCustomers - this.minCustomers)+this.minCustomers);
    console.log(random);
    return random;

  },

  avgCookiesPerHour : function (){
    var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
    console.log(this.randomNumber());
    console.log(avgCookiesPerHour);
    return Math.floor(avgCookiesPerHour);
  }
};
tokyo.randomNumber();
tokyo.avgCookiesPerHour();

render = function() {
  var citiesHolder = document.getElementById('cities-holder');
  var newH2 = document.createElement('h2');
  newH2.textContent = tokyo.name;
  citiesHolder.appendChild(newH2);
  for(var i=0; i<hours.length; i= i+1){

    var newLi = document.createElement('li');
    newLi.textContent = `${hours[i]}: ${tokyo.avgCookiesPerHour()} cookies`;
    citiesHolder.appendChild(newLi);
  }
};

render();


var dubai = {
  name:'Dubai',
  minCustomers:11,
  maxCustomers: 38,
  averageCookies: 3.7,
  randomNumber:  function (){
    var random = Math.floor(Math.random()*
    (this.maxCustomers - this.minCustomers)+this.minCustomers);
    console.log(random);
    return random;

  },

  avgCookiesPerHour : function (){
    var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
    console.log(this.randomNumber());
    console.log(avgCookiesPerHour);
    return Math.floor(avgCookiesPerHour);
  }
};
dubai.randomNumber();
dubai.avgCookiesPerHour();

render = function() {
  var citiesHolder = document.getElementById('cities-holder');
  var newH2 = document.createElement('h2');
  newH2.textContent = dubai.name;
  citiesHolder.appendChild(newH2);
  for(var i=0; i<hours.length; i= i+1){

    var newLi = document.createElement('li');
    newLi.textContent = `${hours[i]}: ${dubai.avgCookiesPerHour()} cookies`;
    citiesHolder.appendChild(newLi);
  }
};

render();


var paris = {
  name:'Paris',
  minCustomers:20,
  maxCustomers: 38,
  averageCookies: 2.3,
  randomNumber:  function (){
    var random = Math.floor(Math.random()*
    (this.maxCustomers - this.minCustomers)+this.minCustomers);
    console.log(random);
    return random;

  },

  avgCookiesPerHour : function (){
    var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
    console.log(this.randomNumber());
    console.log(avgCookiesPerHour);
    return Math.floor(avgCookiesPerHour);
  }
};
paris.randomNumber();
paris.avgCookiesPerHour();

render = function() {
  var citiesHolder = document.getElementById('cities-holder');
  var newH2 = document.createElement('h2');
  newH2.textContent = paris.name;
  citiesHolder.appendChild(newH2);
  for(var i=0; i<hours.length; i= i+1){

    var newLi = document.createElement('li');
    newLi.textContent = `${hours[i]}: ${paris.avgCookiesPerHour()} cookies`;
    citiesHolder.appendChild(newLi);
  }
};

render();


var lima = {
  name:'Lima',
  minCustomers:2,
  maxCustomers: 16,
  averageCookies: 4.6,
  randomNumber:  function (){
    var random = Math.floor(Math.random()*
    (this.maxCustomers - this.minCustomers)+this.minCustomers);
    console.log(random);
    return random;

  },

  avgCookiesPerHour : function (){
    var avgCookiesPerHour = this.randomNumber() * this.averageCookies;
    console.log(this.randomNumber());
    console.log(avgCookiesPerHour);
    return Math.floor(avgCookiesPerHour);
  }
};
lima.randomNumber();
lima.avgCookiesPerHour();

render = function() {
  var citiesHolder = document.getElementById('cities-holder');
  var newH2 = document.createElement('h2');
  newH2.textContent = lima.name;
  citiesHolder.appendChild(newH2);
  for(var i=0; i<hours.length; i= i+1){

    var newLi = document.createElement('li');
    newLi.textContent = `${hours[i]}: ${lima.avgCookiesPerHour()} cookies`;
    citiesHolder.appendChild(newLi);
  }
};

render();




