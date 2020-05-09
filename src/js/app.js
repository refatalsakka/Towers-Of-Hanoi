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

  const buttons = document.querySelectorAll('.btn, .control-themes span');
  const themeBtns = document.querySelectorAll('.control-themes span');

  document.body.classList = theme.getTheme();
  document.querySelector('.level strong').innerText = level.getLevel();

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      audio.buttonAudio();
    });
  });

  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      theme.change(btn.className);
    });
  });

  overlay.click(() => {
    overlay.slideOut(() => {
      game.start();
    });
  });

  return false;
}());
