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

//variables to store the score
let my_score = 0;
let bot_score = 0;
// Overall result, to be assigned
let result;

// func returns random result aka bot plays
const getComputerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

console.log(getComputerPlay());
