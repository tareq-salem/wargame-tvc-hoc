class GameOver {
  constructor(app) {
    this.app = app;

    this.gameOver();
  }

  gameOver() {
    let divText = document.createElement('div');
    let score = document.querySelector('#gameOver');
    let inputPlayerOne = document.querySelector('#pseudo1');
    let inputPlayerTwo = document.querySelector('#pseudo2');
    score.appendChild(divText);
    divText.classList.add('GameOverText');

    console.log(inputPlayerOne.value)

    if (this.app.GamePage.player2.life == 0 ) {
      divText.innerHTML = inputPlayerOne.value + ' Wins !';
    }

    if (this.app.GamePage.player1.life == 0 ) {
      divText.innerHTML = inputPlayerTwo.value + ' Wins !';
    }
  }
}
