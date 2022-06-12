//middle  part with score counters
const scoreboard_you = document.querySelector(".scoreboard__name_you");
const scoreboard_bot = document.querySelector(".scoreboard__name_bot");

//active buttons selection
const btn_rock = document.querySelector(".interface__btn_rock");
const btn_paper = document.querySelector(".interface__btn_paper");
const btn_scissor = document.querySelector(".interface__btn_scissor");

// Footer with informations selection
const results_player = document.querySelector(".footer__results_player");
const results_bot = document.querySelector(".footer__results_bot");
const results_winner = document.querySelector(".footer__results_winner");

// Footer img to show result
const results__img_player = document.querySelector(".results__img_player");
const results__img_bot = document.querySelector(".results__img_bot");

//variables to store the score
let my_score = 0;
let bot_score = 0;
// Overall result, to be assigned
let result;

//options in global scope to have acces for both functions
const options = ["rock", "paper", "scissors"];

// func returns random result aka bot plays
const getComputerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

//func to clean the results output before new game round
const cleanResults = () => {
  //clean human results
  results_player.textContent = "You played: ";
  const img_human = document.querySelector(".img_human");
  img_human ? results__img_player.removeChild(img_human) : null;

  //clean bot results
  results_bot.textContent = "Bot played: ";
  const img_bot = document.querySelector(".img_bot");
  img_bot ? results__img_bot.removeChild(img_bot) : null;

  results_winner.textContent = "Result of this Round: ";
};

//function which will take the parameter humanPlay, calls the getComputerPlay function,
//write conditions based on game rules and  update the scores,
//choices and the result on the page.increase the scores

const play = (humanPlay) => {
  cleanResults();
  const computerPlay = getComputerPlay();

  // Bot played - results and img

  // results_bot.textContent += computerPlay;
  const img_bot = document.createElement("img");
  img_bot.setAttribute("src", `img/${computerPlay}_svg.svg`);
  img_bot.setAttribute("class", "img_bot");
  results__img_bot.appendChild(img_bot);

  // Human played - results and img

  // results_player.textContent += humanPlay;
  const img_human = document.createElement("img");
  img_human.setAttribute("src", `img/${humanPlay}_svg.svg`);
  img_human.setAttribute("class", "img_human");
  results__img_player.appendChild(img_human);

  if (humanPlay === computerPlay) {
    results_winner.textContent += "TIE...play again";
  } else if (humanPlay === "rock" && computerPlay === "scissors") {
    results_winner.textContent += "You Won";
    my_score++;
  } else if (humanPlay === "scissors" && computerPlay === "paper") {
    results_winner.textContent += "You Won";
    my_score++;
  } else if (humanPlay === "paper" && computerPlay === "rock") {
    results_winner.textContent += "You Won";
    my_score++;
  } else {
    results_winner.textContent += "You Lost";
    bot_score++;
  }

  scoreboard_bot.textContent = bot_score;
  scoreboard_you.textContent = my_score;
};

//EventListeners to start new round
btn_rock.addEventListener("click", () => {
  humanPlay = "rock";
  play(humanPlay);
});

btn_paper.addEventListener("click", () => {
  humanPlay = "paper";
  play(humanPlay);
});

btn_scissor.addEventListener("click", () => {
  humanPlay = "scissors";
  play(humanPlay);
});
