// Requirements
var shuffle = require('./shuffle');

// Init variables
var adjectiveList = ['Pistachio', 'Sparkly', 'Banana', 'Nerdy', 'Rainbow',
'HungryHungry', 'Invisible', 'Magnificent', 'Fancy', 'Lunar', 'Cantankerous',
'Geodesic', 'BigNosed', 'Spaghetti', 'Ursine', 'Spanky', 'Murderous', 'Code',
'Urgent', 'Instant', 'Anonymous', 'Static', 'Tiny', 'Massive', 'CroMagnon',
'Vegan', 'Hipster', 'Fighting', 'Quizzical', 'Tumbling', 'Tetra',
'TheChosen', 'SoupedUp', 'NonCanonical', 'Mellifluous', 'Hulking', 'Stinky',
'Egregious', 'Bovine', 'Real', 'Fake', 'Faux', 'EastSide', 'Ancient', 'Blue', 'Magnum', 'Neon', 'Retro', 'Unsavory', 'Aggressive', 'Sepia','Feral'];

var nounList = ['Sandwich', 'Nerd', 'Monkey', 'Cowboy', 'Ninja', 'Pants',
'Octothorpe', 'Unicorn', 'Hamster', 'Bunny', 'GlowWorm', 'Dome', 'Rhombus',
'Octopi', 'Punk', 'PrimeMinister', 'JointChief', 'Robot',
'Pi', 'Hipster', 'Pizza', 'Query', 'Array', 'Soup', 'Tumbleweed', 'SmartyPants',
'Bro', 'Barricuda', 'Diet', 'Gamer', 'Pirate', 'Chihuaua'];

var newTwitterHandle = function() {
  var adjective = shuffle(adjectiveList)[0];
  var noun = shuffle(nounList)[0];

  // Generate random twitterhandle
  return '@' + adjective + noun;
};

// Export
module.exports = newTwitterHandle;
