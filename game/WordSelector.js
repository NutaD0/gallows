const difficultyChoser = require("./Menu.js");
const wordsAndDifficulty = require("../data/Words");

let getRandomWord = function (difficulty) {
  let words = Array.from(wordsAndDifficulty.values());
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

module.exports = getRandomWord;
