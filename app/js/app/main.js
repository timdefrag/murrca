

function menu() {
  // Build a new Main Menu screen, and tell it
  // to call 'play' when a difficulty is picked.
  new Menu(play);
}

function play(diff) {
  // Build a new game of the given difficulty,
  // tell it to call 'gameover' when you lose.
  new Game(diff, gameover);
}

function gameover(stats) {
  // Build a new stats/score screen and show it,
  // then tell it to call 'menu' when you're done.
  new Stats(stats, menu);
}


// Run da gaem
menu();