//requirements
var shuffleArray = require('./shuffle');

var array = [ 'Erika Klein', 'Lisa Mabley', 'Suzanna Altman', 'Cari Tan', 'Joel Miller', 'Ryan Mulcahey', 'Kyle Johnson', 'Libby London', 'Amy Jennings', 'Max Wanderman', 'Oliver Brummel', 'Chris Tuttle', 'Sasha Kramer', 'Chris Rabuse', 'Courtney Ives', 'Jennifer Johnson', 'Peter Lilja-Sheeley', 'Russ Pipal', 'Taylor Ashton', 'Travis Ingram', 'Millie Walsh', 'Bernie Sanders', 'Hillary Clinton', 'Ted Cruz', 'Charlie Knick', 'Donald Trump'];

//shuffle array and take one random name
var randomName = function() {
  return shuffleArray(array)[0];
};

module.exports = randomName;
