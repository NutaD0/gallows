const readline = require("readline-sync");
// ------------------------------------------------Виселица-------------------------------------------------
let gallows = [
  `
  
  
  
  
  
  
  
                `,
  `
  
  
  
  
  
  
  
  --------------`,
  `




           |
           |
           |
  --------------`,
  `
  
  
           |
           | 
           |
           |
           |
  --------------`,
  `
  
      +----+
      |    |
      0    | 
           |
           |
           |
  --------------`,
  `
  
      +----+
      |    |
      0    |
     .|.   |
      ^    |
           |
  --------------`,
];
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------Слова-------------------------------------------------
const wordsAndThemes = new Map();

wordsAndThemes.set("animals", ["cat", "dog", "bat"]);
wordsAndThemes.set("sport", ["volleyball", "football", "basketball"]);
wordsAndThemes.set("planets", ["earth", "mercury", "jupiter"]);
// ------------------------------------------------------------------------------------------------------

// ----------------------------------------------Рандомная тема------------------------------------------
let getRandomThemes = function () {
  let theme = Array.from(wordsAndThemes.keys());
  let randomThemes = Math.floor(Math.random() * theme.length);
  return theme[randomThemes];
};
// ----------------------------------------------Рандомная сложность-------------------------------------
let getRandomDifficulty = function () {
  let difficulty = ["easy", "medium", "hard"];
  let randomDifficulties = Math.floor(Math.random() * difficulty.length);
  return difficulty[randomDifficulties];
};
// ------------------------------------------------------------------------------------------------------

// ----------------------------------------------Рандомное слово-----------------------------------------
let getRandomWord = function (theme) {
  let wordsArray = wordsAndThemes.get(theme);
  let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  return randomWord;
};
// ------------------------------------------------------------------------------------------------------

let attemps = 10;
let difficulty = "easy";
let theme = "animals";
let word;

while (true) {
  console.log("\nMain menu\n");

  console.log(`1. Select difficulty | now: ${difficulty}`);
  console.log(`2. Select theme      | now: ${theme}`);
  console.log(`3. Start`);

  let chosenValueMainMenu = readline.question("Enter value: ");
  chosenValueMainMenu = parseInt(chosenValueMainMenu);
  switch (chosenValueMainMenu) {
    case 1:
      console.log("\nDifficulty\n");

      console.log("1. Easy");
      console.log("2. Medium");
      console.log("3. Hard");

      let chosenValueDifficulty = readline.question(`Enter value: `);
      chosenValueDifficulty = parseInt(chosenValueDifficulty);
      if (chosenValueDifficulty === 1) {
        difficulty = "easy";
        attemps = 10;
      } else if (chosenValueDifficulty === 2) {
        difficulty = "medium";
        attemps = 6;
      } else if (chosenValueDifficulty === 3) {
        difficulty = "hard";
        attemps = 3;
      } else {
        difficulty = getRandomDifficulty();
        if (difficulty === "easy") {
          attemps = 10;
        } else if (difficulty === "medium") {
          attemps = 6;
        } else if (difficulty === "hard") {
          attemps = 3;
        }
        console.log(`Random difficulty: ${difficulty}`);
      }
      break;
    case 2:
      console.log("\nThemes\n");

      console.log("1. Animals");
      console.log("2. Sport");
      console.log("3. Planets");

      let chosenValueThemes = readline.question(`Enter value: `);
      chosenValueThemes = parseInt(chosenValueThemes);
      if (chosenValueThemes === 1) {
        theme = "animals";
      } else if (chosenValueThemes === 2) {
        theme = "sport";
      } else if (chosenValueThemes === 3) {
        theme = "planets";
      } else {
        theme = getRandomThemes();
        console.log(`Random theme: ${theme}`);
      }
      break;
    case 3:
      console.log("Starting game...");
      word = getRandomWord(theme);
      break;
    default:
      console.log(`Chose the correct value!`);
      continue;
  }
  if (word) {
    break;
  }
}

console.log(`Your word: ${word}`); // Отладка-----------------------------------------------------------------------------------------------------------------------------------------------------

let hiddenWord = word.split("").map(() => "_");

console.log("\n", hiddenWord, "\n");

let gallowsImages = 0;

while (hiddenWord.join("") !== word && attemps > 0) {
  console.log(`Attemps: ${attemps}`);
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
