var shuffleArray = require('./shuffle');

var array = ['Madrid, Spain', 'Jackson, Mississippi', 'Reykjavik, Iceland', 'Minneapolis, Minnesota', 'Minneapolis, Kansas', 'Paris, Minnesota', 'Paris, France', 'Paris, Texas', 'Finland, Minnesota', 'Oslo, Norway', 'Narnia', 'Mordor', 'Terabithia', 'Space-Time', 'District 5', 'San Jose, California', 'Whakatane, New Zealand', 'The BatCave', 'bat cave', 'Bear Country', 'Venus', 'Geneva, Switzerland', 'Dar es salaam, Tanzania', 'Galapogos Islands', 'Everest Base Camp', 'Taj Mahal']

var randomLocation = function() {
  return shuffleArray(array)[0];
};

module.exports = randomLocation;
