import '../css/game.css';
import AudioController from './modules/AudioController';
import ThemeController from './modules/ThemeController';
import LevelController from './modules/LevelController';
import GameController from './modules/GameController';
import OverlayController from './modules/OverlayController';

(function startGame() {
  if (!/Google Inc/.test(navigator.vendor)) {
    document.body.innerHTML = '<h1 class="not-chrome">Please use Google Chrome</h1>';
    return;
  }

  const overlay = new OverlayController();
  const game = new GameController();

  const buttons = document.querySelectorAll('.btn, .control-themes span, .about-the-game span');
  const startBtn = document.querySelector('.overlay .btn');
  const themeBtns = document.querySelectorAll('.control-themes span');
  const aboutBtn = document.querySelector('.about-the-game span');

  let canInfoBeshowed = true;

  document.body.classList = ThemeController.getTheme();
  [...themeBtns].filter((btn) => btn.classList[0] === ThemeController.getTheme())[0].classList.add('active');
  document.querySelector('.level strong').innerText = LevelController.getLevel();

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      AudioController.buttonAudio();
    });
  });

  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      ThemeController.change(btn, themeBtns);
    });
  });

  startBtn.onclick = () => {
    canInfoBeshowed = true;
    if (!game.gameStarted || game.gameFinished) return game.start();

    game.replay();
  };

  aboutBtn.onclick = () => {
    if (!canInfoBeshowed) return;

    // Texts here is just temporary
    let btn = 'Start';
    const title = 'About The Game';
    const msg = `
      The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower[1] and sometimes pluralized as Towers) > is a mathematical game or puzzle.
      It consists of three rods and a number of disks of different sizes, >which can slide onto any rod.
      The puzzle starts with the disks in a neat stack in ascending order of size >on one rod, the smallest at the top, thus making a conical shape.
      <br/>
      <a href="https://github.com/refatalsakka/Towers-Of-Hanoi#about-the-game-wiki" target="_blank">Read the rules</a>
      `;

    if (game.gameStarted) {
      btn = 'Replay';
      canInfoBeshowed = false;
      if (!game.pause) return game._pause({ btn, title, msg });
    }

    if (overlay.isSlideIn) {
      overlay.slideOut(() => overlay.slideIn({ btn, title, msg }));
      canInfoBeshowed = false;
      return;
    }

    canInfoBeshowed = true;
  };

  return false;
}());
