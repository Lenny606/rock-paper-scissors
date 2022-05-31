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

//options in global scope to have acces for both functions
const options = ["rock", "paper", "scissors"];

// func returns random result aka bot plays
const getComputerPlay = () => {

  return options[Math.floor(Math.random() * options.length)];
};

 console.log(getComputerPlay()); //<<< can be removed here --- same log in play() function

// hardcoded input value for function, needs to be handled by buttons
const humanPlay = "paper"

//function which will take the parameter humanPlay, calls the getComputerPlay function, write conditions based on game rules and  update the scores, choices and the result on the page.increase the scores
const play = (humanPlay) => {

  const computerPlay = getComputerPlay()
  // log for value check , can be removed
  console.log(humanPlay);
  console.log(computerPlay);
  results_bot.textContent += computerPlay;
  results_player.textContent += humanPlay;
  if (humanPlay === computerPlay) {

    results_winner.textContent += "TIE...play again"
  } else if (humanPlay === "rock" && computerPlay === ("scissors")) {
    results_winner.textContent += "You Won"
    my_score++
  } else if (humanPlay === "scissors" && computerPlay === "paper") {
    results_winner.textContent += "You Won"
    my_score++
  }
  else if (humanPlay === "paper" && computerPlay === "rock") {
    results_winner.textContent += "You Won"
    my_score++
  }

  else {
    results_winner.textContent += "You Lost";
    bot_score++
  }

  scoreboard_bot.textContent = bot_score;
  scoreboard_you.textContent = my_score;

}

play(humanPlay)