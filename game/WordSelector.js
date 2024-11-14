require("./Menu.js");
const wordsAndDifficulty = require("../data/Words");

let getRandomWord = function (difficulty) {
  let wordsArray = wordsAndDifficulty.get(difficulty);
  let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  return randomWord;
};

module.exports = getRandomWord;
