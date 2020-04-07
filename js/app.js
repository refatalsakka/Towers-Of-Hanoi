import AudioController from './modules/AudioController.js';
import ThemeController from './modules/ThemeController.js';
import LevelController from './modules/LevelController.js';
import GameController from './modules/GameController.js';
import OverlayController from './modules/OverlayController.js';

(function () {
    if (!/Google Inc/.test(navigator.vendor)) return document.body.innerHTML = '<h1 class="not-chrome">Please use Google Chrome</h1>';
    
    const audio = new AudioController();
    const theme = new ThemeController();
    const level = new LevelController();
    const overlay = new OverlayController();
    const game = new GameController();
    
    const buttons = document.querySelectorAll('.btn, .control-themes span');
    const themeBtns = document.querySelectorAll('.control-themes span');
    
    document.body.classList = theme.getTheme();
    document.querySelector('.level strong').innerText = level.getLevel();
    
    buttons.forEach(button => {
        button.addEventListener('click', _ => {
            audio.buttonAudio();
        });
    });
    
    themeBtns.forEach(btn => {
        btn.addEventListener('click', _ => {
            theme.change(btn.className);
        });
    });

    overlay.click(_ => {
        overlay.slideOut(_ => {
            game.start();
        });
    });
})();

