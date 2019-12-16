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
var salesTable = document.getElementById('sales-table');

function City(cityname, minCustomersPerHour, maxCustomersPerHour, avgeCookiesPerCustomer) {
  this.cityname = cityname;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgeCookiesPerCustomer;
  this.cookiesSoldPerHour = [];
}

var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

City.prototype.randomCustomerPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
};

// Method for generating array of cookies per hour
City.prototype.estCookiesSoldPerHour = function() {
  var storeTotal = 0;

  for ( var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesPerCustomer);
    console.log(this.randomCustomerPerHour(), this.avgCookiesPerCustomer);
    this.cookiesSoldPerHour.push(cookies);
    storeTotal = storeTotal + cookies;
  }

  this.cookiesSoldPerHour.push(storeTotal);
  return this.cookiesSoldPerHour;
};


var cityArray = [seattle, tokyo, dubai, paris, lima];

// Methode for adding  hourly sales in to a daily total.
function hourlyTotals () {
  var hourlyTotal=0;
  var grandTotal = 0;
  for( var i =0; i < hours.length; i++) {
    for( var j=0; j < cityArray.length; j++) {
      hourlyTotal = hourlyTotal + cityArray[j].cookiesSoldPerHour[i];
    }
    grandTotal = grandTotal + hourlyTotal;
  }
}
hourlyTotals();

// Methode to loop through and render each City object's data in the table

City.prototype.render = function() {
  var salesTableRow = document.createElement('tr');
  var tableDataName = document.createElement('td');
  tableDataName.textContent = this.cityname;
  salesTableRow.appendChild(tableDataName);
  for(var i =0; i < this.cookiesSoldPerHour.length; i++) {
    var tableDataCookies = document.createElement('td');
    tableDataCookies.textContent = this.cookiesSoldPerHour[i];
    console.log(this.cookiesSoldPerHour[i]);
    salesTableRow.appendChild(tableDataCookies);
  }
  salesTable.appendChild(salesTableRow);
};




// create function to render sales hours information in table.

function renderHours() {

  var hoursTableRow = document.createElement('tr');
  var hourTableEmpty = document.createElement('th');
  hourTableEmpty.textContent = '';
  hoursTableRow.appendChild(hourTableEmpty);
  
  for(var i = 0; i < hours.length; i++) {
    var hoursTableData = document.createElement('th');
    hoursTableData.textContent = hours[i];
    hoursTableRow.appendChild(hoursTableData);
  }


  salesTable.appendChild(hoursTableRow);

  var hoursTableTotal = document.createElement('th');
  hoursTableTotal.textContent = 'Daily Location Total';
  hoursTableRow.appendChild(hoursTableTotal);


}



function renderFooter() {
  var footerRow = document.createElement('tr');
  var totalTd = document.createElement('td');
  totalTd.textContent = 'total';
  footerRow.appendChild(totalTd);
  var hourlyTotal=0;
  var grandTotal = 0;

  for( var i =0; i < hours.length; i++) {
    hourlyTotal = 0;
    for( var j=0; j < cityArray.length; j++) {
      hourlyTotal = hourlyTotal + cityArray[j].cookiesSoldPerHour[i];
    }
    // create element
    totalTd = document.createElement('td');
    totalTd.textContent = hourlyTotal;
    footerRow.appendChild(totalTd);
    // give content
    //append td to tr
    grandTotal = grandTotal + hourlyTotal;

  }
  var grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = grandTotal;
  footerRow.appendChild(grandTotalTd);
  // var hourlyTotalTd = document.createElement('td');
  // hourlyTotalTd.textContent = hourlyTotal;
  // var tableFoot = document.getElementById('global-daily-total');
  // tableFoot.appendChild(footerRow);

  salesTable.append(footerRow);
}

function calcualteAllCookieData(){
  for ( var i =0; i < cityArray.length; i++) {
    cityArray[i].estCookiesSoldPerHour();
  }
}

function renderAllCities() {
  for ( var i =0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}

function formSubmitted(event){
  event.preventDefault();

  var newCity = new City (
    document.getElementById('New-City').value,
    parseInt(document.getElementById('Min-Cus').value),
    parseInt(document.getElementById('Max-Cus').value),
    parseInt(document.getElementById('The-Avg-Num-Coockies').value)
  );

  cityArray.push(newCity);

  newCity.estCookiesSoldPerHour();
  // newCity.render();

  salesTable.innerHTML = '';

  renderHours();
  renderAllCities();
  renderFooter();

}

// var forlistener = document.getElementById('new-location');
// forlistener.addEventListener('submit',formSubmitted);

renderHours();
calcualteAllCookieData();
renderAllCities();
renderFooter();

var forlistener = document.getElementById('new-location');
forlistener.addEventListener('submit',formSubmitted);





