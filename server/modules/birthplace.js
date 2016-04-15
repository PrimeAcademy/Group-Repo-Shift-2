//Initiates start and end dates
// var startDate = new Date("August 5, 1516 00:00:00");
// var endDate = new Date("March 12, 2016 00:00:00");

//generates random dates between the startDate and endDate
//function works great!
// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
//
// var randomBirthday = randomDate(startDate, endDate);
//
// module.exports = randomBirthday;

// BirthPLACE picker

var shuffleArray = require('./shuffle');

var array = ['Madrid, Spain', 'Jackson, Mississippi', 'Reykjavik, Iceland', 'Minneapolis, Minnesota', 'Minneapolis, Kansas', 'Paris, Minnesota', 'Paris, France', 'Paris, Texas', 'Finland, Minnesota', 'Oslo, Norway', 'Narnia', 'Mordor', 'Terabithia', 'Space-Time', 'District 5', 'San Jose, California', 'Whakatane, New Zealand', 'The BatCave', 'bat cave', 'Bear Country', 'Venus', 'Geneva, Switzerland', 'Dar es salaam, Tanzania', 'Galapogos Islands', 'Everest Base Camp', 'Taj Mahal'];

var randomLocation = function() {
  return shuffleArray(array)[0];
};

module.exports = randomLocation;
