const readline = require("readline-sync");
const getRandomDifficulty = require("./Difficulty");
const wordsAndDifficulty = require("../data/Words");
const getRandomWord = require("./WordSelector");

let difficultyChoser = function () {
  console.clear();
  console.log(`\nMain menu\n`);

  console.log(`Choose difficulty:`);
  console.log(`1. Easy`);
  console.log(`2. Medium`);
  console.log(`3. Hard`);

  let chose = readline.question("Enter value: ");
  chose = parseInt(chose);
  let difficulty = "";
  switch (chose) {
    case 1:
      difficulty = "easy";
      break;
    case 2:
      difficulty = "medium";
      break;
    case 3:
      difficulty = "hard";
      break;
    default:
      console.log("Random difficulty...");
      difficulty = getRandomDifficulty();
      break;
  }
  let word = getRandomWord();
  console.log(`Your difficulty: ${difficulty}`);
  console.log(`Your word: ${word}`);
};

module.exports = difficultyChoser;
