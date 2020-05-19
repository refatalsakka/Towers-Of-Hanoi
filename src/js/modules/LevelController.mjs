import CookieController from './CookieController';

export default class LevelController {
  static setLevel(level) {
    CookieController.setCoockie('level', level);
  }

  static getLevel() {
    return CookieController.getCoockie('level') ? CookieController.getCoockie('level') : 1;
  }

  static up() {
    this.setLevel(Number(this.getLevel()) + 1);
  }

  static animate() {
    const level = document.querySelector('.level strong');

    level.classList.add('up');

    this.up();

    level.addEventListener('animationend', () => {
      level.innerText = Number(this.getLevel());

      level.classList.remove('up');
    }, { once: true });
  }
}
