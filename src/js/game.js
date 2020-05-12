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

  const audio = new AudioController();
  const theme = new ThemeController();
  const level = new LevelController();
  const overlay = new OverlayController();
  const game = new GameController();

  const buttons = document.querySelectorAll('.btn, .control-themes span, .about-the-game span');
  const startBtn = document.querySelector('.overlay .btn');
  const themeBtns = document.querySelectorAll('.control-themes span');
  const aboutBtn = document.querySelector('.about-the-game span');

  let canInfoBeshowed = true;

  document.body.classList = theme.getTheme();
  [...themeBtns].filter((btn) => btn.classList[0] === theme.getTheme())[0].classList.add('active');
  document.querySelector('.level strong').innerText = level.getLevel();

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      audio.buttonAudio();
    });
  });

  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      theme.change(btn, themeBtns);
    });
  });

  startBtn.onclick = () => {
    canInfoBeshowed = true;

    if (!game.gameStarted) return game.start();

    game.replay();
  };

  aboutBtn.onclick = () => {
    if (!canInfoBeshowed) return;

    canInfoBeshowed = false;

    let btn = 'Start';
    const title = 'About The Game';
    const msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ulabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Atvero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    if (game.gameStarted) {
      btn = 'Replay';

      if (!game.pause) {
        return game._pause({ btn, title, msg });
      }
    }

    overlay.slideOut(() => {
      overlay.slideIn({ btn, title, msg });
    });
  };

  return false;
}());
