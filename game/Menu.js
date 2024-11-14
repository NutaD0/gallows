const readline = require("readline-sync");
const getRandomDifficulty = require("./Difficulty");
const wordsAndDifficulty = require("../data/Words");
const getRandomWord = require("./WordSelector");
const gallows = require("./HangmanVisual");

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
  word = getRandomWord(difficulty);
  console.log(`Your difficulty: ${difficulty}`);
  console.log(`Your word: ${word}`); // Отладка-----------------------------------------------------------------------------------------------------------------------------------------------------

  let hiddenWord = word.split("").map(() => "_");

  console.log("\n", hiddenWord, "\n");

  let attemps = 5;
  let gallowsImages = 0;

  while (hiddenWord.join("") !== word && attemps > 0) {
    let choseLetter = readline.question("Enter letter: ");
    let guessingWord = function () {
      let wordArray = word.split("");
      let updated = false;

      for (let i = 0; i < wordArray.length; i++) {
        if (choseLetter === wordArray[i]) {
          hiddenWord[i] = choseLetter;
          updated = true;
        }
      }

      if (!updated) {
        attemps--;
        gallowsImages++;
        if (gallowsImages < gallows.length) {
          console.log(gallows[gallowsImages]);
        }
      }

      return hiddenWord.join(" ");
    };
    guessingWord();
    console.log(hiddenWord.join(" "));
  }

  if (hiddenWord.join("") === word) {
    console.log("You win, word:", word);
  } else {
    console.log("You lose, word:", word);
  }
};

module.exports = difficultyChoser;
