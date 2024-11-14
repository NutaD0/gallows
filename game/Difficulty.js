const wordsAndDifficulty = require("../data/Words");

let getRandomDifficulty = function () {
  let difficulty = Array.from(wordsAndDifficulty.keys());
  let randomDifficulties = Math.floor(Math.random() * difficulty.length);
  return difficulty[randomDifficulties];
};

module.exports = getRandomDifficulty;
